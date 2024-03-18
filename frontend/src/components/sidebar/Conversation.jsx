import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id) ? "online" : "";

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-gray-500 hover:text-gray-100 text-gray-200 rounded px-2 py-2 cursor-pointer ${
          isSelected ? "bg-gray-500" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="flex flex-col w-full sm:flex-row">
          <div className={`avatar ${isOnline}`}>
            <div className="w-10 rounded-full">
              <img src={conversation.profilePic} alt="User avatar" />
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
              <p className="sm:font-bold text-slate-50 items-center font-thin overflow-hidden">
                {conversation.fullName}
              </p>
              <span className="text-xl ml-auto sm:ml-0 sm:mr-3 hidden sm:block sm:justify-end">
                {emoji}
              </span>
            </div>
            {/* <p className="font-bold text-slate-50 hidden sm:block">{conversation.fullName}</p> */}
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider py-0 my-0 h-1"></div>}
    </>
  );
};

export default Conversation;
