import { Component, OnInit } from '@angular/core';
import { Place } from '../place';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceService } from '../place.service';



@Component({
  selector: 'app-update-place',
  templateUrl: './update-place.component.html',
  styleUrls: ['./update-place.component.css']
})
export class UpdatePlaceComponent implements OnInit {

  id: number;
  place: Place;
  submitted;

  constructor(private route: ActivatedRoute,private router: Router,
    private placeService: PlaceService) { }

  ngOnInit() {
    this.place = new Place();

    this.id = this.route.snapshot.params['id'];

    this.placeService.getPlace(this.id)
      .subscribe(data => {
        console.log(data)
        this.place = data;
      }, error => console.log(error));
  }

 save() {
   this.placeService.createPlace(this.place)
   .subscribe(data => {
   console.log(data);
   this.gotoList();
   },
   error => console.log(error));
   this.place = new Place();

   }

   onSubmit() {
     this.submitted = true;
     this.save();
   }

  gotoList() {
    this.router.navigate(['/places']);
  }

}

