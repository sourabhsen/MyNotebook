import {Component, OnInit} from '@angular/core';

import {ProfileService} from './profile.service';

import {WindowRef} from '../../../../WindowRef';



@Component({
    selector: 'profile',
    templateUrl: './profile.html',
    providers: [ProfileService]
})

export class ProfileComponent implements OnInit{

    listItem: any;

    errorMessage: boolean = false;
    backgroundArray: Array<Object>;
    series: Array<Object>;
    seriesDefaultItem: any;
    options: any;
    profileOptions:any;
    myHighSkill:Array<string>;
    newSkills :Array<string>;
    graphColor:Array<string>;
    profileChart:any;
    isProfile:boolean = false;

    constructor(private profile_service: ProfileService) {
        this.init();
        this.getLinkedInProfile();
        WindowRef.$('body').removeClass('grid-loaded');
    }

    init() {
         
        this. myHighSkill = [
            'HTML', 'HTML 5','Cascading Style Sheets (CSS)','Mobile Applications','User Interface Design',
            'User Interface','HTML5','CMS','JSON','Web Developmen','CSS','jQuery','AJAX','JavaScript','Java'

        ];

        this.newSkills = ['Angular1','Angular2','Webpack'];
        this.graphColor = ['#40a0f0','#286da5','#a1aeb5']; 
        this.profileChart = {
                chart: {
                type: 'solidgauge',
                marginTop: -50
            },
            title: {
                
            },
            
            pane: {
                startAngle: 0,
                endAngle: -360,
                background: [{
                        outerRadius: '0%',
                        innerRadius: '0%',
                        borderWidth: 0
                }
                ]
            },
            yAxis: {
                min: 0,
                max: 100,
                lineWidth: 0,
                tickPositions: []
            },
            plotOptions: {
                solidgauge: {
                    borderWidth: '10px',
                    dataLabels: {
                        enabled: false
                    },
                    linecap: 'square',
                    stickyTracking: false
                }
            },
            series:  [
                      {
                       
                        borderColor: '#40a0f0',
                        strokelinecap:"square",
                        data: [{
                            color: '#ff0000',
                            radius: '40%',
                            innerRadius: '40%',
                            y: 90
                          
                        }]
                    }
                ]

        };
        this.profileOptions ={
             chart: {
                type: 'solidgauge',
                marginTop: -50
            },
            title: {
                text: '',
                style: {
                    fontSize: '24px'
                }
            },
            tooltip: {
                borderWidth: 0,
                backgroundColor: 'none',
                shadow: false,
                style: {
                    fontSize: '12px'
                },
                pointFormat: '<div class="chart-msg">{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span></div>',
                positioner: function (labelWidth:any) {
                    return {
                        x: 120,
                        y: 0
                    };
                }
            },
            pane: {
                startAngle: 0,
                endAngle: -360,
                background: [{
                        outerRadius: '0%',
                        innerRadius: '0%',
                        borderWidth: 0
                },
                {
                        outerRadius: '0%',
                        innerRadius: '0%',
                        borderWidth: 0
                }
                ]
            },
            yAxis: {
                min: 0,
                max: 100,
                lineWidth: 0,
                tickPositions: []
            },
            plotOptions: {
                solidgauge: {
                    borderWidth: '30px',
                    dataLabels: {
                        enabled: false
                    },
                    linecap: 'square',
                    stickyTracking: false
                }
            },
            series:  [
                      {
                        name: 'Profile Strength',
                        borderColor: '#40a0f0',
                        strokelinecap:"square",
                        data: [{
                            color: '#ff0000',
                            radius: '90%',
                            innerRadius: '90%',
                            y: 70
                          
                        }]
                    }, {
                        name: 'Profile Vistors',
                        borderColor: '#286da5',
                        data: [{
                            color: WindowRef.Highcharts.getOptions().colors[1],
                            radius: '65%',
                            innerRadius: '65%',
                            y: 65
                        }]
                    }
                ]
                
        }; 
        this.options = {

            chart: {
                type: 'solidgauge',
                marginTop: 50
            },
            title: {
                text: 'Activity',
                style: {
                    fontSize: '24px'
                }
            },
            tooltip: {
                borderWidth: 0,
                backgroundColor: 'none',
                shadow: false,
                style: {
                    fontSize: '16px'
                },
                pointFormat: '<div class="chart-msg">{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span></div>',
                positioner: function (labelWidth:any) {
                    return {
                        x: 200 - labelWidth / 2,
                        y: 180
                    };
                }
            },
            pane: {
                startAngle: 0,
                endAngle: -360,
                background: []
            },
            yAxis: {
                min: 0,
                max: 100,
                lineWidth: 0,
                tickPositions: []
            },
            plotOptions: {
                solidgauge: {
                    borderWidth: '14px',
                    dataLabels: {
                        enabled: false
                    },
                    linecap: 'square',
                    stickyTracking: false
                }
            },
            series: []

        };
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    getLinkedInProfile() {
        let self = this;
        let _self = this;
        this.profile_service.getLinkedinProfile().subscribe(function (response: any) {
            self.listItem = JSON.parse(response._body);
            console.log(self.listItem);

            let defaultItem = {
                outerRadius: '0%',
                innerRadius: '0%',
                borderWidth: 0
            }
            let radius = 95;
            let axis = 90;

            let seriesDefaultItem: any = {}

            var new_index= 0;
            //To create arrary for background
            self.listItem.skills.values.forEach((element:any) => {
              
                


                _self.options.pane.background.push(defaultItem);

                seriesDefaultItem.name = element.skill.name;
                seriesDefaultItem.borderColor = _self.getRandomColor();
                seriesDefaultItem.strokelinecap = 'sqaure';
                
                radius = radius - 5;
                if(_self.myHighSkill.indexOf(seriesDefaultItem.name) > 0){
                      axis = Math.floor(Math.random() * 31) + 70;
                }else{
                     axis = Math.floor(Math.random() * 31) + 50;
                }
               
                
                seriesDefaultItem.data = [
                    {
                        color: _self.getRandomColor(),
                        radius: radius + '%',
                        innerRadius: radius + '%',
                        y: axis
                    }
                ]

                _self.options.series.push(seriesDefaultItem);
                seriesDefaultItem = {};
                

            });

            _self.isProfile = true;
             WindowRef.$('body').addClass('grid-loaded');
            _self.displaySkillsChart(_self.options);
            
            if (!_self.listItem.length) {
                _self.errorMessage = true;
            }

        });
    }

    displaySkillsChart(chartsOption:any) {
        WindowRef.Highcharts.chart('chart1', chartsOption, function () {
          this.renderer.path([]).attr({'stroke-linecap': "butt",'zIndex': 10})
          this.renderer.path().attr({ 'zIndex': 10})
          this.renderer.path().attr({ 'zIndex': 10})

        })
    }

    ngOnInit(){
        //   window.Highcharts.chart('chart2', this.profileOptions, function () {
        //     this.renderer.path([]).attr({'stroke-linecap': "butt",'zIndex': 10})
        //     this.renderer.path().attr({ 'zIndex': 10})
        //     this.renderer.path().attr({ 'zIndex': 10})

        // }) 

    
    }
}