import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()

export class HomeService{
  CLIENT_ID: string = '75nwsrs8dwshgk';
  CLIENT_SECRET: 'Q3v7e6Z7PzKbyURj';
  API_URL: string =  'https://api.linkedin.com/v1/people/~:(id,first-name,last-name,headline,picture-url,industry,summary,specialties,positions:(id,title,summary,start-date,end-date,is-current,company:(id,name,type,size,industry,ticker)),educations:(id,school-name,field-of-study,start-date,end-date,degree,activities,notes),associations,interests,num-recommenders,date-of-birth,publications:(id,title,publisher:(name),authors:(id,name),date,url,summary),patents:(id,title,summary,number,status:(id,name),office:(name),inventors:(id,name),date,url),languages:(id,language:(name),proficiency:(level,name)),skills:(id,skill:(name)),certifications:(id,name,authority:(name),number,start-date,end-date),courses:(id,name,number),recommendations-received:(id,recommendation-type,recommendation-text,recommender),honors-awards,three-current-positions,three-past-positions,volunteer)?oauth2_access_token=AQXlwglHTVGWAnV383iGjLhv6s3STgGAJ20U5Bg79UFJvQYaDo-CdJn8r2xZRWhjO6v2Uex3EXricCvA-MsVpTmHGtlocY1U8pRnS_WRKEtdfhcrpKP290aV014tcfUfdl6T43yMDBjhxNPpJnYbTw93HgmLQaiye_mwA4j6_3ScPnS553U&format=json';
  params: string;
  state: Number = 996302;
  requestUrl: string = "http://localhost:3030/profile";
  data: Array<Object>;

  constructor(private http:Http){
     this.requestUrl = '/api/linkedin'; 
 } 

  loadLinkedin(){
      return this.http.get('/api/getlinkedIn');
  }
  
}