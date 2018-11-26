import React from 'react';
import Button from '@material-ui/core/Button';

const Counter = (props) => {
    const { handleDecrement, handleIncrement, value} = props;
    return (
        <div>
            <Button color='primary' variant='contained'
            onClick={handleDecrement}>Decrement</Button>
            <span>{value}</span>
            <Button color='secondary' variant='contained'
            onClick={handleIncrement}>Increment</Button>
        </div>
    )
}

export default Counter;