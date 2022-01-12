import React, { useReducer } from "react";

const initialValue = {count: 0}

function reducer(state, action) {
    switch (action.type) {
        case 'increase':
            return { count: state.count + 1 }
        case 'decrease':  
            return { count: state.count - 1 }   
        default: 
            throw new Error();    
    }
}
const CheckReducer = () => {
   const [state, dispatch] = useReducer(reducer, initialValue);
   
   return(
       <div>
           {state.count}
           <button onClick={()=> dispatch({type: 'increase'})}>Click 66666666666666666</button>
       </div>
   );
}

export default CheckReducer;