import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-start'>
        <div className='chat-imgae avatar'>
            <div className='w-10 rounded-full'>
            <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-green-700` }>Hiii, How are you?</div>
        <div className="chat-footer text-xs flex gap-1 items-center">10:45</div>
    </div>
  )
}

export default Message