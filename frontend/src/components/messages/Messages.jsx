import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton';

const Messages = () => {
  const {loading,messages}=useGetMessages();
  
  const lastmsg=useRef();
  useEffect(()=>{
    setTimeout(()=>{
      lastmsg.current?.scrollIntoView({behavior:'smooth'})
    },100)
  },[messages])


  return (
    <div className='px-4 flex-1 overflow-auto'>
        {loading && [...Array(3)].map((_, idx)=> <MessageSkeleton key={idx}/>)}
        {messages.length > 0 ? (messages.map((message)=>(
          <div key={message._id} ref={lastmsg}>
            <Message message={message}/>
          </div>
        ))):(<p className='text-center'>Send a message to start the conversation</p>)}

    </div>
  )
}

export default Messages