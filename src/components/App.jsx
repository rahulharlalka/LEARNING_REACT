import React,{useState} from "react"
import Counters from "./counters"
import NavBar from "./navbar";


function App(){

    const [state,setState]=useState({
        counters:[
            {id:0,value:0},
            {id:1,value:1},
            {id:2,value:2},
            {id:3,value:3}
        ]
    })

    const handleDelete = counterId =>  {
        const counters=state.counters.filter(c=>c.id!==counterId);
        setState({counters}); 
    };

    const handleIncrement= counterId =>{
        const counters =[...state.counters];
        counters[counterId].value++;
        setState({counters});
    }

    const handleReset=()=>{
        const counters = state.counters.map(c=>{
            c.value=0;
            return c;
        });
        setState({counters});
    }




    return (
        <React.Fragment>
            <NavBar totalCounters={state.counters.filter(c=>c.value>0).length} />
            <main>
                <Counters
                 counters={state.counters}                  
                 onReset={handleReset}
                 onIncrement={handleIncrement} 
                 onDelete={handleDelete} />
            </main>
        </React.Fragment>
    )
};


export default App;