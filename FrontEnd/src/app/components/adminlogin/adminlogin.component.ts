import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  validateAdminLogin(){
    this.router.navigate(["adminprofile"])
  }
}
