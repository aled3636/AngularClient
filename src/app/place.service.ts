import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private baseUrl = 'http://localhost:8080/api/v1/places';

  constructor(private http: HttpClient) { }

  getPlace(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPlace(place: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, place);
  }

  updatePlace(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePlace(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPlacesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}

