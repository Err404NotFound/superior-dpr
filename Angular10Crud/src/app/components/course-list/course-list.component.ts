import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { CourseService } from 'app/services/course.service';
import { merge, Observable, Subject } from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];


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
  currentIndex=1;
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

    // this.currentIndex=this.coursesNotJson.indexOf(this.model);
    // this.currentCourse=this.courses[this.currentIndex]; 
    // console.log('shit: ' +this.currentCourse + " " + this.currentIndex);
  }
/*
  removeAllTutorials(): void {
    this.tutorialService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveTutorials();
        },
        error => {
          console.log(error);
        });
  }
*/
  searchTitle(): void {
    this.currentIndex=this.coursesNotJson.indexOf(this.model);
    this.currentCourse=this.courses[this.currentIndex]; 
    console.log('shit: ' +this.currentCourse + " " + this.currentIndex);
    
    // this.courseService.findByCourseName(this.courseName)
    //   .subscribe(
    //     data => {
    //       this.courses = data;
    //       console.log(data);
    //     },
    //     error => {
    //       console.log(error);
    //     });
  }
}
