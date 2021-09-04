import React from 'react'
import HornedBeast from './HornedBeast';






class Main extends React.Component{

    render(){
        return(
            <>
            
           
           {this.props.data.map(item =>{
        return <>
     
    <HornedBeast title={item.title} image_url={item.image_url} description={item.description } horns={item.horns}
    showFun={this.props.showFun}
    hideFun={this.props.hideFun}
      update={this.props.update} 
             />
            
           


            
          </>
      })}
       
       
     </>
    )

  }
}
export default Main;
