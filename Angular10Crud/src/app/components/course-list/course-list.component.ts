import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { CourseService } from 'app/services/course.service';
import { merge, Observable, Subject } from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  model: any;
  courses: Array<any>;
  coursesNotJson:Array<any>=[];
  currentCourse = null;
  currentIndex=0;
  courseName='';

  constructor(private courseService: CourseService) { }

  

  @ViewChild('instance', {static: true}) instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? this.coursesNotJson
        : this.coursesNotJson.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }


  ngOnInit(): void {
    this.retrieveCourses();
  }

  retrieveCourses(): void{
    this.courseService.getAll()
      .subscribe(
        data=>{
          this.courses=data;
          this.courses.forEach(course=>{
            this.coursesNotJson.push(course.courseNumber +" "+ course.courseName);
          })
          console.log(data);
        },
        error =>{
          console.log(error);
        });
  }

  refreshList(): void{
    this.retrieveCourses();
    this.currentCourse=null;
    this.currentIndex=-1;
  }

  setActiveCourse(course, index): void{
    this.currentCourse=course;
    this.currentIndex=index;
  }

  searchTitle(): void {
    this.currentIndex=this.coursesNotJson.indexOf(this.model);
    this.currentCourse=this.courses[this.currentIndex]; 
    
  }
}
