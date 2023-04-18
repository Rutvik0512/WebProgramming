import React from "react";
import { StateManagementReciever } from "./StateManagementReciever";


export class StateManagement extends React.Component{
    state = {
        'name': 'Rutvik',
        'rollNo': '20B81A05G3',
    }
    render(){
        return(
           <>
            <p> {this.state.name + '  '+this.state.rollNo}</p>
            <StateManagementReciever name = {['Saial','Rohith','Rutvik']}/>
           </>
        )
    }
}