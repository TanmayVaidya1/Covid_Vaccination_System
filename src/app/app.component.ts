import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Task_18';
  candidateList:any = [
    "Tanmay Vaidya",
    "Allu Arjun",
    "Virat Kohli",
    "Kiara Advani",
    "Akshay Kumar",
    "Mukesh Ambani",
    "Warren Buffet",
    "Mark Zukerberg",
    "Elon Musk",
    "Bill Gates"
  ];
   dose1:any = [];

   dose2:any = [];

   boosterdose:any = [];

   d1Done(index:any){
     this.dose1.push(this.candidateList[index]);
     this.candidateList.splice(index,1);
   }

   d2Done(index:any){
    this.dose2.push(this.dose1[index]);
    this.dose1.splice(index,1);
  }

  boosterdone(index:any){
    this.boosterdose.push(this.dose2[index]);
    this.dose2.splice(index,1);
  }

  delete(index:any){
    this.candidateList.splice(index,1);
  }

  deletedose1(index:any){
    this.dose1.splice(index,1);
  }

  deletedose2(index:any){
    this.dose2.splice(index,1);
  }

  undo(index:any){
    this.candidateList.push(this.dose1[index]);
    this.dose1.splice(index,1);
  }

  undo2(index:any){
    this.dose1.push(this.dose2[index]);
    this.dose2.splice(index,1);
  }

  
  
}
