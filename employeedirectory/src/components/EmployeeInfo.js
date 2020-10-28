import React, { Component } from "react";
import axios from "axios";
//import Container from "./Container";
//import Row from "./Row";
//import Col from "./Col";
//import Card from "./Card";
//import Employee from "./Employee";

//import Card from "./Card";
import SearchResults from "./SearchResults";

class EmployeeInfo extends Component {

    state = {
        isLoading: true,
        result: undefined
    };

    componentDidMount() {
        axios.get("https://randomuser.me/api/?results=20&nat=us")
            .then(res => this.setState({ result: res.data.results, isLoading: false }))
            .catch(err => console.log(err));

    };

    render() {
        const { isLoading, result } = this.state;
        if (isLoading) {
            return <div>
                <h3>
                    Loading...
                </h3>
            </div>
        }
        else {
            return <div>
                <SearchResults results= {result}/>
            </div>
        }
    }

}


export default EmployeeInfo;