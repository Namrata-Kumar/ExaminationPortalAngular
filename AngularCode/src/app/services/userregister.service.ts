import { Injectable } from '@angular/core';

class Userregister{
  constructor(public isValid:boolean){}
}

@Injectable({
  providedIn: 'root'
})
export class UserregisterService {
  user:Userregister = {isValid: false}
  constructor() { }
}
