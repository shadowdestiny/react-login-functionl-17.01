import React, {Component} from 'react';
import './appLogin.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as appLoginActions from "../../store/appLogin/actions";
export default class appLogin extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-app-login">Hello! component appLogin</div>;
    }
  }
// export default connect(
//     ({ appLogin }) => ({ ...appLogin }),
//     dispatch => bindActionCreators({ ...appLoginActions }, dispatch)
//   )( appLogin );
