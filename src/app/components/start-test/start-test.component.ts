import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from 'src/app/exam.service';

@Component({
  selector: 'app-start-test',
  templateUrl: './start-test.component.html',
  styleUrls: ['./start-test.component.scss']
})
export class StartTestComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit() {

  }
  changePage() {
    this.router.navigate(["exampage"]);
  }
}
