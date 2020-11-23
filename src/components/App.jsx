import React,{useState} from "react"
import Counters from "./counters"
import NavBar from "./navbar";


function App(){

    const [state,setState]=useState({
        counters:[
            {id:1,value:4},
            {id:2,value:1},
            {id:3,value:2},
            {id:4,value:3}
        ]
    })

    const handleDelete = counterId =>  {
        const counters=state.counters.filter(c=>c.id!==counterId);
        setState({counters}); 
    };

    const handleIncrement= counter =>{
        const counters =[...state.counters];
        let index=-1;
        for(let i=0;i<counters.length;i++)
        {
            if(counters[i].id===counter)
                index=i;
        }
        counters[index].value++;
        setState({counters});
    }

    const handleReset=()=>{
        const counters = state.counters.map(c=>{
            c.value=0;
            return c;
        });
        setState({counters});
    }

    const handleDecrement= counter =>{
        const counters =[...state.counters];
        let index=-1;
        for(let i=0;i<counters.length;i++)
        {
            if(counters[i].id===counter)
                index=i;
        };
        counters[index].value--;
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
                 onDecrement={handleDecrement}
                 onDelete={handleDelete} />
            </main>
        </React.Fragment>
    )
};


export default App;