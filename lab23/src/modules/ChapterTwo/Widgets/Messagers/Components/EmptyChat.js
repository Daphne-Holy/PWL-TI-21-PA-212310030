import React from "react";

const EmptyChat = () => {
  return (
    <div>
      <div className="info text-center">
        <h1>No Conversations</h1>
        <p>You didn't made any conversation yet, please select username</p>
        <span className="badge badge-primary">Start a chat</span>
      </div>
    </div>
  );
};

export default EmptyChat;
