import React, { Component } from 'react'
import './LineChart.css'
import * as d3 from 'd3v4'
class LineChart extends Component {
    render() {
        return (
            <div>
                <div className="lineChartCard">
                    <div id = "lineChart"></div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        let width = document.getElementById('lineChart').offsetWidth
        let height = 250
        console.log(width)
        let svgLineChart = d3.select('#lineChart').append('svg')
            .attr('width',width+'px')
            .attr('height',height+'px')
            .style('border-radius','8px')
            //.style('background-color','cyan')
        this.drawLineChart(svgLineChart,height,width)
    }
    drawLineChart(svgLineChart,height,width){
        let data = [
            {
                "date": "12/31/2019",
                "India":  0
            },
            {
                "date": "1/1/2020",
                "India":  0
            },
            {
                "date": "1/2/2020",
                "India":  0
            },
            {
                "date": "1/3/2020",
                "India":  0
            },
            {
                "date": "1/4/2020",
                "India":  0
            },
            {
                "date": "1/5/2020",
                "India":  0
            },
            {
                "date": "1/6/2020",
                "India":  0
            },
            {
                "date": "1/7/2020",
                "India":  0
            },
            {
                "date": "1/8/2020",
                "India":  0
            },
            {
                "date": "1/9/2020",
                "India":  0
            },
            {
                "date": "1/10/2020",
                "India":  0
            },
            {
                "date": "1/11/2020",
                "India":  0
            },
            {
                "date": "1/12/2020",
                "India":  0
            },
            {
                "date": "1/13/2020",
                "India":  0
            },
            {
                "date": "1/14/2020",
                "India":  0
            },
            {
                "date": "1/15/2020",
                "India":  0
            },
            {
                "date": "1/16/2020",
                "India":  0
            },
            {
                "date": "1/17/2020",
                "India":  0
            },
            {
                "date": "1/18/2020",
                "India":  0
            },
            {
                "date": "1/19/2020",
                "India":  0
            },
            {
                "date": "1/20/2020",
                "India":  0
            },
            {
                "date": "1/21/2020",
                "India":  0
            },
            {
                "date": "1/22/2020",
                "India":  0
            },
            {
                "date": "1/23/2020",
                "India":  0
            },
            {
                "date": "1/24/2020",
                "India":  0
            },
            {
                "date": "1/25/2020",
                "India":  0
            },
            {
                "date": "1/26/2020",
                "India":  0
            },
            {
                "date": "1/27/2020",
                "India":  0
            },
            {
                "date": "1/28/2020",
                "India":  0
            },
            {
                "date": "1/29/2020",
                "India":  0
            },
            {
                "date": "1/30/2020",
                "India": 1
            },
            {
                "date": "1/31/2020",
                "India":  0
            },
            {
                "date": "2/1/2020",
                "India":  0
            },
            {
                "date": "2/2/2020",
                "India": 1
            },
            {
                "date": "2/3/2020",
                "India":  0
            },
            {
                "date": "2/4/2020",
                "India": 1
            },
            {
                "date": "2/5/2020",
                "India":  0
            },
            {
                "date": "2/6/2020",
                "India":  0
            },
            {
                "date": "2/7/2020",
                "India":  0
            },
            {
                "date": "2/8/2020",
                "India":  0
            },
            {
                "date": "2/9/2020",
                "India":  0
            },
            {
                "date": "2/10/2020",
                "India":  0
            },
            {
                "date": "2/11/2020",
                "India":  0
            },
            {
                "date": "2/12/2020",
                "India":  0
            },
            {
                "date": "2/13/2020",
                "India":  0
            },
            {
                "date": "2/14/2020",
                "India":  0
            },
            {
                "date": "2/15/2020",
                "India":  0
            },
            {
                "date": "2/16/2020",
                "India":  0
            },
            {
                "date": "2/17/2020",
                "India":  0
            },
            {
                "date": "2/18/2020",
                "India":  0
            },
            {
                "date": "2/19/2020",
                "India":  0
            },
            {
                "date": "2/20/2020",
                "India":  0
            },
            {
                "date": "2/21/2020",
                "India":  0
            },
            {
                "date": "2/22/2020",
                "India":  0
            },
            {
                "date": "2/23/2020",
                "India":  0
            },
            {
                "date": "2/24/2020",
                "India":  0
            },
            {
                "date": "2/25/2020",
                "India":  0
            },
            {
                "date": "2/26/2020",
                "India":  0
            },
            {
                "date": "2/27/2020",
                "India":  0
            },
            {
                "date": "2/28/2020",
                "India":  0
            },
            {
                "date": "2/29/2020",
                "India":  0
            },
            {
                "date": "3/1/2020",
                "India":  0
            },
            {
                "date": "3/2/2020",
                "India":  0
            },
            {
                "date": "3/3/2020",
                "India": 2
            },
            {
                "date": "3/4/2020",
                "India": 1
            },
            {
                "date": "3/5/2020",
                "India": 22
            },
            {
                "date": "3/6/2020",
                "India": 1
            },
            {
                "date": "3/7/2020",
                "India": 2
            },
            {
                "date": "3/8/2020",
                "India": 3
            },
            {
                "date": "3/9/2020",
                "India": 0
            },
            {
                "date": "3/10/2020",
                "India": 10
            },
            {
                "date": "3/11/2020",
                "India": 6
            },
            {
                "date": "3/12/2020",
                "India": 23
            },
            {
                "date": "3/13/2020",
                "India": 2
            },
            {
                "date": "3/14/2020",
                "India": 8
            },
            {
                "date": "3/15/2020",
                "India": 7
            },
            {
                "date": "3/16/2020",
                "India": 3
            },
            {
                "date": "3/17/2020",
                "India": 32
            },
            {
                "date": "3/18/2020",
                "India": 12
            },
            {
                "date": "3/19/2020",
                "India": 28
            },
            {
                "date": "3/20/2020",
                "India": 26
            },
            {
                "date": "3/21/2020",
                "India": 40
            },
            {
                "date": "3/22/2020",
                "India": 89
            }
        ]
        //data.forEach( e =>{
        //    console.log(typeof(e.India))
        //})
        // set the ranges
        var x = d3.scaleOrdinal().range([0, width-20]);
        var y = d3.scaleLinear().range([height-30, 0]);
        //var parseTime = d3.timeParse("%d-%b-%y");
        let labels = []
        data.forEach(function(d) {
            labels.push(d.date)
        });
        console.log(data)
        // define the line
        var valueline = d3.line()
            .x(function(d) { 
                console.log(d)
                return x(d.date); 
            })
            .y(function(d) { return y(d.India); });
        
    
        x.domain(labels);
        y.domain([0, d3.max(data, function(d) { return d.India; })]);

        svgLineChart.append("path")
            .data(data)
            .attr("className", "line")
            .attr("d", valueline)
            .style('fill','cyan')

        // Add the X Axis
        svgLineChart.append("g")
            .attr("transform", "translate(0," + (height-50) + ")")
            .call(d3.axisBottom(x));

        // Add the Y Axis
        svgLineChart.append("g")
            .call(d3.axisLeft(y));    


        
    }
}

export default LineChart
