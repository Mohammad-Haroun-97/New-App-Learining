import React from "react";
import  Modal  from "react-bootstrap/Modal";
import Button from "@restart/ui/esm/Button";


class SelectedBeast extends React.Component{

    render(){

        return(

            <>
            <Modal
             show={this.props.state.show} onHide={this.props.hideFun}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body> <img style={{width :'30rem'}} src={this.props.image_url} ></img>
        <p>{this.props.description}</p>
        <ul>
            <li>Number of horns : {this.props.horns}</li>
            <li>Number of Votes : {this.props.votes}</li>
        </ul>
        
        
         </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.hideFun}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>




            </>
        )
    }
}



export default SelectedBeast