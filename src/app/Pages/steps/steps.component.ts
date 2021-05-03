import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {

  steps: any = 1;

  @Input() stepData: any;
 
  data = [
    {
      id: 1,
      name: "Load Data",
      route: "raw-data"
    },
    {
      id: 2,
      name: "Review loaded Data",
      route: 'review-data'
    },
    {
      id: 3,
      name: "Configure SOLUS",
      route: 'solus'
    },
    {
      id: 4,
      name: ""
    },
    {
      id: 5,
      name: ""
    },
    {
      id: 6,
      name: ""
    },
    {
      id: 7,
      name: ""
    },
    {
      id: 8,
      name: ""
    },
    {
      id: 9,
      name: ""
    },
    {
      id: 10,
      name: ""
    },
    {
      id: 11,
      name: ""
    },
    {
      id: 12,
      name: ""
    },
    {
      id: 13,
      name: ""
    },
    {
      id: 14,
      name: ""
    },
    {
      id: 15,
      name: ""
    },
  ]
  constructor(private route: Router, private location: Location) { }

  ngOnChanges(changes: SimpleChanges): void{
    console.log("this is steps data", this.stepData);
    
  }

  ngOnInit(): void {
  }

  next(){
    console.log("this is routes", this.stepData.route);
    this.route.navigate([this.stepData.route])
  }
  backClicked() {
    this.location.back();
  }

}
