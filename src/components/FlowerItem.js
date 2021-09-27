import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

class FlowerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {


    };
  }



 addToFav=(item)=>{

   const {user}=this.props.auth0;

   const obj={
     ownerEmail: user.email,
     name:item.name,
     photo:item.photo,
     price:item.price,
   }

   axios.post(`http://localhost:3055/addToFav`,obj).then(result=>{
     console.log(result.data);
   })

   .catch(err=>{
     console.log(`error`);
   })
 }




  
  render() {
    return (
      <div>
          hello
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.item.photo} />
          <Card.Body>
            <Card.Title>{this.props.item.name}</Card.Title>
            <Card.Text>
             {this.props.item.instructions}
            </Card.Text>
            <Button onClick={()=>this.addToFav(this.props.item)} variant="primary">Add</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default withAuth0(FlowerItem);
