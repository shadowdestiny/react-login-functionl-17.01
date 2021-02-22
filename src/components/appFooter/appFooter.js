import React, {Component} from 'react';
import './appFooter.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as appFooterActions from "../../store/appFooter/actions";
export default class appFooter extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-app-footer">
          <div className={"footer-section mt-5 mb-2"}>
              Copyright © Cencosud Scotiabank 2020
          </div>
      </div>;
    }
  }
// export default connect(
//     ({ appFooter }) => ({ ...appFooter }),
//     dispatch => bindActionCreators({ ...appFooterActions }, dispatch)
//   )( appFooter );
