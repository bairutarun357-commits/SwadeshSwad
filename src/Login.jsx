import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import './Fz.css'

function Login() {

  const { register, handleSubmit, reset } = useForm();
  const nav = useNavigate();

  const onSubmit = (data) => {

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validusers = users.find(user =>
      user.email === data.email &&
      user.password === data.password
    );

    if(validusers){
      alert("Login Successful");

      localStorage.setItem("loggedInUser", JSON.stringify(validusers));

      nav('/');
    }
    else{
      alert("Login Failed");
    }

    reset();
  };

  return (
    <div className="login-container">

      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>

        <h2>Welcome Back</h2>
        <p>Login to your account</p>

        <input
          type="text"
          placeholder="Email"
          {...register("email",{required:true})}
        />

        <input
          type="password"
          placeholder="Password"
          {...register("password",{required:true})}
        />

        <button type="submit">Login</button>

        {/* Register Link */}
        <p className="register-text">
          New user? <Link to="/register">Create an account</Link>
        </p>

      </form>

    </div>
  )
}

export default Login