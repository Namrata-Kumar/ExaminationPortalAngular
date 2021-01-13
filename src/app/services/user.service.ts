import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../dto/user';
import { ForgotPassword } from '../forgotPassword';
import { ResetPassword } from '../resetPassword';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public registerUser(user:User):Observable<User>{
    return this.http.post<User>("http://localhost:8080/register",user);
 }

public resetPassword(resetPassword:ResetPassword):Observable<boolean>{
  return this.http.post<boolean>("http://localhost:8080/resetPassword",resetPassword);
}

public forgotPassword(forgotPassword:ForgotPassword):Observable<ForgotPassword>{
  return this.http.post<ResetPassword>("http://localhost:8080/forgotPassword",forgotPassword);
}

}
