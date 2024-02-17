import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <div>
        <form  className='flex items-center gap-2 mt-2'>
            <input type="text" placeholder='Search...' className='input input-bordered rounded-full bg-gray-500 border-gray-600 text-white'/>
            <button type='submit' className='btn btn-circle bg-blue-500 text-white'>
                <IoSearchSharp className='w-6 h-6 outline-none' />
            </button>
        </form>
    </div>
    
  )
}

export default SearchInput