import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Show() {
    const [user, setUser] = useState([])

    async function fetchUser(){
        let result = await axios.get('http://127.0.0.1:8000/person/')
        console.log(result.data)
        setUser(result.data)
    }

    useEffect(()=>{fetchUser()}, [])

  return (
    <div className='container'>
        <div className='row'>
            {
                user.map(obj=>{
                    return(
                        <div className='col-5 bg bg-dark text-white me-3 mb-3 rounded'>
                            <h2>{obj.fname}</h2>
                            <h2>{obj.lname}</h2>
                            <h2>{obj.age}</h2>
                            <NavLink to={`/user/update/${obj.id}`} className='btn btn-outline-warning mb-3 me-3'>Update</NavLink>
                            <NavLink to={`/user/delete/${obj.id}`} className='btn btn-outline-danger mb-3'>Delete</NavLink>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Show