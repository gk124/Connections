import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();

  const lastmsg = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastmsg.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-y-hidden">
      <div className="overflow-y-auto w-full" style={{ maxHeight: "400px", }}>
        {" "}
        {/* Set maxHeight according to your requirement */}
        {loading &&
          [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
        {!loading && messages.length > 0 ? (
          messages.map((message, index) => (
            <div
              key={message._id}
              ref={index === messages.length - 1 ? lastmsg : null}
            >
              <Message message={message} />
            </div>
          ))
        ) : (
          <p className="text-center">
            Send a message to start the conversation
          </p>
        )}
      </div>
    </div>
  );
};

export default Messages;
