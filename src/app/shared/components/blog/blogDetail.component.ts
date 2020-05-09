import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BlogService} from './blog.service';

@Component({
    templateUrl:'./blogDetail.html',
    providers:[BlogService]
})

export class BlogDetailComponent{
     items: Array<any>;
     postItem:Array<Object>;
     errorMessage: boolean = false;
     id:string;
     paramsSub:any;

    constructor(private blogService:BlogService, private activatedRoute:ActivatedRoute){
        let self = this;
        this.activatedRoute.params.subscribe(function(params:any){
            self.id = params.id;
            self.getBlogItemContent(self.id);
        });
   }
   
  getBlogItemContent(id:string){
     let self = this;
     this.blogService.getBlogDetails(id).subscribe(function(response:any){
               self.postItem = JSON.parse(response._body);
              if(!self.postItem.length){
                  self.errorMessage = true;
               }
          });
  }

}