import React from'react'

let newColor

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            changeColor : newColor
        };

    }


    // finalColor=()=>{

    //     this.setState({changeColor : })

    // }

    //  getRandomColor=()=>  {
        
    //     var letters = '0123456789ABCDEF';
    //     var color = '#';
    //     for (var i = 0; i < 6; i++) {
    //       color += letters[Math.floor(Math.random() * 16)];
    //       color = newColor
    //     }
    //     return color;
    //   }
      
      
      
    //   setRandomColor=()=> {
    //     $("#colorpad").css("background-color", getRandomColor());
    //   }
    

    render(){

        return(

            <>

            <button background-color={this.state.changeColor} onClick={this.changeColorFun }>Self - Learning</button>



            </>
        );
    }
}


export default Header