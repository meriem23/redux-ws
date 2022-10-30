import React, { useState } from "react";
import { connect } from "react-redux"

const CounterGroup = (props) => {
    console.log(props);
    const [age, setAge] = useState(0)
    console.log(age);
    return (
        <div>
            <div>
                <input type="number" placeholder="type in your age" onChange={(e) => props.handleAge(setAge(e.target.value))} />
            </div>
            <div>
                <button onClick={props.increment}>+10</button>
                <p>{props.count}</p>
                <button onClick={props.decrement}>-5</button>
                <br />
                <button onClick={props.reset}>RESET</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const { counter } = state;
    return counter
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: "INCRMENT", payload: 10 }),
        decrement: () => dispatch({ type: "DECREMENT", payload: 5 }),
        reset: () => dispatch({ type: 'RESET', payload: 0 }),
        // handleAge: () => dispatch({ type: "HANDLE_AGE", payload: props.age })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CounterGroup);
