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

}

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

}*/

//API FETCHING


export const ApiFetching = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const API = "https://pokeapi.co/api/v2/pokemon/squirtle"

    /*const fetchPokemon =()=>{
        fetch(API)
        .then((res)=>res.json())
        .then((data)=>{
            setData(data);
            setLoading(false);
        })
        .catch((error)=>{
                console.log(error);
                setError(error);
                setLoading(false);
        })

    }*/
   
    const fetchPokemon = async()=>{
        try{
            const res = await fetch(API);
            const data = await res.json();
            setData(data);
            setLoading(false);
            
        }
        catch(error){
            console.log(error);
            setError(error);
            setLoading(false);
        }

    useEffect(()=>{
        fetchPokemon()
    },[])

    console.log(data);

if (loading){
    return(
        <div>
            <h1>Loading...</h1>
        </div>
    )
}

if(error){
    return(
        <div>
            <h1>Error: {error.message}</h1>
        </div>
    )
}

if(data){
    return(
        <div>
            <header>
            <h1>API Fetching</h1>
            </header>
            <ul className="card-demo">
                <li className="pokemon-card">
                    <figure> 
                        <img src={data.sprites.other.dream_world.front_default} alt={data.name} />
                    </figure>
                    <h2>{data.name}</h2>
                    <p>Height: {data.height}</p>
                    <p>Weight: {data.weight}</p>
                </li>
            </ul>
        </div>
    )
}
}

