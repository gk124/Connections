import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import {extractTime} from "../../utils/extractTime"

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const pic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBg = fromMe ? "bg-green-700" : "";
  const time=extractTime(message.createdAt);
  const shakeClass= message.shouldShake?"shake":"";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={pic} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBg} ${shakeClass} `}>
        {message.message}
      </div>
      <div className="chat-footer text-xs flex gap-1 items-center pb-1">{time}</div>
    </div>
  );
};

export default Message;
