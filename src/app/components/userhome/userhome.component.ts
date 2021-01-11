import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
   getExamPage(){

   }
   viewReport(){
     this.router.navigate(["report"]);
   }
}
