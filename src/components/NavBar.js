import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css';
import './NavBar.css'
import {Link} from 'react-router-dom'

class NavBar extends Component {
    constructor(){
        super()
        this.state = {
            className1 : "item active",
            className2 : "item"
        }
    }
    updateState(id){
        if(id === 1){
            this.setState({
                className1 : "item active",
                className2 : "item"
            })
        } 
        if(id === 2){
            this.setState({
                className1 : "item",
                className2 : "item active"
            })
        }
    }
    render() {
        return (
            <div>
                <div className="ui tabular menu">
                    <Link to="/" className={this.state.className1} onClick={ () => this.updateState(1)}>
                        <div>
                            <span className="titleOfDashboard">COVID -19 '</span><span className="navOption">Impact in India</span>
                        </div>
                    </Link>
                    <Link to="/impactAcrossGlobe" className={this.state.className2} onClick={() => this.updateState(2)}>
                        <span className="navOption">Impact across the Globe</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default NavBar
