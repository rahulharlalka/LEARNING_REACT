import React,{useState} from 'react';
import Counter from "./counter"

function Counters(props){    
    return (
        <div>
            <button onClick={props.onReset} className="btn btn-danger btn-sm">Reset</button>
            {props.counters.map(counter=>(
                <Counter 
                    key={counter.id} 
                    id={counter.id}
                    value={counter.value}
                    onDelete={props.onDelete} 
                    onDecrement={props.onDecrement}
                    onIncrement={props.onIncrement}
                >
                    <h4>Counter {counter.id}</h4>
                </Counter>
            ))}
        </div>
    )
}

export default Counters;