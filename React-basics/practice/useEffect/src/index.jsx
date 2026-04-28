import './index.css'
import { useEffect } from 'react'
import { useState } from 'react'

/*export const ReactuseEffect = () => {
    useEffect(()=>{
        console.log("useEffect called");        
    },[])
  return (
    <>
      <h1>useEffect</h1>
    </>
  )
}*/

/*
export const ReactuseEffect = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log("Count value :", count);

    },[count])

    return (
        <div>
            <h1>useEffect</h1>
            <h2>Count: {count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    )
}*/

/*export const ReactuseEffect = () => {
    const [date,setDate] = useState("")

    useEffect(()=>{
        setInterval(()=>{
            const updateDate=new Date();
            setDate(updateDate.toLocaleTimeString());
        },1000)

    },[])

    return(
        <div>
            <h1>useEffect</h1>
            <h2>Date: {date}</h2>
        </div>
    )

}*/

export const ReactuseEffect = () => {
    const [name, setName] = useState("")
    useEffect(()=>{
        console.log(name)
    },[name]);

    return(
        <div>
            <h1>useEffect</h1>
            <h2>Name: {name}</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )

}