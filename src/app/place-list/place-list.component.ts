import { PlaceDetailsComponent } from '../place-details/place-details.component';
import { Observable } from "rxjs";
import { PlaceService } from "../place.service";
import { Place } from "../place";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-place-list",
  templateUrl: "./place-list.component.html",
  styleUrls: ["./place-list.component.css"]
})
export class PlaceListComponent implements OnInit {
  places: Observable<Place[]>;

  constructor(private placeService: PlaceService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.places = this.placeService.getPlacesList();
  }

  deletePlace(id: number) {
    this.placeService.deletePlace(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  updatePlace(id: number){
   this.router.navigate(['update', id]);
  }

  placeDetails(id: number){
    this.router.navigate(['details', id]);
  }
}

