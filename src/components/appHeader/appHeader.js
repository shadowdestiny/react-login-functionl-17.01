import React, {Component} from 'react';
import './appHeader.scss'
import logo from '../../assets/images/logo.png';
export default class appHeader extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-app-header">
          <div className="text-left">
              <img src={logo} alt={"logo"}/>
          </div>
      </div>;
    }
  }
