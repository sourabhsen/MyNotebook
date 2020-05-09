import {Injectable} from '@angular/core';
import {Http} from '@angular/http';



@Injectable()

export class ProfileService{
  CLIENT_ID: string = '75nwsrs8dwshgk';
  CLIENT_SECRET: 'Q3v7e6Z7PzKbyURj';
  API_URL: string =  'https://api.linkedin.com/v1/people/~:(id,first-name,last-name,headline,picture-url,industry,summary,specialties,positions:(id,title,summary,start-date,end-date,is-current,company:(id,name,type,size,industry,ticker)),educations:(id,school-name,field-of-study,start-date,end-date,degree,activities,notes),associations,interests,num-recommenders,date-of-birth,publications:(id,title,publisher:(name),authors:(id,name),date,url,summary),patents:(id,title,summary,number,status:(id,name),office:(name),inventors:(id,name),date,url),languages:(id,language:(name),proficiency:(level,name)),skills:(id,skill:(name)),certifications:(id,name,authority:(name),number,start-date,end-date),courses:(id,name,number),recommendations-received:(id,recommendation-type,recommendation-text,recommender),honors-awards,three-current-positions,three-past-positions,volunteer)?oauth2_access_token=AQXlwglHTVGWAnV383iGjLhv6s3STgGAJ20U5Bg79UFJvQYaDo-CdJn8r2xZRWhjO6v2Uex3EXricCvA-MsVpTmHGtlocY1U8pRnS_WRKEtdfhcrpKP290aV014tcfUfdl6T43yMDBjhxNPpJnYbTw93HgmLQaiye_mwA4j6_3ScPnS553U&format=json';
  params: string;
  state: Number = 996302;
  requestUrl: string = "http://localhost:3030/profile";
  data: Array<Object>;

  constructor(private http:Http){
     this.params = `?response_type=code&client_id=${this.CLIENT_ID}&redirect_uri=${this.requestUrl}&state=${this.state}&scope=r_basicprofile`;
     this.requestUrl = '/api/linkedin'; 

   //  http://localhost:3030/?code=AQRv9j8MvhIRKdXVhacg0xGlzQqY9ssQdrjvxOQkIIGvQT6UUPH-jThnIjIR5CY8_VdMF22444L8eEvcqg6hdjwD9Bp-qIeXGZBI6aJYmIoY2SC3G5w&state=996302 
  //https://www.linkedin.com/oauth/v2/authorization?grant_type=AQRv9j8MvhIRKdXVhacg0xGlzQqY9ssQdrjvxOQkIIGvQT6UUPH-jThnIjIR5CY8_VdMF22444L8eEvcqg6hdjwD9Bp-qIeXGZBI6aJYmIoY2SC3G5w&code=996302&redirect_uri=http://localhost:3030&client_id=75nwsrs8dwshgk&client_secret=Q3v7e6Z7PzKbyURj
   //  https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=123456789&redirect_uri=https%3A%2F%2Fwww.example.com%2Fauth%2Flinkedin&state=987654321&scope=r_basicprofile  
  //http://localhost:3030/?code=AQTbaeeasPDrLL9ekUYdoeDbEQp40Q-4MnW1ITAAMcqBRHOPpPfl3q03cn_sMaBG_i4qLw8-gvjmbF9R0CTSz2rixyAQk4_X_yVu30TJbzxZlw0SGkQ&state=996302 

 } 

  getLinkedinProfile(){
      return this.http.get('/api/linkedin');
  }
  
}