import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center w-95 mx-auto">
      <div className="w-full p-7 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-4xl font-semibold text-center text-gray-300">
          <span className="text-blue-700">TIME_TO_CONNECT</span>
        </h1>
        <h1 className="text-3xl font-semibold text-center text-gray-200">
          Sign-Up
        </h1>

        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-slate-50">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="full name"
              className="w-full input input-bordered h-10"
              name="fullName"
              id="fullName"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-slate-50">
                UserName
              </span>
            </label>
            <input
              type="text"
              placeholder="username"
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
              placeholder="password"
              className="w-full input input-bordered h-10"
              name="password"
              id="password"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-slate-50">
                Confirm Password
              </span>
            </label>
            <input
              type="text"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10"
              name="password"
              id="password"
            />
          </div>

          <GenderCheckbox />

          <a
            href="#"
            className="text-slate-50 text-sm hover:underline hover:text-blue-500 mt-2 inline-block"
          >
            Already have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2">Sign-Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
