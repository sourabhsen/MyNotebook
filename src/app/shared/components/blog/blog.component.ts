
import {Component} from '@angular/core';
import {PagerService} from '../../../../service/pager.service';
import {BlogService} from './blog.service';


@Component({
    templateUrl:'./blog.html',
    providers:[BlogService,PagerService]
})

export class BlogComponent{
     items: Array<any>;
     postItem:Array<Object>;
     errorMessage: boolean = false;
    
     // array of all items to be paged
     private allItems: any[];
 
     // pager object
     pager: any = {};
 
     // paged items
     pagedItems: any[];

    constructor(private blogService:BlogService,private pagerService: PagerService){
         this.getBlog();
    }

    getBlog(){
       let self = this;
        this.blogService.getBlogList().subscribe((response:any) => {
            
               this.postItem = JSON.parse(response._body);
               this.allItems = JSON.parse(response._body);
               // initialize to page 1
               this.setPage(1);
               
              if(!this.postItem.length){
                  this.errorMessage = true;
               }
          });
    }

    incrementVote(index:any, blog:any){
         let self = this;
        this.blogService.getIncrementCount(blog).subscribe((response:any) => {
            
               this.postItem = JSON.parse(response._body);
               this.pagedItems[index] = this.postItem;
               if(!this.postItem.length){
                   this.errorMessage = true;
               }
          });
    }

    decrementVote(index:any,blog:any){
        let self = this;
        this.blogService.getDecrementCount(blog).subscribe((response:any) =>{
            
               this.postItem = JSON.parse(response._body);
               this.pagedItems[index] = this.postItem;
              if(!this.postItem.length){
                  this.errorMessage = true;
               }
          });
    }

    setPage(page:number){
         if (page < 1 || page > this.pager.totalPages) {
            return;
        }
 
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);
 
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}