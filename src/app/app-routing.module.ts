import { PlaceDetailsComponent } from './place-details/place-details.component';
import { CreatePlaceComponent } from './create-place/create-place.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceListComponent } from './place-list/place-list.component';
import { UpdatePlaceComponent } from './update-place/update-place.component';

const routes: Routes = [
  { path: '', redirectTo: 'place', pathMatch: 'full' },
  { path: 'places', component: PlaceListComponent },
  { path: 'add', component: CreatePlaceComponent },
  { path: 'update/:id', component: UpdatePlaceComponent },
  { path: 'details/:id', component: PlaceDetailsComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
