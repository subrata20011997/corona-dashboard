import React, { Component } from 'react'
import MapIndia from './MapIndia';
import CardInfo from './CardInfo';
import LineChart from './LineChart';

class ImpactIndia extends Component {
    render() {
        return (
            <div>
                <CardInfo />
                <div className="layout1">
                    <MapIndia />
                </div>
                <LineChart />
            </div>
        )
    }
}

export default ImpactIndia
