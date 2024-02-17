import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center w-95 mx-auto">
      <div className="w-full p-7 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-4xl font-semibold text-center text-gray-300">
          <span className="text-blue-700">TIME_TO_CONNECT</span>
        </h1>
        <h1 className="text-3xl font-semibold text-center text-slate-200">
          Login
        </h1>

        <form action="">
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
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-slate-50">
                Password
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              name="password"
              id="password"
            />
          </div>
          <a
            href="#"
            className="text-slate-50 text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Don't have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
