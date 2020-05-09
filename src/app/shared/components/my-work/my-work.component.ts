import {Component} from '@angular/core';
import { IsometricGrid } from './my-work.directive';


import {WindowRef} from '../../../../WindowRef';


@Component({
    templateUrl:'./my-work.html'
})

export class MyWorkComponent{
     items: Array<any>;
     Item:Array<Object>;
     errorMessage: boolean = false;

    constructor(private WindowRef: WindowRef){
      //  WindowRef.nativeWindow.$('body').removeClass('grid-loaded');
        this.getProjectList();
    }

    getProjectList(){
        
    }
}