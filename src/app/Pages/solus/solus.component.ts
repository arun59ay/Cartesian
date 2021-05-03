import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solus',
  templateUrl: './solus.component.html',
  styleUrls: ['./solus.component.scss']
})
export class SolusComponent implements OnInit {

  stepData: any = {
    name: "Solus Data",
    step: 3,   
    route: "raw-data"
  }


  constructor() { }

  ngOnInit(): void {
  }

}
