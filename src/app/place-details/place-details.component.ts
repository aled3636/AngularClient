import { Place } from '../place';
import { Component, OnInit, Input } from '@angular/core';
import { PlaceService } from '../place.service';
import { PlaceListComponent } from '../place-list/place-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {

  id: number;
  place: Place;

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

  list(){
    this.router.navigate(['places']);
  }
}
