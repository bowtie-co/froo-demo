import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncidentsService {

  state : number;
  occuredAt: string;
  occuredOn: Date;
  raceClass: string;
  raceCategory: string;
  raceCourseType: string;
  raceAgeRange: number;
  noOfRacers: number;
  racerGender: string;
  
  constructor() { 
    this.state = 1;
  }
  getLifeCycle() {
    return {
      step1: { title : "Timing of Incident" },
      step2: { title : "Race Details" },  
      step3: { title : "Location Details" },  
      step4: { title : "Location Details" },  
      step5: { title : "Location Details" },  
    };
  }
  setLifeCycleState(state: number) {
    this.state = state;
  }
  getCurrentState() {
    return this.state;
  }
  getOccurences(){
    return [
      { title: "Before Event", opt: "before-event" },
      { title: "During Event", opt: "during-event" },
      { title: "After Event", opt: "after-event" },
      { title: "Practice", opt: "practice" },
      { title: "Setup", opt: "setup" },
      { title: "Others", opt: "others" },
    ];
  }
  getRaceClasses() {
    return ['Juniors','U-23','Elite','Masters','coll','para'];
  }
  getRaceCategories() {
    return ['mtb','coll','rd','tk','cx'];
  }
  getRaceCourseTypes() {
    return ['Paved','Gravel','Dirt','Trail','velodrome/Track','other..'];
  }
  setOccuredAt(occuredAt: string) {
    this.occuredAt = occuredAt;
  }
  setOccuredOn(occuredOn: Date) {
    this.occuredOn = occuredOn;
  }
  getInput() {
    return {
      timeOfOccurence: {
        occuredAt: this.occuredAt,
        occuredOn: this.occuredOn,
      },
      raceDetails : {
        class: this.raceClass,
        category: this.raceCategory,
        courseType: this.raceCourseType,
        ageRange: this.raceAgeRange,
        gender: this.racerGender
      }
    }
  }
}
