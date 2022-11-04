import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChannelList, RoomList } from "../../components";

const ChatRoom = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const navigateFn = () => navigate("/channels/@me");
    window.addEventListener("load", navigateFn);
    return () => {
      window.removeEventListener("load", navigateFn);
    };
  }, []);


  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex overflow-hidden bg-[#2f3136] h-screen">
      <ChannelList />
      <RoomList />
    </div>
  );
};

export default ChatRoom;
