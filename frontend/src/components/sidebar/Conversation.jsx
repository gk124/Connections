import React from "react";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-gray-500 hover:text-gray-100 text-gray-200 rounded px-2 py-2 cursor-pointer ${
          isSelected ? "bg-gray-500" : ""
        }`
        }
        onClick={()=>setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="User avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-betweeen">
            <p className="font-bold text-slate-50">{conversation.fullName}</p>
            <span className="text-xl ml-auto">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider py-0 my-0 h-1"></div>}
    </>
  );
};

export default Conversation;