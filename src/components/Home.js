import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import FlowerItem from './FlowerItem'
import { Row,Col } from "react-bootstrap";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backedArray: [],
    };
  }

  componentDidMount = () => {
    axios
      .get(`http://localhost:3055/getFruits`)
      .then(result => {
        this.setState({
          backedArray: result.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <h1>API Flowers</h1>
        
        <Row xs={1} md={3} className="g-4">

        {this.state.backedArray.map(item => (
         
         <Col>

         <FlowerItem item={item}/>
         </Col>
         

        ))}
        </Row>

        




      </div>
    );
  }
}

export default Home;
