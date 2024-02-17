import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-gray-500 hover:text-gray-100 text-gray-200 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="User avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-betweeen">
                <p className="font-bold text-slate-50">Gunjan Kumar</p>
                <span className="text-xl px-2">😈</span>
            </div>
        </div>
      </div>
      <div className='divider py-0 my-0 h-1'></div>
    </>
  );
};

export default Conversation;
