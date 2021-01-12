import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Course } from "src/app/course";
import { Question } from "src/app/question";
import { AddquestionService } from "src/app/services/question.service";
@Component({
  selector: "app-addquestion",
  templateUrl: "./addquestion.component.html",
  styleUrls: ["./addquestion.component.scss"],
})
export class AddquestionComponent implements OnInit {
  question: Question;
  isFormSubmitted = false;
  courses: Course[] = [];

  @ViewChild("addQuestionForm", { static: false })
  form: NgForm;

  constructor(private addquestionService: AddquestionService) {}

  ngOnInit() {
    this.question = new Question({});
    this.courses.push(new Course({ courseId: 4003, courseName: "java" }));
    this.courses.push(new Course({ courseId: 4002, courseName: "python" }));
  }

  public addQuestion() {
    this.isFormSubmitted = true;
    var a = this.question;
    if (this.form.valid) {
      this.addquestionService.addQuestion(this.question).subscribe((data) => {
        this.question.id = data;
      });
    }
  }
}
