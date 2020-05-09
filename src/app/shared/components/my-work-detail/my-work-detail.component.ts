import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {FeedComponent} from '../feed/feed.component';

import {WindowRef} from '../../../../WindowRef';

@Component({
    templateUrl:'./my-work-detail.html'
})

export class MyWorkDetailComponent{
  title: any;
  paramsSub: any;
  content:any;
  errorMessage:boolean;
  projectList:any;
  projectImageGallery:Array<string>;
 

  constructor(private activatedRoute: ActivatedRoute, private WindowRef: WindowRef) { 
     
  }


  

   ngOnInit() {
    var self = this; 
    this.paramsSub = this.activatedRoute.params.subscribe(function(params){
       self.title = params['title'];
       self.getProjectContent(self.title); 
    });

    
  
  }

  getProjectContent(projectTitle: any){   
      let self = this;
      let _self = this;
     
  }

  setRelatedProjectsImageList(arr: any){
      let self = this;
      var imgPath = '';
      arr.forEach((element:any) => {
            imgPath = "/./assets/images/work/"+ element.displayImage + '.png';
            element.displayImage = imgPath;
      });

       setTimeout(function(){
        self.WindowRef.nativeWindow.$('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        })
        },500);
        


  }
  setImagePath(arr: any){
      let self = this;
      var imgPath = '';
      self.projectImageGallery = [];
      arr.images.forEach((element:any) => {
                   imgPath = "/./assets/images/work/"+ element + '.png';
                   self.projectImageGallery.push(imgPath); 
      });
      setTimeout(function(){
        self.WindowRef.nativeWindow.$('.carousel-inner .item:first-child').addClass('active');
     },500);
     
  } 
  
  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}