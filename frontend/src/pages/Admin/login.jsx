import React, { useState } from 'react'
import axios from 'axios'
import {message} from 'antd'
import {useDispatch } from 'react-redux'
import { HideLoading, ShowLoading } from '../../redux/rootSlice';
function Login() {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const dispatch = useDispatch();
  const login = async () =>{
    try {
      dispatch(ShowLoading());
      const response =await axios.post('/api/portfolio/admin-login', user);
      dispatch(HideLoading());
      if(response.data.success){
        message.success(response.data.message);
        localStorage.setItem('token',JSON.stringify(response.data));
        window.location.href="/admin";
      }else{
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
      dispatch(HideLoading());
    }
  };
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-96 flex gap-5 p-5 shadow border border-gray-500 flex-col'>
        <h1>Nabil  - Admin Login</h1>
        <hr />
        <input placeholder='Username' type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
        <input placeholder='Password' type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
        <button className='bg-primary text-white p-2' onClick={login}>Login</button>
      </div>
    </div>
  )
}

export default Login