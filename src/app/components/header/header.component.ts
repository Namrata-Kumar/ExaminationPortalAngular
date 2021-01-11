import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserloginService } from 'src/app/services/userlogin.service';
import { UserregisterService } from 'src/app/services/userregister.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  

  constructor(public router:Router,public loginservice:UserloginService,public registerservice:UserregisterService) { }

  ngOnInit() {
  }
  getLogIn(){
    this.router.navigate(["login"]);
  }
  getRegister(){
   
    this.router.navigate(["register"]);
  }
}
