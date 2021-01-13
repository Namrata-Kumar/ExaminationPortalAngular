import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from 'src/app/exam.service';
import { ReportCard } from 'src/app/ReportCard';

@Component({
  selector: 'app-exam-home',
  templateUrl: './exam-home.component.html',
  styleUrls: ['./exam-home.component.scss']
})
export class ExamHomeComponent implements OnInit {

  reportCard: ReportCard;
  constructor(private router: Router, private examService: ExamService) { }

  ngOnInit() {
  }

  JavaReportFetch() {
    this.examService.findingReportForExam().subscribe(
      data => {
        if (data == null) {
          console.log("Exam Cannot be Conducted");
        } else {
          this.reportCard = data;
     sessionStorage.setItem("currentLevel",this.reportCard.examLevel.toString());
          console.log(JSON.stringify(this.reportCard));
        }
      }
    );
    this.router.navigate(["starttest"])
  }
}
