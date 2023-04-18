import React from "react";
import { StateManagement } from "./StateManagement";

export class StateManagementReciever extends React.Component{
    render(){
        // const friend = this.props.friends;
        return(
            
            <div>
                <p>Friends: </p>
                {this.props.friends.map((friend)=> { return <div>{friend}</div>})} 
                
            </div>
        )
    }
}