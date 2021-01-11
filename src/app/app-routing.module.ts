import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AddquestionComponent } from './components/addquestion/addquestion.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminprofileComponent } from './components/adminprofile/adminprofile.component';
import { ExampageComponent } from './components/exampage/exampage.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { RegisteruserComponent } from './components/registeruser/registeruser.component';
import { RemovequestionComponent } from './components/removequestion/removequestion.component';
import { ReportComponent } from './components/report/report.component';
import { UserhomeComponent } from './components/userhome/userhome.component';


const routes: Routes = [
  {path: "mainpage", component: MainpageComponent},
  {path: "userhome", component: UserhomeComponent},
  {path: "aboutus", component: AboutusComponent},
  {path: "report", component: ReportComponent},
  {path: "registeruser", component: RegisteruserComponent},
  {path: "adminlogin", component: AdminloginComponent},  
  {path: "adminprofile", component: AdminprofileComponent},  
  {path: "exampage", component:ExampageComponent},   
  {path: "addquestion", component:AddquestionComponent},   
  {path: "removequestion", component:RemovequestionComponent},  
  {path: "", component: AdminprofileComponent},
  

  {path: "**", redirectTo: "mainpage"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
