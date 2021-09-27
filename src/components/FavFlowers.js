import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import {Card,Button,Col} from "react-bootstrap";

class FavFlowers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favItems: [],
      showFlag : false,
    };
  }

  componentDidMount() {
    const { user } = this.props.auth0;

    let obj = {
      ownerEmail: user.email,
      
    };
    // console.log('auth',obj.owner);


    // console.log('dfdf',ownerEmail);
    
    axios.get(`http://localhost:3055/getFromFav`,{params :obj })
      .then((result) => {
        this.setState({
          favItems: result.data,
        });
      })
      .catch((err) => {
        console.log(`error`);
      });
  }


  showUpdateForm=()=>{
    this.setState({

      showFlag :true,


    })
  }


  handleClose=()=>{
    this.setState({
      showFlag :false,
    })
  }
  

  render() {
    return (
      <div>
        <h1>My Favorite Flowers</h1>

        {this.state.favItems.map(item => (
          <Col> 

          <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.photo} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
             {item.ownerEmail}
            </Card.Text>
            <Button onClick={()=>this.showUpdateForm(item)}  variant="primary">Update</Button>
            <Button  variant="primary">Delete</Button>
          </Card.Body>
        </Card>
          
          
        </Col>
        ))}


        {this.state}
      </div>
    );
  }
}

export default withAuth0(FavFlowers);
