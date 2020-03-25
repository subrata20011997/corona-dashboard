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
        //console.log(width)
        let svgLineChart = d3.select('#lineChart').append('svg')
            .attr('width',width+'px')
            .attr('height',height+'px')
            .style('border-radius','8px')
            .style('background-color','lightblue')
        this.drawLineChart(svgLineChart,height,width)
    }
    drawLineChart(svgLineChart,height,width){
        let data = [
            {
                "Date": "12/31/2019",
                "Count":  0
            },
            {
                "Date": "1/1/2020",
                "Count":  0
            },
            {
                "Date": "1/2/2020",
                "Count":  0
            },
            {
                "Date": "1/3/2020",
                "Count":  0
            },
            {
                "Date": "1/4/2020",
                "Count":  0
            },
            {
                "Date": "1/5/2020",
                "Count":  0
            },
            {
                "Date": "1/6/2020",
                "Count":  0
            },
            {
                "Date": "1/7/2020",
                "Count":  0
            },
            {
                "Date": "1/8/2020",
                "Count":  0
            },
            {
                "Date": "1/9/2020",
                "Count":  0
            },
            {
                "Date": "1/10/2020",
                "Count":  0
            },
            {
                "Date": "1/11/2020",
                "Count":  0
            },
            {
                "Date": "1/12/2020",
                "Count":  0
            },
            {
                "Date": "1/13/2020",
                "Count":  0
            },
            {
                "Date": "1/14/2020",
                "Count":  0
            },
            {
                "Date": "1/15/2020",
                "Count":  0
            },
            {
                "Date": "1/16/2020",
                "Count":  0
            },
            {
                "Date": "1/17/2020",
                "Count":  0
            },
            {
                "Date": "1/18/2020",
                "Count":  0
            },
            {
                "Date": "1/19/2020",
                "Count":  0
            },
            {
                "Date": "1/20/2020",
                "Count":  0
            },
            {
                "Date": "1/21/2020",
                "Count":  0
            },
            {
                "Date": "1/22/2020",
                "Count":  0
            },
            {
                "Date": "1/23/2020",
                "Count":  0
            },
            {
                "Date": "1/24/2020",
                "Count":  0
            },
            {
                "Date": "1/25/2020",
                "Count":  0
            },
            {
                "Date": "1/26/2020",
                "Count":  0
            },
            {
                "Date": "1/27/2020",
                "Count":  0
            },
            {
                "Date": "1/28/2020",
                "Count":  0
            },
            {
                "Date": "1/29/2020",
                "Count":  0
            },
            {
                "Date": "1/30/2020",
                "Count": 1
            },
            {
                "Date": "1/31/2020",
                "Count":  0
            },
            {
                "Date": "2/1/2020",
                "Count":  0
            },
            {
                "Date": "2/2/2020",
                "Count": 1
            },
            {
                "Date": "2/3/2020",
                "Count":  0
            },
            {
                "Date": "2/4/2020",
                "Count": 1
            },
            {
                "Date": "2/5/2020",
                "Count":  0
            },
            {
                "Date": "2/6/2020",
                "Count":  0
            },
            {
                "Date": "2/7/2020",
                "Count":  0
            },
            {
                "Date": "2/8/2020",
                "Count":  0
            },
            {
                "Date": "2/9/2020",
                "Count":  0
            },
            {
                "Date": "2/10/2020",
                "Count":  0
            },
            {
                "Date": "2/11/2020",
                "Count":  0
            },
            {
                "Date": "2/12/2020",
                "Count":  0
            },
            {
                "Date": "2/13/2020",
                "Count":  0
            },
            {
                "Date": "2/14/2020",
                "Count":  0
            },
            {
                "Date": "2/15/2020",
                "Count":  0
            },
            {
                "Date": "2/16/2020",
                "Count":  0
            },
            {
                "Date": "2/17/2020",
                "Count":  0
            },
            {
                "Date": "2/18/2020",
                "Count":  0
            },
            {
                "Date": "2/19/2020",
                "Count":  0
            },
            {
                "Date": "2/20/2020",
                "Count":  0
            },
            {
                "Date": "2/21/2020",
                "Count":  0
            },
            {
                "Date": "2/22/2020",
                "Count":  0
            },
            {
                "Date": "2/23/2020",
                "Count":  0
            },
            {
                "Date": "2/24/2020",
                "Count":  0
            },
            {
                "Date": "2/25/2020",
                "Count":  0
            },
            {
                "Date": "2/26/2020",
                "Count":  0
            },
            {
                "Date": "2/27/2020",
                "Count":  0
            },
            {
                "Date": "2/28/2020",
                "Count":  0
            },
            {
                "Date": "2/29/2020",
                "Count":  0
            },
            {
                "Date": "3/1/2020",
                "Count":  0
            },
            {
                "Date": "3/2/2020",
                "Count":  0
            },
            {
                "Date": "3/3/2020",
                "Count": 2
            },
            {
                "Date": "3/4/2020",
                "Count": 1
            },
            {
                "Date": "3/5/2020",
                "Count": 22
            },
            {
                "Date": "3/6/2020",
                "Count": 1
            },
            {
                "Date": "3/7/2020",
                "Count": 2
            },
            {
                "Date": "3/8/2020",
                "Count": 3
            },
            {
                "Date": "3/9/2020",
                "Count": 0
            },
            {
                "Date": "3/10/2020",
                "Count": 10
            },
            {
                "Date": "3/11/2020",
                "Count": 6
            },
            {
                "Date": "3/12/2020",
                "Count": 23
            },
            {
                "Date": "3/13/2020",
                "Count": 2
            },
            {
                "Date": "3/14/2020",
                "Count": 8
            },
            {
                "Date": "3/15/2020",
                "Count": 7
            },
            {
                "Date": "3/16/2020",
                "Count": 3
            },
            {
                "Date": "3/17/2020",
                "Count": 32
            },
            {
                "Date": "3/18/2020",
                "Count": 12
            },
            {
                "Date": "3/19/2020",
                "Count": 28
            },
            {
                "Date": "3/20/2020",
                "Count": 26
            },
            {
                "Date": "3/21/2020",
                "Count": 40
            },
            {
                "Date": "3/22/2020",
                "Count": 89
            }
        ]
        
    }
}

export default LineChart
