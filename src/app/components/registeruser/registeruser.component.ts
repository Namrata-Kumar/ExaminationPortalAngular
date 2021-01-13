import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/dto/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.scss']
})
export class RegisteruserComponent implements OnInit {

  user=new User();
  fetchedUser=new User();
  value:boolean;
  private _userService:UserService;
  constructor(private userService:UserService) { 
    this._userService=userService;
   }

  ngOnInit() {
  }
   
  public registerUser(){
    this.userService.registerUser(this.user).subscribe(data=>{
     console.log(JSON.stringify(data));
      this.value=true;
     alert("suucessfully regsitered ");
     this.fetchedUser=data;
    }
    );
}
}
