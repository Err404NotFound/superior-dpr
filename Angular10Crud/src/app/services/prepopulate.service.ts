import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiBase='/api';
const getAreaACompletedUrl =`${apiBase}/getCompletedAreaAList`;


@Injectable({
  providedIn: 'root'
})
export class PrepopulateService {
  completedAreaA:any;
  constructor(private http:HttpClient) { }

  async getAreaACompleted(): Promise<any>{
    return this.http.get(`${getAreaACompletedUrl}`)
    .toPromise()
    .then(res => {
      console.log(res);
      this.completedAreaA=res;
      
    }) 
      .catch(error => console.log(error));
  }
}
