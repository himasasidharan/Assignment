import React from "react";
class MainContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dummy :"ABC"
        }
        this.returnMapVal = this.returnMapVal.bind(this);
    }

    returnMapVal(){
         return(
        this.props.members.map((val,inx)=>{
           return( <div key={inx}>
                {val.name}
            </div>)
        })
        );
 
    }
    

    render(){
        console.log(this.props.members)
        return(
            <div>
                {this.state.dummy} - 
                {this.returnMapVal()}
            </div>
        )
    }
}

export default MainContent