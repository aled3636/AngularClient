import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePlaceComponent } from './create-place/create-place.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { UpdatePlaceComponent } from './update-place/update-place.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatePlaceComponent,
    PlaceListComponent,
    PlaceDetailsComponent,
    UpdatePlaceComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
