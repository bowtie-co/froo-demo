import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const EndPoint = 	'https://stage-api.usacycling.org/events';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }
  getEvents(){
    return this.http.get(EndPoint);
  }
  searchEvents(criteria: any){
  //  return this.http.get(EndPoint, criteria)
    return this.http.get(EndPoint, { params: criteria})
  }

}
