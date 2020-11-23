import React,{useState} from 'react';
import Counter from "./counter"

function Counters(props){    
    return (
        <div>
            
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
            <button onClick={props.onReset} className="btn btn-danger btn-lg">Reset</button>
        </div>
    )
}

export default Counters;