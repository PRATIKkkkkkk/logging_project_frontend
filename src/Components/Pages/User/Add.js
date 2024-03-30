import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Add() {

    const {register, handleSubmit} = useForm()

    const navi = useNavigate()

    function saveData(data){
        axios.post('http://127.0.0.1:8000/person/', data)
        navi('/user/show')
    }

  return (
    <>
    <form className='container' onSubmit={handleSubmit(saveData)} >
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

export default Add