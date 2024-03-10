import {React, useState} from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [userName,setUserName]=useState('');
  const [password,setPassword]=useState('');

  const {loading,login}= useLogin();

  const handleSubmit=async (e)=>{
      e.preventDefault();
      await login({userName,password});
  }

  return (
    <div className="flex flex-col items-center mt-4 w-auto mx-auto">
      <div className="w-full p-7 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-slate-200">
          Login
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-slate-50">
                UserName
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              name="userName"
              id="userName"
              value={userName}
              onChange={(e)=> setUserName(e.target.value)}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-slate-50">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              name="password"
              id="password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="text-slate-50 text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Don't have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 " disbaled={loading}>
              {loading?<span className='loading loading-dots'></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
