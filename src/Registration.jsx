import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './fz.css'

function Registration() {

  const navigate = useNavigate()

  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {

    const users = JSON.parse(localStorage.getItem("users")) || []

    users.push(data)

    localStorage.setItem("users", JSON.stringify(users))

    alert("Registration Successful")

    reset()

    navigate("/login")
  }

  return (

    <div className="register-container">

      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          {...register("name",{required:true})}
        />

        <input
          type="email"
          placeholder="Email"
          {...register("email",{required:true})}
        />

        <input
          type="password"
          placeholder="Password"
          {...register("password",{required:true})}
        />

        <input
          type="number"
          placeholder="Mobile Number"
          {...register("mobileno",{required:true})}
        />

        <button type="submit">Register</button>

        <p className="login-link">
          Already have an account? 
          <span onClick={() => navigate("/login")}> Login</span>
        </p>

      </form>

    </div>
  )
}

export default Registration;