import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ForgotPassword } from "src/app/forgotPassword";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-forgotpassword",
  templateUrl: "./forgotpassword.component.html",
  styleUrls: ["./forgotpassword.component.scss"],
})
export class ForgotpasswordComponent implements OnInit {
  forgotPassword: ForgotPassword;

  @ViewChild("forgotPasswordForm", { static: false })
  form: NgForm;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.forgotPassword = new ForgotPassword({});
  }

  public sendLinkToEmail() {
    this.userService.forgotPassword(this.forgotPassword).subscribe((data) => {
      this.forgotPassword = data;
    });
  }
}
