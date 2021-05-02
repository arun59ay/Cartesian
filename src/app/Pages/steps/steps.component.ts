import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {

  data = [
    {
      id: 1,
      name: "Load Data"
    },
    {
      id: 2,
      name: "Review loaded Data"
    },
    {
      id: 3,
      name: "Configure SOLUS"
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
  constructor() { }

  ngOnInit(): void {
  }

}
