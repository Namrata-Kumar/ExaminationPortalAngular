import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './Question';
import { ReportCard } from './ReportCard';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
 
  @Input()
  userId: number = 5023;
  courseId: number = 4002;
  examLevel: number = 2;
  obj=[];
  constructor(private http: HttpClient) {
    //this.examLevel=Number(sessionStorage.getItem("currentLevel"));
   }

  public fetchExamQuestion(): Observable<Question[]> {
    console.log("fetching exam questions");
    return this.http.get<Question[]>('http://localhost:8080/fetchExamQuestions/' + this.examLevel + '/' + this.courseId);  }

  public findingReportForExam(): Observable<ReportCard> {
    return this.http.get<ReportCard>('http://localhost:8080//findReport/' + this.userId + '/' + this.courseId);
  }
}
