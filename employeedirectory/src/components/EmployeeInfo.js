import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import EmployeeInfo from "./Employee";
import API from "../API";

class EmployeeContainer extends Component {

    state = {
        result:{}
    };

    componentDidMount() {
        API.search().then(res => this.setState({ result: res}))
        .catch(err => console.log(err));
        console.log(res);
    };
}

export default EmployeeInfo;