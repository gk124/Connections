import React from 'react'
import {BiLogOut} from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'
import { useAuthContext } from '../../context/AuthContext';

const LogoutButton = () => {
  const {loading,logout}=useLogout();
  const {authUser}=useAuthContext();
  return (
    <div className='mt-auto py-5 px-2 bg-slate-800 rounded-lg'>
    {!loading ? (
        <div className='flex'>
        <BiLogOut className="w-7 h-7 text-white cursor-pointer" onClick={logout}/>
        <span className='px-4 font-extrabold text-slate-300 font-serif hidden sm:block'>{authUser.fullName}</span>
        </div>
        )
        :
        (<span className='loading loading-spinner'></span>)}
    </div>
  )
}

export default LogoutButton