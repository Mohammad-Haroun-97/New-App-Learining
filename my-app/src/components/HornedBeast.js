import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    };
  }

  votesFunction = () => {
    this.setState({ votes: this.state.votes + 1 });

    this.props.showFun()
    this.props.update(this.props.title, this.props.image_url,this.props.description )


  };

  render() {

    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.image_url} onClick={this.votesFunction}  />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            {this.props.description}
            
            </Card.Text>
            <Card.Text>
            Number of Votes : {this.state.votes}
            </Card.Text>
            <Card.Text>
            Number of Horns : {this.props.horns}
            </Card.Text>
            <Button variant="primary" >Select</Button>
          </Card.Body>
        </Card>

        
      </>
    );
  }
}

export default HornedBeast;
