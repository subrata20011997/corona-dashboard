import React, { Component } from 'react'
import * as d3 from 'd3v4'

import './WorldImpactLineChart.css'
class WorldImpactLineChart extends Component {

    constructor(props){
        super(props)
        this.state = {
            data : [
                {
                  "Date": "2020-01-22",
                  "Confirmed": 555,
                  "Recovered": 28,
                  "Deaths": 17
                },
                {
                  "Date": "2020-01-23",
                  "Confirmed": 653,
                  "Recovered": 30,
                  "Deaths": 18
                },
                {
                  "Date": "2020-01-24",
                  "Confirmed": 941,
                  "Recovered": 36,
                  "Deaths": 26
                },
                {
                  "Date": "2020-01-25",
                  "Confirmed": 1434,
                  "Recovered": 39,
                  "Deaths": 42
                },
                {
                  "Date": "2020-01-26",
                  "Confirmed": 2118,
                  "Recovered": 52,
                  "Deaths": 56
                },
                {
                  "Date": "2020-01-27",
                  "Confirmed": 2927,
                  "Recovered": 61,
                  "Deaths": 82
                },
                {
                  "Date": "2020-01-28",
                  "Confirmed": 5578,
                  "Recovered": 107,
                  "Deaths": 131
                },
                {
                  "Date": "2020-01-29",
                  "Confirmed": 6166,
                  "Recovered": 126,
                  "Deaths": 133
                },
                {
                  "Date": "2020-01-30",
                  "Confirmed": 8234,
                  "Recovered": 143,
                  "Deaths": 171
                },
                {
                  "Date": "2020-01-31",
                  "Confirmed": 9927,
                  "Recovered": 222,
                  "Deaths": 213
                },
                {
                  "Date": "2020-02-01",
                  "Confirmed": 12038,
                  "Recovered": 284,
                  "Deaths": 259
                },
                {
                  "Date": "2020-02-02",
                  "Confirmed": 16787,
                  "Recovered": 472,
                  "Deaths": 362
                },
                {
                  "Date": "2020-02-03",
                  "Confirmed": 19881,
                  "Recovered": 623,
                  "Deaths": 426
                },
                {
                  "Date": "2020-02-04",
                  "Confirmed": 23892,
                  "Recovered": 852,
                  "Deaths": 492
                },
                {
                  "Date": "2020-02-05",
                  "Confirmed": 27635,
                  "Recovered": 1124,
                  "Deaths": 564
                },
                {
                  "Date": "2020-02-06",
                  "Confirmed": 30817,
                  "Recovered": 1487,
                  "Deaths": 634
                },
                {
                  "Date": "2020-02-07",
                  "Confirmed": 34391,
                  "Recovered": 2011,
                  "Deaths": 719
                },
                {
                  "Date": "2020-02-08",
                  "Confirmed": 37120,
                  "Recovered": 2616,
                  "Deaths": 806
                },
                {
                  "Date": "2020-02-09",
                  "Confirmed": 40150,
                  "Recovered": 3244,
                  "Deaths": 906
                },
                {
                  "Date": "2020-02-10",
                  "Confirmed": 42762,
                  "Recovered": 3946,
                  "Deaths": 1013
                },
                {
                  "Date": "2020-02-11",
                  "Confirmed": 44802,
                  "Recovered": 4683,
                  "Deaths": 1113
                },
                {
                  "Date": "2020-02-12",
                  "Confirmed": 45221,
                  "Recovered": 5150,
                  "Deaths": 1118
                },
                {
                  "Date": "2020-02-13",
                  "Confirmed": 60368,
                  "Recovered": 6295,
                  "Deaths": 1371
                },
                {
                  "Date": "2020-02-14",
                  "Confirmed": 66885,
                  "Recovered": 8058,
                  "Deaths": 1523
                },
                {
                  "Date": "2020-02-15",
                  "Confirmed": 69030,
                  "Recovered": 9395,
                  "Deaths": 1666
                },
                {
                  "Date": "2020-02-16",
                  "Confirmed": 71224,
                  "Recovered": 10865,
                  "Deaths": 1770
                },
                {
                  "Date": "2020-02-17",
                  "Confirmed": 73258,
                  "Recovered": 12583,
                  "Deaths": 1868
                },
                {
                  "Date": "2020-02-18",
                  "Confirmed": 75136,
                  "Recovered": 14352,
                  "Deaths": 2007
                },
                {
                  "Date": "2020-02-19",
                  "Confirmed": 75639,
                  "Recovered": 16121,
                  "Deaths": 2122
                },
                {
                  "Date": "2020-02-20",
                  "Confirmed": 76197,
                  "Recovered": 18177,
                  "Deaths": 2247
                },
                {
                  "Date": "2020-02-21",
                  "Confirmed": 76823,
                  "Recovered": 18890,
                  "Deaths": 2251
                },
                {
                  "Date": "2020-02-22",
                  "Confirmed": 78579,
                  "Recovered": 22886,
                  "Deaths": 2458
                },
                {
                  "Date": "2020-02-23",
                  "Confirmed": 78965,
                  "Recovered": 23394,
                  "Deaths": 2469
                },
                {
                  "Date": "2020-02-24",
                  "Confirmed": 79568,
                  "Recovered": 25227,
                  "Deaths": 2629
                },
                {
                  "Date": "2020-02-25",
                  "Confirmed": 80413,
                  "Recovered": 27905,
                  "Deaths": 2708
                },
                {
                  "Date": "2020-02-26",
                  "Confirmed": 81395,
                  "Recovered": 30384,
                  "Deaths": 2770
                },
                {
                  "Date": "2020-02-27",
                  "Confirmed": 82754,
                  "Recovered": 33277,
                  "Deaths": 2814
                },
                {
                  "Date": "2020-02-28",
                  "Confirmed": 84120,
                  "Recovered": 36711,
                  "Deaths": 2872
                },
                {
                  "Date": "2020-02-29",
                  "Confirmed": 86011,
                  "Recovered": 39782,
                  "Deaths": 2941
                },
                {
                  "Date": "2020-03-01",
                  "Confirmed": 88369,
                  "Recovered": 42716,
                  "Deaths": 2996
                },
                {
                  "Date": "2020-03-02",
                  "Confirmed": 90306,
                  "Recovered": 45602,
                  "Deaths": 3085
                },
                {
                  "Date": "2020-03-03",
                  "Confirmed": 92840,
                  "Recovered": 48228,
                  "Deaths": 3160
                },
                {
                  "Date": "2020-03-04",
                  "Confirmed": 95120,
                  "Recovered": 51170,
                  "Deaths": 3254
                },
                {
                  "Date": "2020-03-05",
                  "Confirmed": 97882,
                  "Recovered": 53796,
                  "Deaths": 3348
                },
                {
                  "Date": "2020-03-06",
                  "Confirmed": 101784,
                  "Recovered": 55865,
                  "Deaths": 3460
                },
                {
                  "Date": "2020-03-07",
                  "Confirmed": 105821,
                  "Recovered": 58358,
                  "Deaths": 3558
                },
                {
                  "Date": "2020-03-08",
                  "Confirmed": 109795,
                  "Recovered": 60694,
                  "Deaths": 3802
                },
                {
                  "Date": "2020-03-09",
                  "Confirmed": 113561,
                  "Recovered": 62494,
                  "Deaths": 3988
                },
                {
                  "Date": "2020-03-10",
                  "Confirmed": 118592,
                  "Recovered": 64404,
                  "Deaths": 4262
                },
                {
                  "Date": "2020-03-11",
                  "Confirmed": 125865,
                  "Recovered": 67003,
                  "Deaths": 4615
                },
                {
                  "Date": "2020-03-12",
                  "Confirmed": 128343,
                  "Recovered": 68324,
                  "Deaths": 4720
                },
                {
                  "Date": "2020-03-13",
                  "Confirmed": 145193,
                  "Recovered": 70251,
                  "Deaths": 5404
                },
                {
                  "Date": "2020-03-14",
                  "Confirmed": 156094,
                  "Recovered": 72624,
                  "Deaths": 5819
                },
                {
                  "Date": "2020-03-15",
                  "Confirmed": 167446,
                  "Recovered": 76034,
                  "Deaths": 6440
                },
                {
                  "Date": "2020-03-16",
                  "Confirmed": 181527,
                  "Recovered": 78088,
                  "Deaths": 7126
                },
                {
                  "Date": "2020-03-17",
                  "Confirmed": 197142,
                  "Recovered": 80840,
                  "Deaths": 7905
                },
                {
                  "Date": "2020-03-18",
                  "Confirmed": 214910,
                  "Recovered": 83207,
                  "Deaths": 8733
                },
                {
                  "Date": "2020-03-19",
                  "Confirmed": 242708,
                  "Recovered": 84854,
                  "Deaths": 9867
                },
                {
                  "Date": "2020-03-20",
                  "Confirmed": 272166,
                  "Recovered": 87256,
                  "Deaths": 11299
                },
                {
                  "Date": "2020-03-21",
                  "Confirmed": 304524,
                  "Recovered": 91499,
                  "Deaths": 12973
                },
                {
                  "Date": "2020-03-22",
                  "Confirmed": 335955,
                  "Recovered": 97704,
                  "Deaths": 14632
                },
                {
                  "Date": "2020-03-23",
                  "Confirmed": 336004,
                  "Recovered": 98334,
                  "Deaths": 14643
                }
              ]
        }
    }

    render() {
        return (
            <div>
                <div className="worldImpactLineChartCard0">
                    <div id="worldImpactLineChart0"></div>
                </div>
                <div className="worldImpactLineChartCard1">
                    <div id="worldImpactLineChart1"></div>
                </div>
                <div className="worldImpactLineChartCard2">
                    <div id="worldImpactLineChart2"></div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        let width1 = document.getElementById('worldImpactLineChart0').offsetWidth
        let width2 = document.getElementById('worldImpactLineChart1').offsetWidth
        let width3 = document.getElementById('worldImpactLineChart0').offsetWidth
        let height = 250
        let Confirmed = []
        let Recovered = []
        let Deaths = []
        this.state.data.forEach( e =>{
            let temp = {}
            temp.Date = e.Date
            temp.Count = e.Confirmed
            Confirmed.push(temp)
            temp = {}
            temp.Date = e.Date
            temp.Count = e.Recovered
            Recovered.push(temp)
            temp = {}
            temp.Date = e.Date
            temp.Count = e.Deaths
            Deaths.push(temp)
        })
        //console.log(Deaths)
        let svgLineChart0 = d3.select('#worldImpactLineChart0').append('svg')
            .attr('height',height+'px')
            .attr('width',width1+'px')
            .style('border-radius','8px')
        let svgLineChart1 = d3.select('#worldImpactLineChart1').append('svg')
            .attr('height',height+'px')
            .attr('width',width2+'px')
            .style('border-radius','8px')
        let svgLineChart2 = d3.select('#worldImpactLineChart2').append('svg')
            .attr('height',height+'px')
            .attr('width',width3+'px')
            .style('border-radius','8px')
        this.drawChart(Confirmed,svgLineChart0,width1,height,'#56abd6')
        this.drawTitle(Confirmed,svgLineChart0,width1,height,'Test Positive Cases')
        this.drawChart(Recovered,svgLineChart1,width2,height,'#4d8c5e')
        this.drawTitle(Recovered,svgLineChart1,width2,height,'Recovered Cases')
        this.drawChart(Deaths,svgLineChart2,width3,height,'#f56e7e')
        this.drawTitle(Deaths,svgLineChart2,width3,height,'Death Cases')
    }
    drawChart(data,svgLineChart,width,height,color){
        let margin = {top: 20, right: 30, bottom: 40, left: 70}
        let svg = svgLineChart.append('g')
            .attr('transform','translate('+margin.left+','+margin.top+')')
        let row_number = this.state.data.length
        let max = -10000,min = 10000;
        let labels = []
        var parseTime = d3.timeParse("%Y-%m-%d");
        data.forEach( e =>{
            e.Date = parseTime(e.Date)
            e.Count = + e.Count;   
            labels.push(e.Date)
            if(e.Count > max){
                max = e.Count
            }
            if(e.Count < min){
                min = e.Count
            }
        })
        //console.log(data)
        //console.log(d3.extent(data, function(d) { return d.Date; }))
        var xScale = d3.scaleTime()
            .domain(d3.extent(data, function(d) { return d.Date; }))
            .range([0, (width-margin.left - margin.right)])
        var yScale = d3.scaleLinear()
            .domain([min, max])
            .range([height - margin.top - margin.bottom, 0])
        
        var line = d3.line()
            .x(function(d) { return xScale(d.Date); })
            .y(function(d) { return yScale(d.Count); })
            .curve(d3.curveBundle)
        svg.append("g")
            .attr("class", "xAxis")
            .attr("transform", "translate(0," + (height -margin.bottom - margin.top) + ")")
            .call(d3.axisBottom(xScale).tickValues(xScale.ticks(3).concat(xScale.domain())))
            .style('font-family','cursive')
            .style('font-size','9px')
        
        svg.append("g")
            .attr("class", "yAxis")
            .call(d3.axisLeft(yScale).ticks(5))
            .style('font-family','cursive')
            .style('font-size','9px')
        
        svg.append("path")
            .datum(data) 
            .attr("className", "line") 
            .attr("d", line)
            .style('fill','none')
            .style('stroke',color)
            .style('stroke-width','3px')
    }
    
    drawTitle(data,svgLineChart,width,height,name){
        let title = svgLineChart.append('g')
            .attr('transform','translate('+(width*.25)+',20)')
        title.append('text')
            .attr('className','Title')
            .text('COVID-19 '+name+' : ')
            .style('font-size','medium')
            .style('fill','black')
            .style('font-family','cursive')
    }
        
}

export default WorldImpactLineChart
