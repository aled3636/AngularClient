import { PlaceService } from '../place.service';
import { Place } from '../place';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.component.html',
  styleUrls: ['./create-place.component.css']
})
export class CreatePlaceComponent implements OnInit {

  place: Place = new Place();
  submitted = false;

  constructor(private placeService: PlaceService,
    private router: Router) { }

  ngOnInit() {
  }

  newPlace(): void {
    this.submitted = false;
    this.place = new Place();
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
