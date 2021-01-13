import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { ExamService } from 'src/app/exam.service';
import { Question } from 'src/app/Question';
import { ReportCard } from 'src/app/ReportCard';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.scss']
})
export class ExamPageComponent implements OnInit {

  question: Question;
  @Input()
  finish: boolean = true;
  optionOne: string = '';
  optionTwo: string = '';
  optionThree: string = '';
  optionFour: string = '';
  currentQuestion: number = 0;
  totalQuestions: number = 0;
  selectedOption: string = '';
  description: string = '';
  marks: number = 0;
  questions = [];
  show: boolean = false;
  buttonValue: string = 'Launch';
  userAnswers = [];
  evaluatin = [];
  examLevel: number = 0;
  studentName: string;
  status: string;
  constructor(private _examService: ExamService, private router: Router) { }

  ngOnInit() {
    //this.fetchExamQuestion();
  }
  fetchExamQuestion() {
    if (this.buttonValue == 'Launch') {
      this._examService.fetchExamQuestion().subscribe(
        data => {
          if (data == null) {
            console.log("Exam Cannot be Conducted");
          } else {
            console.log("fatched");
            console.log(JSON.stringify(data));
            this.questions = data;
          }
        }
      );
      this.buttonValue = 'Next';
    }
    else {
      this.totalQuestions = Object.keys(this.questions).length;
      this.show = true;
      this.question = this.questions[this.currentQuestion];

      // this.examLevel=this.question.examLevel;

      this.description = this.question.description;
      this.optionOne = this.question.optionOne;
      this.optionTwo = this.question.optionTwo;
      this.optionThree = this.question.optionThree;
      this.optionFour = this.question.optionFour;
      this.evaluatin[this.currentQuestion] = this.question.answer;
      this.userAnswers[this.currentQuestion - 1] = this.selectedOption;
      this.currentQuestion++;
      if (this.currentQuestion === this.totalQuestions) {
        this.finish = false;
      }
    }
  }
  optionChange(event: any) {
    this.selectedOption = event.target.value;
  }

  finishTest() {
    this.router.navigate(['reportcard']);
    this.userAnswers[this.currentQuestion - 1] = this.selectedOption;
    for (let i = 0; i < this.totalQuestions; i++) {
      if (this.userAnswers[i] === this.evaluatin[i]) {
        this.marks++;
      }
      
    }
    // console.log(JSON.stringify(this.userAnswers));
    // console.log(JSON.stringify(this.evaluatin));
  }


}
