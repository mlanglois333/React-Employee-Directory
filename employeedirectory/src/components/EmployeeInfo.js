import React, { Component } from "react";
import axios from "axios";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
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
                <Container>
                    <Row>
                        <Col size="md-12">
                            <h1 class="jumbotron">
                                Employee Roster
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <SearchResults results={result} />

                        </Col>
                    </Row>


                </Container>
            </div>
        }
    }

}


export default EmployeeInfo;