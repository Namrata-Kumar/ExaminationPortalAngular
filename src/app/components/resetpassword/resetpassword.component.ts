import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ResetPassword } from "src/app/resetPassword";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-resetpassword",
  templateUrl: "./resetpassword.component.html",
  styleUrls: ["./resetpassword.component.scss"],
})
export class ResetpasswordComponent implements OnInit {
  reset: ResetPassword;
  value: boolean;
  isFormSubmitted = false;
  code: string;

  @ViewChild("resetPasswordForm", { static: false })
  form: NgForm;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.reset = new ResetPassword({});
    this.code = this.activatedRoute.snapshot.params["code"];
    this.reset.code = this.code;
  }

  resetPassword() {
    this.isFormSubmitted = true;
    if (!(this.reset.newPassword == this.reset.confirmPassword)) {
      alert("Passwords not matching");
    }
    this.userService.resetPassword(this.reset).subscribe((data) => {
      this.value = data;
    });
  }
}
