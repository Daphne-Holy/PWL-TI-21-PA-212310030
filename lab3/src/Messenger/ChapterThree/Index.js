import React, { useEffect, useState } from "react";
import { ContactUI } from "./Widgets/Contacts/Index";
import { Messegers, MyFriend } from "./Widgets/Constantas/DataChat";
import MessengerUI from "./Widgets/Messagers/Components/MessengerUI";
import axios from "axios";

export function ChapterThree() {
  const myprofile = { id: "0419029203", name: "Febry" };

  const [selectedUser, setSelectedUser] = useState({});
  const [selectedChat, setSelectedChat] = useState([]);

  const HandlerSelectedChat = (data) => {
    setSelectedUser(data);
    const the_msg = [...Messegers];
    const findChatByUserID = the_msg.find(
      (item) => item.user_id === data.user_id
    );
    if (findChatByUserID) {
      setSelectedChat(findChatByUserID.messages);
    } else {
      setSelectedChat([]);
    }
  };

  const [my_Friend, setmy_Friend] = useState({
    loading: false,
    data: [],
    messages: "",
  });

  useEffect(() => {
    FETCH_CONTACT_CHAT();
  }, []);

  const FETCH_CONTACT_CHAT = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3003/api/user/fetch-all",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        const result = response.data.data;
        if (result) {
          setmy_Friend({ loading: false, data: result, message: "" });
        } else {
          setmy_Friend({
            loading: false,
            data: [],
            message:
              "Unable to establish a connection to the server. Please try again later.",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="chapter-3">
      <h1 className="text-white mb-5">
        Chapter two: The Authentications and Messegers
      </h1>
      <div className="px-3">
        <div className="row">
          <div className="col-2 col-lg-3 col-xxl-4 px-0">
            {my_Friend.loading ? (
              <div>loading</div>
            ) : my_Friend.messages ? (
              <div>{my_Friend.messages}</div>
            ) : Object.values(my_Friend.data).length > 0 ? (
              <ContactUI
                my_account={myprofile}
                friends={my_Friend.data}
                selectedUser={selectedUser}
                HandlerSelectedChat={HandlerSelectedChat}
              />
            ) : (
              ""
            )}
          </div>
          <div className="col-10 col-lg-9 col-xxl-8 px-0">
            {/* (Messeging disini) */}
            {myprofile ? (
              <MessengerUI
                profile={myprofile}
                selectedUser={selectedUser}
                selectedChat={selectedChat}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
