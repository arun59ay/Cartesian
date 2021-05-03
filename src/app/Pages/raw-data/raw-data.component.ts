import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raw-data',
  templateUrl: './raw-data.component.html',
  styleUrls: ['./raw-data.component.scss']
})
export class RawDataComponent implements OnInit {

  stepData: any = {
    name: "Load Data",
    step: 1,
    route: "review-data"
  }
  filesDataArray: any[];
  Second: any;
  fileDataText: any;
  textFileName: any;
  filesDataArraySecond: any[];
  fileDetailsSecond: any;
  fileDataTextSecond: any;
  textFileNameSecond: any;
  fileDetails: any;
  constructor() { }

  ngOnInit(): void {
  }

  save(){
    console.log("this is raw data component");
    
  }

  fileUpload(event: any) {
    this.filesDataArray = [];
    this.fileDetails = event;
    if (event.target.files && event.target.files[0]) {
      const dataLength: any = event.target.files;
      for (var i = 0; i < dataLength.length; i++) {
        let reader = new FileReader();
        reader.readAsBinaryString(dataLength[i]);
        let fileNameType: any = dataLength[i].name;
        reader.onload = (element: any) => {
          let fileData = element.target.result;
          let filePayload = {
            FileName: fileNameType,
          };
          this.filesDataArray.push(filePayload);
          console.log("file",fileData);
          this.fileDataText = fileData;
          console.log("fileData",this.fileDataText);
          this.textFileName = filePayload.FileName;
        };
      }
    }
  }
  fileUploadMaster(event: any) {
    this.filesDataArraySecond = [];
    this.fileDetailsSecond = event;
    if (event.target.files && event.target.files[0]) {
      const dataLength: any = event.target.files;
      for (var i = 0; i < dataLength.length; i++) {
        let reader = new FileReader();
        reader.readAsBinaryString(dataLength[i]);
        let fileNameType: any = dataLength[i].name;
        reader.onload = (element: any) => {
          let fileData = element.target.result;
          let filePayload = {
            FileName: fileNameType,
          };
          this.filesDataArraySecond.push(filePayload);
          console.log("file",fileData);
          this.fileDataTextSecond = fileData;
          console.log("fileData",this.fileDataText);
          this.textFileNameSecond = filePayload.FileName;
        };
      }
    }
  }


}
