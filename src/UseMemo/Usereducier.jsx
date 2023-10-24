import React, { useReducer } from 'react'


const reducers=(state,action)=>{
    switch(action.type){
    case "INCREMENT":
        return {count:state.count+1};
    
    case "DECREMENT":
        return {count:state.count-1};
    
    default:
        return state
}}

const Usereducier = () => {
    const initailReaduce={count:0};
    const[state,dispatch]=useReducer(reducers,initailReaduce);
  return (
    <div>
        <h1>reducer</h1>
        <p>count:{state.count}</p>
        <button onClick={()=>{dispatch({type:"INCREMENT"})}}>Incrriment</button>
        <button onClick={()=>{dispatch({type:"DECREMENT"})}}>decrement</button>
    </div>
  )
}

export default Usereducier