import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import SearchResults from "./SearchResults";
import OptionsForm from "./OptionsForm"
import API from "../API";

class EmployeeInfo extends Component {

    state = {
        isLoading: true,
        result: undefined,
        gender: "none",
        sort: "none",
        dataToRender: undefined,


    };

    componentDidMount() {
        API.search
            .then(res => this.setState({ result: res.data.results, isLoading: false, dataToRender: res.data.results }))
            .catch(err => console.log(err));

    };

    handleSubmit=event=>{

        event.preventDefault();

        const gend = event.target.gender.value;
        const alph = event.target.sort.value;

    this.handleInputChange(gend, alph);

             
    
    }

    handleInputChange(g, a){

        const gend = g;
        const alph = a;
        let tempData; 
        this.setState({gender: gend});
        this.setState({sort: alph});

    
        switch (gend) {
            case "none":
                tempData = this.state.result;
                break;
            case "male":
                tempData = this.state.result.filter(function (e) { return e.gender === "male" });
                break;
            case "female":
                tempData = this.state.result.filter(function (e) { return e.gender === "female" });
                break;
            default:
                tempData = this.state.result;


        }
     
        switch (alph) {
            case "none":
                break;
            case "ascend":
                tempData.sort((a,b)=>{ 
                    if (a.name.last > b.name.last) 
                    return 1;
                    if (a.name.last < b.name.last)
                    return -1;
                    return 0;
                });
                break;
            case "descend":
                tempData.reverse();

                break;
        }

        this.setState({ dataToRender: tempData });


    }


    render() {
        const { isLoading, dataToRender } = this.state;

        if (isLoading) {
            return <div>
                <h3>
                    Loading...
                </h3>
            </div>
        }
        else {
            //const male = result.filter(result.gender === "male");
            // const female = result.filter(result.gender === "female");
            //const ascend = result.name.last.sort();
            // const descend = ascend.reverse();
            return <div>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <h1 className="jumbotron">
                                Employee Roster
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-8">
                            <SearchResults results={dataToRender} />

                        </Col>
                        <Col size="md-4">
                            <OptionsForm
                                handleSubmit={this.handleSubmit}
                                />
                        </Col>
                    </Row>


                </Container>
            </div>
        }
    }

}


export default EmployeeInfo;