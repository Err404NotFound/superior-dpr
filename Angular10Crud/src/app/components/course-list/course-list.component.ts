import { Component, OnInit } from '@angular/core';
import { CourseService } from 'app/services/course.service';


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

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.retrieveCourses();
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
