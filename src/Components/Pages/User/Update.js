import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    const {pk} = useParams()

    const { register, handleSubmit, setValue } = useForm()

    async function fetchUser(){
        let result = await axios.get(`http://127.0.0.1:8000/person/${pk}/`)
        // console.log(result.data)
        setValue('fname', result.data.fname)
        setValue('lname', result.data.lname)
        setValue('age', result.data.age)
    }

    useEffect(()=>{fetchUser()}, [])

    const navi = useNavigate()

    function saveData(data){
        axios.put(`http://127.0.0.1:8000/person/${pk}/`, data)
        navi('/user/show')
    }

  return (
    <>
    <form className='container' onSubmit={handleSubmit(saveData)}  >
        <label htmlFor='fn'>Enter First Name:</label>
        <input type='text' id='fn' className='form-control' {...register('fname')} />
        <br />
        <label htmlFor='ln'>Enter Last Name:</label>
        <input type='text' id='ln' className='form-control' {...register('lname')} />
        <br />
        <label htmlFor='age'>Enter Age:</label>
        <input type='text' id='age' className='form-control' {...register('age')} />
        <br />
        <input type='submit' className='btn btn-outline-success' />
    </form>
    </>
  )
}

export default Update