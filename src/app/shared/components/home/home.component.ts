import { Component, OnInit, ElementRef } from '@angular/core';
import { WindowRef } from '../../../../WindowRef';


@Component({
	selector: 'home',
	templateUrl: './home.html',

})

export class HomeComponent implements OnInit {
	listItem: Array<Object>;
	errorMessage: boolean = false;

	//   constructor(private homeService:HomeService){
	//     this.loadLikedInProfile();
	//   }

	constructor(private WindowRef: WindowRef) {
		console.log('Window object', WindowRef.nativeWindow);
	}

	//   loadLikedInProfile() {
	//         let self = this;
	//         this.homeService.loadLinkedin().subscribe(function(response:any){});
	//   }

	ngOnInit() {
		// temporary code for removing loader
		const windowEle = this.WindowRef.nativeWindow;
		windowEle.$('body').addClass('grid-loaded');

		//Canvas header Code
		var width: number,
			height: number,
			largeHeader: HTMLElement,
			canvas: any, ctx: any,
			triangles: any[], target, animateHeader = true;
		var colors = ['220,220,220', '229,229,229', '153,153,153', '228,220,245', '153,158,150'];

		// Main
		initHeader();
		addListeners();
		initAnimation();

		function initHeader() {
			width = windowEle.$('.header-wrapper').width();
			height = windowEle.$('.header-wrapper').height() + 70;
			target = { x: 0, y: height };

			largeHeader = document.getElementById('large-header');
			largeHeader.style.height = height + 'px';

			canvas = document.getElementById('demo-canvas');
			canvas.width = width;
			canvas.height = height;
			ctx = canvas.getContext('2d');

			// create particles
			triangles = [];
			for (var x = 0; x < 480; x++) {
				addTriangle(x * 10);
			}

			// var cl = new (canvasLightning as any)(canvas, width, height);				
    
			// setupRAF();
			// cl.init();
		}


		function setupRAF() {
			var lastTime = 0;
			var vendors = ['ms', 'moz', 'webkit', 'o'];
			for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x){
			  window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
			  window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
			};
			
			if(!window.requestAnimationFrame){
			  windowEle.requestAnimationFrame = function(callback:any){
				var currTime = new Date().getTime();
				var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			  };
			};
			
			if (!window.cancelAnimationFrame){
			  window.cancelAnimationFrame = function(id){
				clearTimeout(id);
			  };
			};
		  };	

		//* Canvas Lightning v1
		 function canvasLightning(c:any, cw:number, ch:number){
  
			/*=============================================================================*/  
			/* Initialize
			/*=============================================================================*/
			  this.init = function(){
				this.loop();
			  };    
			  
			/*=============================================================================*/  
			/* Variables
			/*=============================================================================*/
			  var _this = this;
			  this.c = c;
			  this.ctx = c.getContext('2d');
			  this.cw = cw;
			  this.ch = ch;
			  this.mx = 0;
			  this.my = 0;
			  
			  this.lightning = [];
			  this.lightTimeCurrent = 0;
			  this.lightTimeTotal = 50;
			  
			/*=============================================================================*/  
			/* Utility Functions
			/*=============================================================================*/        
			this.rand = function(rMi:any, rMa:any){return ~~((Math.random()*(rMa-rMi+1))+rMi);};
			this.hitTest = function(x1:any, y1:any, w1:any, h1:any, x2:any, y2:any, w2:any, h2:any){return !(x1 + w1 < x2 || x2 + w2 < x1 || y1 + h1 < y2 || y2 + h2 < y1);};
			  
			/*=============================================================================*/	
			/* Create Lightning
			/*=============================================================================*/
			  this.createL= function(x:any, y:any, canSpawn:any){					
				this.lightning.push({
				  x: x,
				  y: y,
				  xRange: this.rand(5, 30),
				  yRange: this.rand(5, 25),
				  path: [{
					x: x,
					y: y	
				  }],
				  pathLimit: this.rand(10, 35),
				  canSpawn: canSpawn,
				  hasFired: false
				});
			  };
			  
			/*=============================================================================*/	
			/* Update Lightning
			/*=============================================================================*/
			  this.updateL = function(){
				var i = this.lightning.length;
				while(i--){
				  var light = this.lightning[i];						
				  
				  
				  light.path.push({
					x: light.path[light.path.length-1].x + (this.rand(0, light.xRange)-(light.xRange/2)),
					y: light.path[light.path.length-1].y + (this.rand(0, light.yRange))
				  });
				  
				  if(light.path.length > light.pathLimit){
					this.lightning.splice(i, 1)
				  }
				  light.hasFired = true;
				};
			  };
			  
			/*=============================================================================*/	
			/* Render Lightning
			/*=============================================================================*/
			  this.renderL = function(){
				var i = this.lightning.length;
				while(i--){
				  var light = this.lightning[i];
				  
				  this.ctx.strokeStyle = 'hsla(0, 100%, 100%, '+this.rand(10, 100)/100+')';
				  this.ctx.lineWidth = 1;
				  if(this.rand(0, 30) == 0){
					this.ctx.lineWidth = 2;	
				  }
				  if(this.rand(0, 60) == 0){
					this.ctx.lineWidth = 3;	
				  }
				  if(this.rand(0, 90) == 0){
					this.ctx.lineWidth = 4;	
				  }
				  if(this.rand(0, 120) == 0){
					this.ctx.lineWidth = 5;	
				  }
				  if(this.rand(0, 150) == 0){
					this.ctx.lineWidth = 6;	
				  }	
				  
				  this.ctx.beginPath();
				  
				  var pathCount = light.path.length;
				  this.ctx.moveTo(light.x, light.y);
				  for(var pc = 0; pc < pathCount; pc++){	
					
					this.ctx.lineTo(light.path[pc].x, light.path[pc].y);
					
					if(light.canSpawn){
					  if(this.rand(0, 100) == 0){
						light.canSpawn = false;
						this.createL(light.path[pc].x, light.path[pc].y, false);
					  }	
					}
				  }
				  
				  if(!light.hasFired){
					this.ctx.fillStyle = 'rgba(255, 255, 255, '+this.rand(4, 12)/100+')';
					this.ctx.fillRect(0, 0, this.cw, this.ch);	
				  }
				  
				  if(this.rand(0, 30) == 0){
					this.ctx.fillStyle = 'rgba(255, 255, 255, '+this.rand(1, 3)/100+')';
					this.ctx.fillRect(0, 0, this.cw, this.ch);	
				  }	
				  
				  this.ctx.stroke();
				};
			  };
			  
			/*=============================================================================*/	
			/* Lightning Timer
			/*=============================================================================*/
			  this.lightningTimer = function(){
				this.lightTimeCurrent++;
				if(this.lightTimeCurrent >= this.lightTimeTotal){
				  var newX = this.rand(100, cw - 100);
				  var newY = this.rand(0, ch / 2); 
				  var createCount = this.rand(1, 3);
				  while(createCount--){							
					this.createL(newX, newY, true);
				  }
				  this.lightTimeCurrent = 0;
				  this.lightTimeTotal = this.rand(30, 100);
				}
			  }
				
			/*=============================================================================*/	
			/* Clear Canvas
			/*=============================================================================*/
				this.clearCanvas = function(){
				  this.ctx.globalCompositeOperation = 'destination-out';
				  this.ctx.fillStyle = 'rgba(0,0,0,'+this.rand(1, 30)/100+')';
				  this.ctx.fillRect(0,0,this.cw,this.ch);
				  this.ctx.globalCompositeOperation = 'source-over';
				};
			  
			/*=============================================================================*/	
			/* Resize on Canvas on Window Resize
			/*=============================================================================*/
			windowEle.$(window).on('resize', function(){
			  _this.cw = _this.c.width = window.innerWidth;
			  _this.ch = _this.c.height = window.innerHeight;  
			});
				
			/*=============================================================================*/	
			/* Animation Loop
			/*=============================================================================*/
			  this.loop = function(){
					var loopIt = function(){
				  windowEle.requestAnimationFrame(loopIt, _this.c);
				  _this.clearCanvas();
				  _this.updateL();
				  _this.lightningTimer();
				  _this.renderL();	
				};
				loopIt();					
			  };
			  
		};

		// Canvas manipulation
		var Triangle =  function(){
			var _this = this;

			// constructor
			(function () {
				_this.coords = [{}, {}, {}];
				_this.pos = {};
				init();
			})();

			function init() {
				_this.pos.x = width * 0.5;
				_this.pos.y = height * 0.5 - 20;
				_this.coords[0].x = -10 + Math.random() * 40;
				_this.coords[0].y = -10 + Math.random() * 40;
				_this.coords[1].x = -10 + Math.random() * 40;
				_this.coords[1].y = -10 + Math.random() * 40;
				_this.coords[2].x = -10 + Math.random() * 40;
				_this.coords[2].y = -10 + Math.random() * 40;
				_this.scale = 0.1 + Math.random() * 0.3;
				_this.color = colors[Math.floor(Math.random() * colors.length)];
				setTimeout(function () { _this.alpha = 0.8; }, 10);
			}

			this.draw = function () {
				if (_this.alpha >= 0.005) _this.alpha -= 0.005;
				else _this.alpha = 0;



				ctx.beginPath();
				ctx.moveTo(_this.coords[0].x + _this.pos.x, _this.coords[0].y + _this.pos.y);
				ctx.lineTo(_this.coords[1].x + _this.pos.x, _this.coords[1].y + _this.pos.y);
				ctx.lineTo(_this.coords[2].x + _this.pos.x, _this.coords[2].y + _this.pos.y);

				ctx.closePath();
				ctx.fillStyle = 'rgba(' + _this.color + ',' + _this.alpha + ')';

				ctx.fill();



			};

			this.init = init;
		}


		function addTriangle(delay: any) {
			setTimeout(function () {
				var t = new (Triangle as any)();  
				triangles.push(t);
				tweenTriangle(t);
			}, delay);
		}

		function initAnimation() {
			animate();
		}

		function tweenTriangle(tri: any) {
			var t = Math.random() * (2 * Math.PI);
			var x = (500 + Math.random() * 100) * Math.cos(t) + width * 0.5;
			var y = (500 + Math.random() * 100) * Math.sin(t) + height * 0.5 - 20;
			var time = 4 + 3 * Math.random();

			windowEle.TweenLite.to(tri.pos, time, {
				x: x,
				y: y, ease: windowEle.Circ.easeOut,
				onComplete: function () {
					tri.init();
					tweenTriangle(tri);
				}
			});
		}

		// Event handling
		function addListeners() {
			windowEle.addEventListener('scroll', scrollCheck);
			windowEle.addEventListener('resize', resize);
		}

		function scrollCheck() {
			if (document.body.scrollTop > height) animateHeader = false;
			else animateHeader = true;
		}

		function resize() {
			width = windowEle.$('.header-wrapper').width();
			height = windowEle.$('.header-wrapper').height() + 70;;
			largeHeader.style.height = height + 'px';
			canvas.width = width;
			canvas.height = height;
		}

		function animate() {
			if (animateHeader) {
				ctx.clearRect(0, 0, width, height);
				for (var i in triangles) {
					triangles[i].draw();
				}
			}
			requestAnimationFrame(animate);
		}


		windowEle.$(".UI").ElasticProgress({
			buttonSize: 60,
			fontFamily: "Lato",
			colorBg: "#fbc743",
			colorFg: "#c03a38",
			labelHeight: 40,
			textFail: "Download Failed",
			textComplete: Math.floor(Math.random() * 21) + 80 + '%',

			onOpen: function () {
				console.log("onOpen");
				fakeLoading(windowEle.$(this), 2, 2);
			},
			onComplete: function () {
				console.log("onComplete");
			},
			onClose: function () {
				console.log("onClose");
			},
			onFail: function () {
				console.log("onFail");
				windowEle.$(this).ElasticProgress("open");
			},
			onCancel: function () {
				console.log("onCancel");
				windowEle.$(this).ElasticProgress("open");
			}
		});
		windowEle.$(".njs").ElasticProgress({
			buttonSize: 60,
			fontFamily: "Lato",
			colorBg: "#fbc743",
			colorFg: "#c03a38",
			labelHeight: 40,
			textFail: "Download Failed",
			textComplete: Math.floor(Math.random() * 21) + 80 + '%',

			onOpen: function () {
				console.log("onOpen");
				fakeLoading(windowEle.$(this), 2, 2);
			},
			onComplete: function () {
				console.log("onComplete");
			},
			onClose: function () {
				console.log("onClose");
			},
			onFail: function () {
				console.log("onFail");
				windowEle.$(this).ElasticProgress("open");
			},
			onCancel: function () {
				console.log("onCancel");
				windowEle.$(this).ElasticProgress("open");
			}
		});
		windowEle.$(".angjs").ElasticProgress({
			buttonSize: 60,
			fontFamily: "Lato",
			colorBg: "#fbc743",
			colorFg: "#c03a38",
			labelHeight: 40,
			textFail: "Download Failed",
			textComplete: Math.floor(Math.random() * 21) + 80 + '%',

			onOpen: function () {
				console.log("onOpen");
				fakeLoading(windowEle.$(this), 2, 2);
			},
			onComplete: function (event: any) {
				console.log("onComplete");
			},
			onClose: function (event: any) {
				console.log("onClose");
			},
			onFail: function (event: any) {
				console.log("onFail");
				windowEle.$(this).ElasticProgress("open");
			},
			onCancel: function (event: any) {
				console.log("onCancel");
				windowEle.$(this).ElasticProgress("open");
			}
		});

		windowEle.$(".wbt").ElasticProgress({
			buttonSize: 60,
			fontFamily: "Lato",
			colorBg: "#fbc743",
			colorFg: "#c03a38",
			labelHeight: 40,
			textFail: "Download Failed",
			textComplete: Math.floor(Math.random() * 21) + 80 + '%',

			onOpen: function (event: any) {
				console.log("onOpen");
				fakeLoading(windowEle.$(this), 2, 2);
			},
			onComplete: function (event: any) {
				console.log("onComplete");
			},
			onClose: function (event: any) {
				console.log("onClose");
			},
			onFail: function (event: any) {
				console.log("onFail");
				windowEle.$(this).ElasticProgress("open");
			},
			onCancel: function (event: any) {
				console.log("onCancel");
				windowEle.$(this).ElasticProgress("open");
			}
		});

		windowEle.$(".nodejs").ElasticProgress({
			buttonSize: 60,
			fontFamily: "Lato",
			colorBg: "#fbc743",
			colorFg: "#c03a38",
			labelHeight: 40,
			textFail: "Download Failed",
			textComplete: Math.floor(Math.random() * 21) + 80 + '%',

			onOpen: function (event: any) {
				console.log("onOpen");
				fakeLoading(windowEle.$(this), 2, 2);
			},
			onComplete: function (event: any) {
				console.log("onComplete");
			},
			onClose: function (event: any) {
				console.log("onClose");
			},
			onFail: function (event: any) {
				console.log("onFail");
				windowEle.$(this).ElasticProgress("open");
			},
			onCancel: function (event: any) {
				console.log("onCancel");
				windowEle.$(this).ElasticProgress("open");
			}
		});

		windowEle.$(".java").ElasticProgress({
			buttonSize: 60,
			fontFamily: "Lato",
			colorBg: "#fbc743",
			colorFg: "#c03a38",
			textFail: "Download Failed",
			labelHeight: 40,
			textComplete: Math.floor(Math.random() * 41) + 60 + '%',

			onOpen: function (event: any) {
				console.log("onOpen");
				fakeLoading(windowEle.$(this), 2, 2);
			},
			onComplete: function (event: any) {
				console.log("onComplete");
			},
			onClose: function (event: any) {
				console.log("onClose");
			},
			onFail: function (event: any) {
				console.log("onFail");
				windowEle.$(this).ElasticProgress("open");
			},
			onCancel: function (event: any) {
				console.log("onCancel");
				windowEle.$(this).ElasticProgress("open");
			}
		});


		windowEle.$(".UI,.wbt,.angjs,.njs,.java,.nodejs").ElasticProgress("open");


		windowEle.Highcharts.chart('my-time', {
			chart: {
			  type: 'pie',
			  options3d: {
				enabled: true,
				alpha: 45
			  }
			},
			title: {
			  text: ''
			},
			subtitle: {
			  text: ''
			},
			plotOptions: {
			  pie: {
				innerSize: 100,
				depth: 45
			  }
			},
			series: [{
			  name: 'Delivered Time in %',
			  data: [
				['Other Personal Activities', 5], 
				['Mangement/Mentorship', 10],
				['Family Time', 10],
				['UI Practice', 10],
				['Code Reviews', 15],
				['Coding', 50],
				
			  ]
			}]
		  });



		function fakeLoading($obj: any, speed: number, failAt: number) {
			if (typeof speed == "undefined") speed = 2;
			if (typeof failAt == "undefined") failAt = -1;
			var v = 0;
			var l = function () {
				if (failAt > -1) {
					if (v >= failAt) {
						if (typeof $obj.jquery != "undefined") {
							$obj.ElasticProgress("fail");
						} else {
							$obj.fail();
						}
						return;
					}
				}
				v += Math.pow(Math.random(), 2) * 0.1 * speed;

				if (typeof $obj.jquery != "undefined") {
					$obj.ElasticProgress("setValue", v);
				} else {
					$obj.setValue(v);
				}
				if (v < 1) {
					windowEle.TweenMax.delayedCall(0.05 + (Math.random() * 0.14), l)
				}
			};
			l();
		}








		//End
	}
}