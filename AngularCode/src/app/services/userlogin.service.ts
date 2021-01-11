import { Injectable } from '@angular/core';

class Userlogin{
  constructor(public isValid:boolean){}
}
@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  user:Userlogin = {isValid: false}
  constructor() { }
}
