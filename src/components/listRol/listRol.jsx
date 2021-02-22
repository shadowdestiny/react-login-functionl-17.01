import React, {Component, useState} from 'react';
import './listRol.scss'

const ListRol = (props) => {
    const lists = props.listrol;

    const buildList = () => {

        let listHtml = [];
        lists.forEach((l, i) => {
            listHtml.push(buildNameLi(i, l));
        });
        return listHtml;
    }

    const buildNameLi = (i, row) => {
        return <div className="list-group" key={i.toString()}>
            <a href="#" className="list-group-item list-group-item-action">
                {row.group}
            </a>
        </div>;
    }

    return <div className="component-list-rol">
        {buildList()}
    </div>;

}

export default ListRol;
