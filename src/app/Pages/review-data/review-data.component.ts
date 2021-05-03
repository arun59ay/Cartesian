import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-data',
  templateUrl: './review-data.component.html',
  styleUrls: ['./review-data.component.scss']
})
export class ReviewDataComponent implements OnInit {

  stepData: any = {
    name: "Review Data",
    step: 2,   
    route: "solus"
  }

  tableData: any=[
    {
      
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
