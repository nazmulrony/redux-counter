import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { COUNTER_ACTION } from '../redux/actions/CounterAction';

const Counter = () => {
    const count = useSelector((state) => state.count);
    console.log(count);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch({ type: COUNTER_ACTION.INCREMENT })
    }
    return (
        <div>
            <h3>Redux counter</h3>
            <h4>Count:{count}</h4>
            <button onClick={handleIncrement}>Increase</button>
            <button onClick={() => dispatch({ type: COUNTER_ACTION.DECREMENT })}>Decrease</button>
            <button onClick={() => dispatch({ type: COUNTER_ACTION.RESET })}>Reset</button>
        </div>
    );
};

export default Counter;