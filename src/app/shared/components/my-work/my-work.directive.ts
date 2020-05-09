import { Directive, ElementRef, Renderer,OnInit } from '@angular/core';

import {WindowRef} from '../../../../WindowRef';

@Directive({
  selector: '[isometric-grid]'
})

export class IsometricGrid implements OnInit  {
  max:number = 0;
  min:number = 0;
  static msg:string = ""; 
 

  constructor(private WindowRef: WindowRef) {
   }
  

  getRandomInt(){
       return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }

  ngOnInit() {
      
        let self = this; 
         [].slice.call(document.querySelectorAll('.isolayer')).forEach(function(el:any) {
                    console.log('values',el);
                    console.log(self);
                    new self.WindowRef.nativeWindow.IsoGrid(el, {
                        type : 'scrollable',
                        transform : 'translateX(-15vw) translateY(275px) rotateX(45deg) rotateZ(45deg)',
                        stackItemsAnimation : {
                            properties : function(pos:any) {
                                return {
                                    translateZ: (pos+1) * 50,
                                    rotateZ: self.getRandomInt()
                                };
                            },
                            options : function() {
                                return {
                                    type: self.WindowRef.nativeWindow.dynamics.bezier,
                                    duration: 500,
                                    points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}],
                                    //delay: (itemstotal-pos-1)*40
                                };
                            }
                        },
                        onGridLoaded : function() {
                            self.WindowRef.nativeWindow.classie.add(document.body, 'grid-loaded');
                        }
                    });
                }); 

             console.log('isogrid need to call');
            
  }
}
