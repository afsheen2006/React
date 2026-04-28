import './registration.css'
import { useState } from 'react'
export const Registration = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""    
    })
    const {username, email, password} = formData

    const handleinput=(e)=>{
        const {name, value} = e.target
        setFormData((prev)=>({...prev, [name]: value}))
    }
 
    const handlesubmit=(e)=>{
        e.preventDefault()
        const formdata = {
            username,
            email,
            password,
        };
        console.log(formdata) 
    }

    const ssubmit=()=>{
        setFormData({
            username: "",
            email: "",
            password: ""
        })
    }

    return (
        <>
            <h1>Registration</h1>
            <form className="registration-form display-flex" onSubmit={handlesubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="Username" required name="username" value={username} onChange={handleinput} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email" required name="email" value={email} onChange={handleinput} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password" required name="password" value={password} onChange={handleinput} />
                <button type="submit" onClick={ssubmit}>Register</button>
            </form>
        </>
    )
}
