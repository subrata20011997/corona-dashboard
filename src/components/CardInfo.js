import React, { Component } from 'react'
import * as d3 from 'd3v4'
import './CardInfo.css'

class CardInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : [
                {
                    "type": "CONFIRMED CASES",
                    "count": 365,
                    "color": '#246ca3'
                },
                {
                    "type":"HOSPITALIZED CASES",
                    "count" : 334,
                    "color": '#d48206'
                },
                {
                    "type" : "CASES IN INTENSIVE CARE",
                    "count" : 0,
                    "color": '#8a2200'
                },
                {
                    "type":"RECOVERED CASES",
                    "count":24,
                    "color": '#1b8c5f'
                },
                {
                    "type":"DEATHS",
                    "count":7,
                    "color": '#7d8a85'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <div className = "card">
                    <div id = "info0"></div>
                </div>
                <div className = "card">
                    <div id = "info1"></div>
                </div>
                <div className = "card">
                    <div id = "info2"></div>
                </div>
                <div className = "card">
                    <div id = "info3"></div>
                </div>
                <div className = "card">
                    <div id = "info4"></div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.drawCard(0)
        this.drawCard(1)
        this.drawCard(2)
        this.drawCard(3)
        this.drawCard(4)
    }
    drawCard(id){
        let width = document.getElementById('info'+id).offsetWidth
        let svg = d3.select('#info'+id).append('svg')
            .attr('height','120px')
            .attr('width',width)
            .style('background-color',this.state.data[id].color)
            .style('border-radius','8px')
        svg.append('text')
            .attr("transform","translate("+(10)+","+(20)+")")
            .text('No. of')
            .style('font-size','small')
            .style('fill','white')
            .style('font-family','cursive')
        svg.append('text')
            .attr("transform","translate("+(10)+","+(45)+")")
            .text(this.state.data[id].type)
            .style('font-size','large')
            .style('font-weight',600)
            .style('fill','white')
            .style('font-family','Cambria, Cochin, Georgia, Times,serif')
        svg.append('text')
            .attr("transform","translate("+(10)+","+(90)+")")
            .text(this.state.data[id].count)
            .style('font-size','xx-large')
            .style('font-weight',600)
            .style('fill','white')
            .style('font-family','Cambria, Cochin, Georgia, Times,serif')
    }
}

export default CardInfo
