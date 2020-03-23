import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css';
import './NavBar.css'

class NavBar extends Component {
    render() {
        return (
            <div>
                <div class="ui tabular menu">
                    <a class="item active">
                        <div>
                            <span className="titleOfDashboard">COVID -19 '</span><span className="navOption">Impact in India</span>
                        </div>
                    </a>
                    <a class="item">
                        <span className="navOption">Impact across the Globe</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default NavBar
