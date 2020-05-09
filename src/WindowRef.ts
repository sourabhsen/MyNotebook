import {Injectable} from '@angular/core';

function _window(): any {
  // return the native window obj
  return window;
}

@Injectable()
export class WindowRef {
	
	static TweenMax: any;
	static Circ: any;
    static IsoGrid: any;
    static classie: any;
    static dynamics: any;
	static addEventListener(arg0: any, arg1: any): any {
		throw new Error("Method not implemented.");
	}
    static Highcharts: any;
    static $: any;
	static TweenLite: any;
  
  get nativeWindow(): any {
    return _window();
  }
  
}
