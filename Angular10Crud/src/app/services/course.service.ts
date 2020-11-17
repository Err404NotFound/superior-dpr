import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { KeyValuePipe } from '@angular/common';

const baseUrl = '/api/cscore';
const elective1Url = '/api/cscore/elective1/list';
const elective2Url = '/api/cscore/elective2/list';
const elective3Url = '/api/cscore/elective3/list';

const updateUrl = '/api/updateCoreList';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor( private http:HttpClient) { }
  
  getAll(): Observable<any>{
    return this.http.get(`${baseUrl}`);
  }

  getElective1All(): Observable<any>{
    return this.http.get(`${elective1Url}`);
  }

  getElective2All(): Observable<any>{
    return this.http.get(`${elective2Url}`);
  }

  getElective3All(): Observable<any>{
    return this.http.get(`${elective3Url}`);
  }

  get(id): Observable<any>{
    return this.http.get(`${baseUrl}/${id}`);
  }

  update(data): any {
  //   data = [{ "id": "5f6cda383cab4d677974fa58", "courseNumber": "BIO1110L", "courseName": "Life Science Laboratory", "completionStatus": "TO DO",  "prereqCourseNumber": "",  "coreqCourseNumber": "",  "geArea": "B3",  "units": 1},
  //   { "id": "5f6d6b523cab4d677974fa68",  "courseNumber": "PHY1510",  "courseName": "Introduction to Newtonian Mechanics",  "completionStatus": "TO DO", "prereqCourseNumber": "MAT1140|MAT1150","coreqCourseNumber": "PHY1510L","geArea": "B3","units": 3}
  // ];
  //data=["5f6cda383cab4d677974fa58","5f6d6b523cab4d677974fa68"];
  //data=JSON.stringify(data);
  //data=(JSON.parse(JSON.stringify(data).replace(/\\n/g, '')));
  //data=JSON.parse(JSON.stringify(data).replace(/\\/g, ''));
  
  const coursedata=JSON.parse(data);
  //data=JSON.stringify(coursedata.checkArray1);
    console.log('update '+ coursedata + ' data: ' + data);
    return this.http.put(`${updateUrl}`, coursedata)
      .subscribe(data => console.log(data), 
      error => console.log(error));
    
//     return this.http.put(`${updateUrl}`, 0: "{↵  "id": "5f6cda383cab4d677974fa58",↵  "courseNumber": "BIO1110L",↵  "courseName": "Life Science Laboratory",↵  "completionStatus": "TO DO",↵  "prereqCourseNumber": "",↵  "coreqCourseNumber": "",↵  "geArea": "B3",↵  "units": 1↵}"
// 1: "{↵  "id": "5f6d6b523cab4d677974fa68",↵  "courseNumber": "PHY1510",↵  "courseName": "Introduction to Newtonian Mechanics",↵  "completionStatus": "TO DO",↵  "prereqCourseNumber": "MAT1140|MAT1150",↵  "coreqCourseNumber": "PHY1510L",↵  "geArea": "B3",↵  "units": 3↵}"
// )

  }

  // updateTodo(data:): Promise<Todo> {
  //   return this.http.put(`${updateUrl}`, data)
  //     .toPromise()
  //     .then(response => response.json() )
  //     .catch(this.handleError);
  // }
  /*create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  */
  findByCourseName(title): Observable<any> {
    return this.http.get(`${baseUrl}?title=${title}`);
  }    

}
