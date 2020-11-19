import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { KeyValuePipe } from '@angular/common';

const baseUrl = '/api/cscore';
const elective1Url = '/elective1/list';
const elective2Url = '/elective2/list';
const elective3Url = '/elective3/list';

const updateCoreUrl = '/api/updateCoreList';
const updateElectives1Url = '/api/updateElectives1List';
const updateElectives2Url = '/api/updateElectives2List';
const updateElectives3Url = '/api/updateElectives3List';

const geBaseUrl = '/api/ge';
const geAreaAUrl = '/areaA';
const geAreaBUrl = '/areaB';
const geAreaCUrl = '/areaC';
const geAreaDUrl = '/areaD';
const geAreaEUrl = '/areaE';

const getCoreUrl = '/api/getCompletedCoreList';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor( private http:HttpClient) { }
  
  getCoreCompleted(): Observable<any>{
  	return this.http.get(`${getCoreUrl}`);
  }
  
  getAll(): Observable<any>{
    return this.http.get(`${baseUrl}`);
  }
  
  getAllCompleted(): Observable<any> {
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

  updateElectives1(data): Promise<any>{

    return this.http.put(`${updateElectives1Url}`, data)
    .toPromise()
    .then(res=>console.log(res))
    .catch(error=>console.log(error));
  }

  updateElectives2(data): Promise<any>{
    return this.http.put(`${updateElectives2Url}`, data)
    .toPromise()
    .then(res=>console.log(res))
    .catch(error=>console.log(error));
  }
  
  updateElectives3(data): Promise<any>{
    return this.http.put(`${updateElectives3Url}`, data)
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

  getGEAreaA1All(): Observable<any>{
    return this.http.get(`${geBaseUrl}${geAreaAUrl}1`);
  }

  getGEAreaA2All(): Observable<any>{
    return this.http.get(`${geBaseUrl}${geAreaAUrl}2`);
  }

  getGEAreaA3All(): Observable<any>{
    return this.http.get(`${geBaseUrl}${geAreaAUrl}3`);
  }

  getGEAreaB1All(): Observable<any>{
    return this.http.get(`${geBaseUrl}${geAreaBUrl}1`);
  }

  getGEAreaB2All(): Observable<any>{
    return this.http.get(`${geBaseUrl}${geAreaBUrl}2`);
  }

  getGEAreaB3All(): Observable<any>{
    return this.http.get(`${geBaseUrl}${geAreaBUrl}3`);
  }

  getGEAreaB4All(): Observable<any>{
    return this.http.get(`${geBaseUrl}${geAreaBUrl}4`);
  }
  getGEAreaB5All(): Observable<any>{
    return this.http.get(`${geBaseUrl}${geAreaBUrl}5`);
  }

  getGEAreaC1All(): Observable<any>{
    return this.http.get(`${geBaseUrl}${geAreaCUrl}1`);
  }

  getGEAreaC2All(): Observable<any>{
    return this.http.get(`${geBaseUrl}${geAreaCUrl}2`);
  }

  getGEAreaC3All(): Observable<any>{
    return this.http.get(`${geBaseUrl}${geAreaCUrl}3`);
  }

  getGEAreaD1All(): Observable<any>{
    return this.http.get(`${geBaseUrl}${geAreaDUrl}1`);
  }
  getGEAreaD2All(): Observable<any>{
    return this.http.get(`${geBaseUrl}${geAreaDUrl}2`);
  }
  getGEAreaD3All(): Observable<any>{
    return this.http.get(`${geBaseUrl}${geAreaDUrl}3`);
  }
  getGEAreaD4All(): Observable<any>{
    return this.http.get(`${geBaseUrl}${geAreaDUrl}4`);
  }

  getGEAreaEAll(): Observable<any>{
    return this.http.get(`${geBaseUrl}${geAreaEUrl}`);
  }
}
