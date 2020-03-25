import React, { Component } from 'react'
import BubbleChart from './BubbleChart'
import WorldImpactLineChart from './WorldImpactLineChart'

class ImpactAcrossGlobe extends Component {
    render() {
        return (
            <div>
                <WorldImpactLineChart />
                <BubbleChart />
            </div>
        )
    }
}

export default ImpactAcrossGlobe
