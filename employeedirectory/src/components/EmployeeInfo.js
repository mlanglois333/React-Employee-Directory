import React, { Component } from "react";
//import Container from "./Container";
//import Row from "./Row";
//import Col from "./Col";
//import Card from "./Card";
//import Employee from "./Employee";
import API from "../API";

class EmployeeInfo extends Component {

    state = {
        result:{}
    };

    componentDidMount() {
        API.search().then(res => this.setState({ result: res.data.results}))
        .catch(err => console.log(err));
    };

    render() {

        const data = this.state.result;
        console.log(data);
        return (
          <div>
            <h4>
                worked
                </h4>

              
             
          </div>
        );
      }
    }

export default EmployeeInfo;