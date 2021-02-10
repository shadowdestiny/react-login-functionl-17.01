import React, {Component} from 'react';
import './modal.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as modalActions from "../../store/modal/actions";
export default class modal extends Component {
    constructor(props) {
         super(props);
         this.state = {
             isOpen: this.props.isshow
         };
    }

    child(){
        const { kind, ...other } = this.props;
        return <div {...other} />;
    }

    closeModal = () => {
        this.setState({isOpen: 'false'})
    }

    render() {
      return <div className="component-modal" >
          {this.props.isshow === 'true' && <div className="modals">
              <div className="modal-contents">
                  <div className="text-right">
                      <span className={"link"} onClick={this.closeModal}>X</span>
                  </div>
                  <div className={"mt-2"}>
                      {this.child()}
                  </div>
              </div>
          </div>}
      </div>;
    }
  }
// export default connect(
//     ({ modal }) => ({ ...modal }),
//     dispatch => bindActionCreators({ ...modalActions }, dispatch)
//   )( modal );
