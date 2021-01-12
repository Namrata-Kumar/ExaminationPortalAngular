import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  getUserHomePage(){
    this.router.navigate(["userhome"])
  }

}
