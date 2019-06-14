import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrooService {

  state: number;
  event: any;

  constructor() { }

  setState(currentState: number) {
    this.state = currentState;
  }
  getState() {
    return this.state;
  }
  setEvent(event: any)  {
    this.event = event;
  }
  getEvent() {
    return this.event;
  }
}
