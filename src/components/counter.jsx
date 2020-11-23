import React,{useState} from "react"

function Counter(props){

    function formatCount(){
        return props.value=== 0? <h5>zero</h5> : props.value;
    }   

    return (    
        <div className="row">
            <div className="col-2">
                <h4>{props.children}</h4>
            </div>
            <div className="col-1">
                <span  className={getBadgeClasses()}>{formatCount()}</span>
            </div>
            <div className="col">                
                <button onClick={()=>props.onIncrement(props.id)} className="btn btn-primary btn-sm m-2">+</button>
                <button onClick={()=>props.onDecrement(props.id)} className="btn btn-secondary btn-sm m-2">-</button>
                <button onClick={()=>props.onDelete(props.id)} className="btn btn-danger btn-sm m-2">x</button> 
            </div>
            
             
                       
        </div>
    )

    function getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += (props.value === 0 ? "badge-warning" : "badge-primary");
        return classes;
    }
}

export default Counter;