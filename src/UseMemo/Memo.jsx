import React, { useMemo, useState } from 'react'

const Memo = () => {
    const [int1,setint1]=useState(0);
    const [int2,setint2]=useState(0);
    // console.log()

    const sum=useMemo(()=>{
        return int1+int2;
    },[int1,int2])
  return (
    <div>
        <h1>sum calculater</h1>
        <input type="number" onChange={(e)=>{setint1(e.target.value)}}/>
        <input type="number" onChange={(e)=>{setint2(e.target.value)}}/>
        <div>sum: {sum}</div>
    </div>
  )
}

export default Memo