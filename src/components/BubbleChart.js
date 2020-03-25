import React, { Component } from 'react'
import * as d3 from 'd3v4'
import './BubbleChart.css'

class BubbleChart extends Component {
    constructor(props){
        super(props)
        let data = [
            {
              "Date": "2020-01-22",
              "China": 548,
              "US": 1,
              "United_Kingdom": 0,
              "Italy": 0,
              "France": 0,
              "Germany": 0,
              "Spain": 0,
              "Iran": 0
            },
            {
              "Date": "2020-01-23",
              "China": 643,
              "US": 1,
              "United_Kingdom": 0,
              "Italy": 0,
              "France": 0,
              "Germany": 0,
              "Spain": 0,
              "Iran": 0
            },
            {
              "Date": "2020-01-24",
              "China": 920,
              "US": 2,
              "United_Kingdom": 0,
              "Italy": 0,
              "France": 2,
              "Germany": 0,
              "Spain": 0,
              "Iran": 0
            },
            {
              "Date": "2020-01-25",
              "China": 1406,
              "US": 2,
              "United_Kingdom": 0,
              "Italy": 0,
              "France": 3,
              "Germany": 0,
              "Spain": 0,
              "Iran": 0
            },
            {
              "Date": "2020-01-26",
              "China": 2075,
              "US": 5,
              "United_Kingdom": 0,
              "Italy": 0,
              "France": 3,
              "Germany": 0,
              "Spain": 0,
              "Iran": 0
            },
            {
              "Date": "2020-01-27",
              "China": 2877,
              "US": 5,
              "United_Kingdom": 0,
              "Italy": 0,
              "France": 3,
              "Germany": 1,
              "Spain": 0,
              "Iran": 0
            },
            {
              "Date": "2020-01-28",
              "China": 5509,
              "US": 5,
              "United_Kingdom": 0,
              "Italy": 0,
              "France": 4,
              "Germany": 4,
              "Spain": 0,
              "Iran": 0
            },
            {
              "Date": "2020-01-29",
              "China": 6087,
              "US": 5,
              "United_Kingdom": 0,
              "Italy": 0,
              "France": 5,
              "Germany": 4,
              "Spain": 0,
              "Iran": 0
            },
            {
              "Date": "2020-01-30",
              "China": 8141,
              "US": 5,
              "United_Kingdom": 0,
              "Italy": 0,
              "France": 5,
              "Germany": 4,
              "Spain": 0,
              "Iran": 0
            },
            {
              "Date": "2020-01-31",
              "China": 9802,
              "US": 7,
              "United_Kingdom": 2,
              "Italy": 2,
              "France": 5,
              "Germany": 5,
              "Spain": 0,
              "Iran": 0
            },
            {
              "Date": "2020-02-01",
              "China": 11891,
              "US": 8,
              "United_Kingdom": 2,
              "Italy": 2,
              "France": 6,
              "Germany": 8,
              "Spain": 1,
              "Iran": 0
            },
            {
              "Date": "2020-02-02",
              "China": 16630,
              "US": 8,
              "United_Kingdom": 2,
              "Italy": 2,
              "France": 6,
              "Germany": 10,
              "Spain": 1,
              "Iran": 0
            },
            {
              "Date": "2020-02-03",
              "China": 19716,
              "US": 11,
              "United_Kingdom": 2,
              "Italy": 2,
              "France": 6,
              "Germany": 12,
              "Spain": 1,
              "Iran": 0
            },
            {
              "Date": "2020-02-04",
              "China": 23707,
              "US": 11,
              "United_Kingdom": 2,
              "Italy": 2,
              "France": 6,
              "Germany": 12,
              "Spain": 1,
              "Iran": 0
            },
            {
              "Date": "2020-02-05",
              "China": 27440,
              "US": 11,
              "United_Kingdom": 2,
              "Italy": 2,
              "France": 6,
              "Germany": 12,
              "Spain": 1,
              "Iran": 0
            },
            {
              "Date": "2020-02-06",
              "China": 30587,
              "US": 11,
              "United_Kingdom": 2,
              "Italy": 2,
              "France": 6,
              "Germany": 12,
              "Spain": 1,
              "Iran": 0
            },
            {
              "Date": "2020-02-07",
              "China": 34110,
              "US": 11,
              "United_Kingdom": 3,
              "Italy": 3,
              "France": 6,
              "Germany": 13,
              "Spain": 1,
              "Iran": 0
            },
            {
              "Date": "2020-02-08",
              "China": 36814,
              "US": 11,
              "United_Kingdom": 3,
              "Italy": 3,
              "France": 11,
              "Germany": 13,
              "Spain": 1,
              "Iran": 0
            },
            {
              "Date": "2020-02-09",
              "China": 39829,
              "US": 11,
              "United_Kingdom": 3,
              "Italy": 3,
              "France": 11,
              "Germany": 14,
              "Spain": 2,
              "Iran": 0
            },
            {
              "Date": "2020-02-10",
              "China": 42354,
              "US": 11,
              "United_Kingdom": 8,
              "Italy": 3,
              "France": 11,
              "Germany": 14,
              "Spain": 2,
              "Iran": 0
            },
            {
              "Date": "2020-02-11",
              "China": 44386,
              "US": 12,
              "United_Kingdom": 8,
              "Italy": 3,
              "France": 11,
              "Germany": 16,
              "Spain": 2,
              "Iran": 0
            },
            {
              "Date": "2020-02-12",
              "China": 44759,
              "US": 12,
              "United_Kingdom": 9,
              "Italy": 3,
              "France": 11,
              "Germany": 16,
              "Spain": 2,
              "Iran": 0
            },
            {
              "Date": "2020-02-13",
              "China": 59895,
              "US": 13,
              "United_Kingdom": 9,
              "Italy": 3,
              "France": 11,
              "Germany": 16,
              "Spain": 2,
              "Iran": 0
            },
            {
              "Date": "2020-02-14",
              "China": 66358,
              "US": 13,
              "United_Kingdom": 9,
              "Italy": 3,
              "France": 11,
              "Germany": 16,
              "Spain": 2,
              "Iran": 0
            },
            {
              "Date": "2020-02-15",
              "China": 68413,
              "US": 13,
              "United_Kingdom": 9,
              "Italy": 3,
              "France": 12,
              "Germany": 16,
              "Spain": 2,
              "Iran": 0
            },
            {
              "Date": "2020-02-16",
              "China": 70513,
              "US": 13,
              "United_Kingdom": 9,
              "Italy": 3,
              "France": 12,
              "Germany": 16,
              "Spain": 2,
              "Iran": 0
            },
            {
              "Date": "2020-02-17",
              "China": 72434,
              "US": 13,
              "United_Kingdom": 9,
              "Italy": 3,
              "France": 12,
              "Germany": 16,
              "Spain": 2,
              "Iran": 0
            },
            {
              "Date": "2020-02-18",
              "China": 74211,
              "US": 13,
              "United_Kingdom": 9,
              "Italy": 3,
              "France": 12,
              "Germany": 16,
              "Spain": 2,
              "Iran": 0
            },
            {
              "Date": "2020-02-19",
              "China": 74619,
              "US": 13,
              "United_Kingdom": 9,
              "Italy": 3,
              "France": 12,
              "Germany": 16,
              "Spain": 2,
              "Iran": 2
            },
            {
              "Date": "2020-02-20",
              "China": 75077,
              "US": 13,
              "United_Kingdom": 9,
              "Italy": 3,
              "France": 12,
              "Germany": 16,
              "Spain": 2,
              "Iran": 5
            },
            {
              "Date": "2020-02-21",
              "China": 75550,
              "US": 15,
              "United_Kingdom": 9,
              "Italy": 20,
              "France": 12,
              "Germany": 16,
              "Spain": 2,
              "Iran": 18
            },
            {
              "Date": "2020-02-22",
              "China": 77001,
              "US": 15,
              "United_Kingdom": 9,
              "Italy": 62,
              "France": 12,
              "Germany": 16,
              "Spain": 2,
              "Iran": 28
            },
            {
              "Date": "2020-02-23",
              "China": 77022,
              "US": 15,
              "United_Kingdom": 9,
              "Italy": 155,
              "France": 12,
              "Germany": 16,
              "Spain": 2,
              "Iran": 43
            },
            {
              "Date": "2020-02-24",
              "China": 77241,
              "US": 51,
              "United_Kingdom": 13,
              "Italy": 229,
              "France": 12,
              "Germany": 16,
              "Spain": 2,
              "Iran": 61
            },
            {
              "Date": "2020-02-25",
              "China": 77754,
              "US": 51,
              "United_Kingdom": 13,
              "Italy": 322,
              "France": 14,
              "Germany": 17,
              "Spain": 6,
              "Iran": 95
            },
            {
              "Date": "2020-02-26",
              "China": 78166,
              "US": 57,
              "United_Kingdom": 13,
              "Italy": 453,
              "France": 18,
              "Germany": 27,
              "Spain": 13,
              "Iran": 139
            },
            {
              "Date": "2020-02-27",
              "China": 78600,
              "US": 58,
              "United_Kingdom": 15,
              "Italy": 655,
              "France": 38,
              "Germany": 46,
              "Spain": 15,
              "Iran": 245
            },
            {
              "Date": "2020-02-28",
              "China": 78928,
              "US": 60,
              "United_Kingdom": 20,
              "Italy": 888,
              "France": 57,
              "Germany": 48,
              "Spain": 32,
              "Iran": 388
            },
            {
              "Date": "2020-02-29",
              "China": 79356,
              "US": 68,
              "United_Kingdom": 23,
              "Italy": 1128,
              "France": 100,
              "Germany": 79,
              "Spain": 45,
              "Iran": 593
            },
            {
              "Date": "2020-03-01",
              "China": 79932,
              "US": 74,
              "United_Kingdom": 36,
              "Italy": 1694,
              "France": 130,
              "Germany": 130,
              "Spain": 84,
              "Iran": 978
            },
            {
              "Date": "2020-03-02",
              "China": 80136,
              "US": 98,
              "United_Kingdom": 40,
              "Italy": 2036,
              "France": 191,
              "Germany": 159,
              "Spain": 120,
              "Iran": 1501
            },
            {
              "Date": "2020-03-03",
              "China": 80261,
              "US": 118,
              "United_Kingdom": 51,
              "Italy": 2502,
              "France": 204,
              "Germany": 196,
              "Spain": 165,
              "Iran": 2336
            },
            {
              "Date": "2020-03-04",
              "China": 80386,
              "US": 149,
              "United_Kingdom": 86,
              "Italy": 3089,
              "France": 288,
              "Germany": 262,
              "Spain": 222,
              "Iran": 2922
            },
            {
              "Date": "2020-03-05",
              "China": 80537,
              "US": 217,
              "United_Kingdom": 116,
              "Italy": 3858,
              "France": 380,
              "Germany": 482,
              "Spain": 259,
              "Iran": 3513
            },
            {
              "Date": "2020-03-06",
              "China": 80690,
              "US": 262,
              "United_Kingdom": 164,
              "Italy": 4636,
              "France": 656,
              "Germany": 670,
              "Spain": 400,
              "Iran": 4747
            },
            {
              "Date": "2020-03-07",
              "China": 80770,
              "US": 402,
              "United_Kingdom": 207,
              "Italy": 5883,
              "France": 959,
              "Germany": 799,
              "Spain": 500,
              "Iran": 5823
            },
            {
              "Date": "2020-03-08",
              "China": 80823,
              "US": 518,
              "United_Kingdom": 274,
              "Italy": 7375,
              "France": 1136,
              "Germany": 1040,
              "Spain": 673,
              "Iran": 6566
            },
            {
              "Date": "2020-03-09",
              "China": 80860,
              "US": 583,
              "United_Kingdom": 322,
              "Italy": 9172,
              "France": 1219,
              "Germany": 1176,
              "Spain": 1073,
              "Iran": 7161
            },
            {
              "Date": "2020-03-10",
              "China": 80887,
              "US": 959,
              "United_Kingdom": 384,
              "Italy": 10149,
              "France": 1794,
              "Germany": 1457,
              "Spain": 1695,
              "Iran": 8042
            },
            {
              "Date": "2020-03-11",
              "China": 80921,
              "US": 1281,
              "United_Kingdom": 459,
              "Italy": 12462,
              "France": 2293,
              "Germany": 1908,
              "Spain": 2277,
              "Iran": 9000
            },
            {
              "Date": "2020-03-12",
              "China": 80932,
              "US": 1663,
              "United_Kingdom": 459,
              "Italy": 12462,
              "France": 2293,
              "Germany": 2078,
              "Spain": 2277,
              "Iran": 10075
            },
            {
              "Date": "2020-03-13",
              "China": 80945,
              "US": 2179,
              "United_Kingdom": 802,
              "Italy": 17660,
              "France": 3681,
              "Germany": 3675,
              "Spain": 5232,
              "Iran": 11364
            },
            {
              "Date": "2020-03-14",
              "China": 80977,
              "US": 2727,
              "United_Kingdom": 1144,
              "Italy": 21157,
              "France": 4496,
              "Germany": 4585,
              "Spain": 6391,
              "Iran": 12729
            },
            {
              "Date": "2020-03-15",
              "China": 81003,
              "US": 3499,
              "United_Kingdom": 1145,
              "Italy": 24747,
              "France": 4532,
              "Germany": 5795,
              "Spain": 7798,
              "Iran": 13938
            },
            {
              "Date": "2020-03-16",
              "China": 81033,
              "US": 4632,
              "United_Kingdom": 1551,
              "Italy": 27980,
              "France": 6683,
              "Germany": 7272,
              "Spain": 9942,
              "Iran": 14991
            },
            {
              "Date": "2020-03-17",
              "China": 81058,
              "US": 6421,
              "United_Kingdom": 1960,
              "Italy": 31506,
              "France": 7715,
              "Germany": 9257,
              "Spain": 11748,
              "Iran": 16169
            },
            {
              "Date": "2020-03-18",
              "China": 81102,
              "US": 7783,
              "United_Kingdom": 2642,
              "Italy": 35713,
              "France": 9124,
              "Germany": 12327,
              "Spain": 13910,
              "Iran": 17361
            },
            {
              "Date": "2020-03-19",
              "China": 81156,
              "US": 13677,
              "United_Kingdom": 2716,
              "Italy": 41035,
              "France": 10970,
              "Germany": 15320,
              "Spain": 17963,
              "Iran": 18407
            },
            {
              "Date": "2020-03-20",
              "China": 81250,
              "US": 19100,
              "United_Kingdom": 4014,
              "Italy": 47021,
              "France": 12758,
              "Germany": 19848,
              "Spain": 20410,
              "Iran": 19644
            },
            {
              "Date": "2020-03-21",
              "China": 81305,
              "US": 25489,
              "United_Kingdom": 5067,
              "Italy": 53578,
              "France": 14463,
              "Germany": 22213,
              "Spain": 25374,
              "Iran": 20610
            },
            {
              "Date": "2020-03-22",
              "China": 81435,
              "US": 33276,
              "United_Kingdom": 5745,
              "Italy": 59138,
              "France": 16243,
              "Germany": 24873,
              "Spain": 28768,
              "Iran": 21638
            },
            {
              "Date": "2020-03-23",
              "China": 81498,
              "US": 43847,
              "United_Kingdom": 6726,
              "Italy": 63927,
              "France": 20123,
              "Germany": 29056,
              "Spain": 35136,
              "Iran": 23049
            },
            {
              "Date": "2020-03-24",
              "China": 81591,
              "US": 53740,
              "United_Kingdom": 8164,
              "Italy": 69176,
              "France": 22622,
              "Germany": 32986,
              "Spain": 39885,
              "Iran": 24811
            }
        ]
        let China_data = [],
            US_data = [],
            UK_data = [],
            Italy_data = [],
            France_data = [],
            Spain_data = []
        data.forEach( e =>{
            let temp = {}
            temp.Date = e.Date
            temp.Count = e.China
            China_data.push(temp)
            temp ={}
            temp.Date = e.Date
            temp.Count = e.US
            US_data.push(temp)
            temp ={}
            temp.Date = e.Date
            temp.Count = e.United_Kingdom
            UK_data.push(temp)
            temp ={}
            temp.Date = e.Date
            temp.Count = e.Italy
            Italy_data.push(temp)
            temp ={}
            temp.Date = e.Date
            temp.Count = e.France
            France_data.push(temp)
            temp ={}
            temp.Date = e.Date
            temp.Count = e.Spain
            Spain_data.push(temp)
        })
        this.state = {
            China_data : China_data,
            US_data : US_data,
            UK_data : UK_data,
            Italy_data : Italy_data,
            France_data : France_data,
            Spain_data : Spain_data
        }
    }
    render() {
        let display = {
            display : 'block'
        }
        return (
            <div>
                <div className="header">Graph of Positives Cases in mejorly effected Countries :</div><hr />
                <div className="infoCard">
                    <div id = "chinaInfo"></div>
                </div>
                <div className="infoCard">
                    <div id = "usinfo"></div>
                </div>
                <div className="infoCard">
                    <div id = "ukinfo"></div>
                </div>
                <div className="ChinaGraphCard">
                    <div id ="ChinaGraph"></div>
                </div>
                <div className="USGraphCard">
                    <div id ="USGraph"></div>
                </div>
                <div className="UKGraphCard">
                    <div id ="UKGraph"></div>
                </div>
                <div className="infoCard">
                    <div id = "italyinfo"></div>
                </div>
                <div className="infoCard">
                    <div id = "franceinfo"></div>
                </div>
                <div className="infoCard">
                    <div id = "spaininfo"></div>
                </div>
                <div className="ItalyGraphCard">
                    <div id ="ItalyGraph"></div>
                </div>
                <div className="FranceGraphCard">
                    <div id ="FranceGraph"></div>
                </div>
                <div className="SpainGraphCard">
                    <div id ="SpainGraph"></div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.drawChart('ChinaGraph',this.state.China_data,"China")
        this.drawChart('USGraph',this.state.US_data,"United States")
        this.drawChart('UKGraph',this.state.UK_data,"United Kingdom")
        this.drawChart('ItalyGraph',this.state.Italy_data,"Italy")
        this.drawChart('FranceGraph',this.state.France_data,"France")
        this.drawChart('SpainGraph',this.state.Spain_data,"Spain")
    }
    drawChart(id,data,CountryName){
        let width = document.getElementById(id).offsetWidth
        let height = 250
        let svgLineChart = d3.select('#'+id).append('svg')
            .attr('height',height+'px')
            .attr('width',width+'px')
            .style('border-radius','8px')
            //.style('background-color','cyan')
        let margin = {top: 20, right: 30, bottom: 40, left: 70}
        let svg = svgLineChart.append('g')
            .attr('transform','translate('+margin.left+','+margin.top+')')

        let max = -10000,min = 10000;
        //let labels = []
        let parseTime = d3.timeParse("%Y-%m-%d");
        data.forEach( e =>{
            e.Date = parseTime(e.Date)
            e.Count = + e.Count;   
            //labels.push(e.Date)
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
            .style('stroke','#56abd6')
            .style('stroke-width','3px')
        svgLineChart.append('text')
            .attr('transform','translate('+(width*0.23)+',30)')
            .text(CountryName)
            .style('font-family','cursive')
            .style('font-size','large')
            .style('font-weight',100)
    }
}

export default BubbleChart
