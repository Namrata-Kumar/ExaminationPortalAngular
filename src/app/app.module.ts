import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ReportComponent } from './components/report/report.component';  
import { AddquestionComponent } from './components/addquestion/addquestion.component';
import { RemovequestionComponent } from './components/removequestion/removequestion.component';
import { RegisteruserComponent } from './components/registeruser/registeruser.component';
import { SearchuserComponent } from './components/searchuser/searchuser.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { Level1Component } from './components/level1/level1.component';
import { AdminprofileComponent } from './components/adminprofile/adminprofile.component';
import { ReportcardComponent } from './components/reportcard/reportcard.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExamHomeComponent } from './components/exam-home/exam-home.component';
// import { ExamPageComponent } from './components/exam-page/exam-page.component';
import { StartTestComponent } from './components/start-test/start-test.component';
import { ExamPageComponent } from './components/exam-page/exam-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainpageComponent,
    UserhomeComponent,
    AboutusComponent,
    ReportComponent,
    AddquestionComponent,
    RemovequestionComponent,
    RegisteruserComponent,
    SearchuserComponent,
    AdminloginComponent,
    Level1Component,
    AdminprofileComponent,
    ReportcardComponent,
    UserloginComponent,
    FooterComponent,
    ExamHomeComponent,
    // ExamPageComponent,
    StartTestComponent,
    ExamPageComponent,
    ResetpasswordComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
