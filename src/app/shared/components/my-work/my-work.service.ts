import {Injectable} from '@angular/core';
import {Http} from '@angular/http';



@Injectable()

export class MyWorkService{
  

  constructor(private http:Http){
      
  } 
  
  getProjectList(){
     return this.http.get('/api/projectlist');
  }

  getProjectDescription(title:any){
      return this.http.get('/api/projectlist/' + title);
  }
  
}