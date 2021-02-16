import React, {Component} from 'react';
import './listRol.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as listRolActions from "../../store/listRol/actions";
export default class listRol extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listRol: this.props.listrol
        };
    }

    buildList() {
        const lists = this.props.listrol;
        let listHtml = [];
        lists.forEach((l, i) => {
            listHtml.push(this.buildNameLi(i, l));
        });
        return listHtml;
    }

    buildNameLi(i, row) {
        return <div className="list-group" key={i.toString()}>
            <a href="#" className="list-group-item list-group-item-action">
                {row.label}
            </a>
        </div>;
    }

    render() {
        return <div className="component-list-rol">
            {this.buildList()}
        </div>;
    }
}
// export default connect(
//     ({ listRol }) => ({ ...listRol }),
//     dispatch => bindActionCreators({ ...listRolActions }, dispatch)
//   )( listRol );
