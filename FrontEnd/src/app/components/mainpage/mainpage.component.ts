import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserloginService } from 'src/app/services/userlogin.service';
import { UserregisterService } from 'src/app/services/userregister.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {


  constructor(public router:Router,public loginservice:UserloginService,public registerservice:UserregisterService) { }

  ngOnInit() {
  }
   getUserHome(){
     this.loginservice.user.isValid=true;
     this.registerservice.user.isValid=true;
      this.router.navigate(["userhome"])
   }
   getAdminHome(){
    this.router.navigate(["adminprofile"])
   }
   getAdminLogin(){
    this.router.navigate(["adminlogin"])

   }
   registerUser(){
    this.router.navigate(["registeruser"])
   }
   userlogin(){
    this.router.navigate(["userlogin"])
   }
}
