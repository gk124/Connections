import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from "./context/AuthContext";


function App() {
  const {authUser}=useAuthContext();
  return (
    <div className="flex flex-col p-2 h-screen items-center justify-center relative">
        <h1 className="text-5xl lg:font-semibold md:font-bold sm:font-normal text-black italic">
            CONNECTIONS
        </h1>
      <Routes>
        <Route path='/' element={authUser? <Home/>:<Navigate to={"/login"} />} />
        <Route path='/login' element={authUser? <Navigate to="/" />:<Login/>} />
        <Route path='/signup' element={authUser? <Navigate to="/" />:<SignUp/>} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
