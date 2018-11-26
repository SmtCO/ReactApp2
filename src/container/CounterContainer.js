import React from 'react';
import Counter from '../component/Counter';

export default class CounterContainer extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            value: 0
        }
    }
    handleDecrement = (e) => {
        this.setState((prevState)=>({
            value: prevState.value+1
        }));
    }

    handleIncrement = (e) => {
        this.setState((prevState)=>({
            value: prevState.value-1
        }));
    }

    render(){
        const {value} = this.state;
        return(
            <Counter handleDecrement={this.handleDecrement}
            handleIncrement={this.handleIncrement}
            value={value}></Counter>
        )
    }
}