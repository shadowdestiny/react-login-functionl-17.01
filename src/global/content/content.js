import React, {Component} from 'react';
// import './content.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as contentActions from "../../store/content/actions";
import PropTypes from 'prop-types';

export default class content extends Component {
    static propTypes = {
        body: PropTypes.object.isRequired
    };

    render() {
        const {body} = this.props;
        return (
            <div className="Content">
                {body}
            </div>
        );
    }
  }
// export default connect(
//     ({ content }) => ({ ...content }),
//     dispatch => bindActionCreators({ ...contentActions }, dispatch)
//   )( content );

