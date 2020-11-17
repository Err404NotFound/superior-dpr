import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = '/api/cscore';
const elective1Url = '/api/cscore/elective1/list';
const elective2Url = '/api/cscore/elective2/list';
const elective3Url = '/api/cscore/elective3/list';

const updateUrl = '/api/updateplaceholder';

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

  update(data): Observable<any> {
    return this.http.put(`${updateUrl}`, data);
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
