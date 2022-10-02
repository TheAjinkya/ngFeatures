import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  constructor(private http:HttpClient) { }

  getAllPassengerData():Observable<any> {
    return this.http.get("https://api.instantwebtools.net/v1/passenger")
}
}
