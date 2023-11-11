import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";


export default function SignUp() {
  const [formData,setFormData] = useState({});
  const [error,setError] = useState(null);//set error to null in the start
  const [loading,setLoading] = useState(false);// set loading before clicking on signup to false
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      setLoading(true);
      const res = await fetch('/api/auth/signin',
      {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if(data.success === false){
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null); //here also if everything is fine set error to null
      navigate('/')
      console.log(data);
    } 
    catch(error){
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center from semibold my-7'>Sign In</h1>

      <form onSubmit={handleSubmit} action="" className='flex flex-col gap-4'>
        <input type="email" placeholder='email'
        className = 'border p-3 rounded-lg' id='email'
         onChange={handleChange}/>
        <input type="password" placeholder='password'
        className = 'border p-3 rounded-lg' id='password'
        onChange={handleChange} />

        <button disabled={loading} className='bg-slate-700 text-white p-3 
        rounded-lg uppercase hover:opacity-95
        disabled:opacity-80'> {loading ? 'Loading..' : 'Sign in'} 
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Don't have an account?</p>
        <Link to='/sign-up'>
        <span className='text-blue-700 '>Sign up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
