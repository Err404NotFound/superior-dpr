import { Component, OnInit } from '@angular/core';
import { CourseService } from 'app/services/course.service';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: any;
  currentCourse = null;
  currentIndex=1;
  courseName='';

  title = 'angular-material-autocomplete';
  myControl = new FormControl();
  options: string[] = ['Biology', 'Computer Science', 'Gardening'];
  filteredOptions: Observable<string[]>;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.retrieveCourses();

    // filters autocomplete as the user types inputs
    this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filter(value))
          );
          }

  // this method filters the string input from the search bar
  private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();

      return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }

  retrieveCourses(): void{
    this.courseService.getAll()
      .subscribe(
        data=>{
          this.courses=data;
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
    this.courseService.findByCourseName(this.courseName)
      .subscribe(
        data => {
          this.courses = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
