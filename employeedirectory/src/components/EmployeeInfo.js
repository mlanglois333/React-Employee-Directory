import React, { Component } from "react";
import axios from "axios";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import SearchResults from "./SearchResults";
import OptionsForm from "./OptionsForm"

class EmployeeInfo extends Component {

    state = {
        isLoading: true,
        result: undefined,
        gender: "none",
        sort: "none",
        dataToRender: undefined,

        
    };

    componentDidMount() {
        axios.get("https://randomuser.me/api/?results=20&nat=us")
            .then(res => this.setState({ result: res.data.results, isLoading:false, dataToRender: res.data.results }))
            .catch(err => console.log(err));

    };

    handleSubmit(event)  {
        event.preventDefault();
        console.log(event.target.value);

      };

      handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        let tempData;
        this.setState({
          [name]: value
        });

        switch(this.state.gender) {
            case "none":
              tempData=this.state.result;
              break;
            case "male":
              tempData= this.state.result.filter(function(e){return e.gender === "female"});
              break;
            case "female":
              tempData= this.state.result.filter(function(e){return e.gender === "male"});
              break;
          }
          switch(this.state.sort) {
            case "none":
              break;
            case "ascend":
              tempData.name.last.sort();
              break;
            case "descend":
                tempData.name.last.sort();
                tempData.reverse();
              break;      
          }

          this.setState({dataToRender:tempData});
      
      };

    render() {
        const { isLoading, dataToRender} = this.state;

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
                            handleSubmit= {this.handleSubmit}
                            handleInputChange ={this.handleInputChange}
                            gender={this.state.gender}
                            sort={this.state.sort}/>
                        </Col>
                    </Row>


                </Container>
            </div>
        }
    }

}


export default EmployeeInfo;