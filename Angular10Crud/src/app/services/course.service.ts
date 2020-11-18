import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { KeyValuePipe } from '@angular/common';

const baseUrl = '/api/cscore';
const elective1Url = '/elective1/list';
const elective2Url = '/elective2/list';
const elective3Url = '/elective3/list';

const updateCoreUrl = '/api/updateCoreList';
const updateElective1Url = '/api/updateElective1List';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor( private http:HttpClient) { }
  
  getAll(): Observable<any>{
    return this.http.get(`${baseUrl}`);
  }

  getElective1All(): Observable<any>{
    return this.http.get(`${baseUrl}${elective1Url}`);
  }

  getElective2All(): Observable<any>{
    return this.http.get(`${baseUrl}${elective2Url}`);
  }

  getElective3All(): Observable<any>{
    return this.http.get(`${baseUrl}${elective3Url}`);
  }

  get(id): Observable<any>{
    return this.http.get(`${baseUrl}/${id}`);
  }

  updateCore(data): any {
//   data = [{ "id": "5f6cda383cab4d677974fa58", "courseNumber": "BIO1110L", "courseName": "Life Science Laboratory", "completionStatus": "TO DO",  "prereqCourseNumber": "",  "coreqCourseNumber": "",  "geArea": "B3",  "units": 1},
//   { "id": "5f6d6b523cab4d677974fa68",  "courseNumber": "PHY1510",  "courseName": "Introduction to Newtonian Mechanics",  "completionStatus": "TO DO", "prereqCourseNumber": "MAT1140|MAT1150","coreqCourseNumber": "PHY1510L","geArea": "B3","units": 3},
//   {
//     "id": "5f6d6c953cab4d677974fa6c",
//     "courseNumber": "STA2260",
//     "courseName": "Probability and Statistics for Computer Scientists and Engineers",
//     "completionStatus": "TO DO",
//     "prereqCourseNumber": "MAT1150|MAT1310",
//     "coreqCourseNumber": "",
//     "geArea": "",
//     "units": 3
//   }
// ];

    //console.log('update '+ coursedata + ' data: ' + data);
    return this.http.put(`${updateCoreUrl}`, data)
      .subscribe(data => console.log(data), 
      error => console.log(error));
    
  }

  updateElective1(data): Promise<any>{

    return this.http.put(`${updateElective1Url}`, data)
    .toPromise()
    .then(res=>console.log(res))
    .catch(error=>console.log(error));
  }

  
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
