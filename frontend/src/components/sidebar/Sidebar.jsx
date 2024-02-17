import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-200 p-4 flex flex-col'>
        <SearchInput />
        {/* divider */}
        <div className='divider px-3'></div>
        <Conversations />
        <div className='px-3'></div>
        <LogoutButton />
    </div>
  )
}

export default Sidebar