import React from 'react'
import HornedBeast from './components/HornedBeast';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import data from './data.json'
import SelectedBeast from './components/SelectedBeast';
import  Form  from './components/form';



class main extends React.Component{

  constructor(props){
    super(props)
    this.state={
      show:false,
      data : data,
      // title:'',
      // image_url:'',
      // description:'' ,
      // horns:'',
      
      // searchQuery :''




     
    }
  }

  showFun=()=>{
    this.setState({
      show : true
    })
  }

  hideFun=()=>{
    this.setState({
      show: false,
    })
  }

  filter = event =>{
    event.preventDefault();            
    const arrFilter = data.filter(element=>event.target.value == element.horns || event.target.value =='All' )
    this.setState({
      searchQuery: event.target.value,
      data: arrFilter
    })
    console.log(arrFilter);
    
    
  }



  update= (title,image_url,description,horns) => {
    this.setState({
      title:title,
      image_url:image_url,
      description:description,
      horns:horns,
      
      
    })
  }



  render(){

    return(
      <>
     <Header/>

     <Form filter={this.filter}/>

     <Main  data={this.state.data}
      showFun={this.showFun} 
      hideFun={this.hideFun} 
      update={this.update}
      state={this.state}
      />
     
     

     <SelectedBeast 
     showFun={this.showFun} 
     hideFun={this.hideFun}
     state={this.state}
     update={this.update}  
     
     title={this.state.title}
     
     image_url={this.state.image_url}

     description={this.state.description}
     horns={this.state.horns}

     />

     <Footer/>



      </>
    );
  }
}

export default main