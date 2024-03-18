import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-200 px-4 py-1 flex flex-col'>
        <div className='overflow-auto'><SearchInput /></div>
        
        {/* divider */}

        {/* this was the part of the original code */}
        {/* 
        <div className='divider px-3'></div>
        <Conversations /> */}

        
        <div className='px-3'></div>
        <div className='hidden sm:block'><LogoutButton /></div>
        
    </div>
  )
}

export default Sidebar