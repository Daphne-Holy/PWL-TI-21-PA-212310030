import React, { useEffect, useRef, useState, useMemo } from "react";
import { ButtonPrimary, ButtonSecondary } from "./ButtonUI";
import ChatBody from "./ChatBody";
import moment from "moment";
import EmptyChat from "./EmptyChat";
import { ButtonSearch } from "../../Components/ButtonUI";
// import { Messegers } from "../../Constantas/DataChat";

export default function MessengerUI({ selectedChat, profile, selectedUser }) {
  const StylesMessager = {
    chatBox: {
      minHeight: "200px",
      maxHeight: "45vh",
      overflowY: "auto",
    },
    dateStyle: {
      textAlign: "center",
      margin: "10px 0",
      color: "#999",
      fontWeight: "bold",
    },
  };

  const [writeChat, setWriteChat] = useState("");
  const [myChat, setMyChat] = useState([]);

  const [search, setSearch] = useState("");

  const ResultMessageData = useMemo(() => {
    let computedData = myChat.map((msg) => ({
      ...msg,
      date_fmt: moment(msg.date).format("YYYY-MM-DD"),
      isOutgoing: msg.from_id === profile.id,
    }));
    if (search) {
      computedData = computedData.filter((listData) => {
        return Object.keys(listData).some((key) =>
          listData[key].toString().toLowerCase().includes(search)
        );
      });
    }
    return computedData;
  }, [myChat, profile.id, search]);

  const endOfMessagesRef = useRef(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setMyChat(selectedChat);
    scrollToBottom();
  }, [selectedChat]);

  const HandlerSendChat = (e) => {
    e.preventDefault();
    const newMessage = {
      id: myChat.length + 1,
      message: writeChat,
      from: "Febry",
      date: moment().format("YYYY-MM-DD HH:mm:ss"),
    };

    setMyChat([...myChat, newMessage]);
    setWriteChat("");
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title align-items-start flex-column">
          <span className="fw-bold mb-2 text-gray-900">Chats with {selectedUser.name}</span>
        </h3>
        <div className="card-toolbar align-items-right d-flex">
          <ButtonSearch setSearch={setSearch}>
            <span className="svg-icon svg-icon-1 svg-icon-gray-400 me1">
              <i class="bi bi-search"></i>
            </span>
          </ButtonSearch>
        </div>
      </div>
      <div className="card-body p-0">
        {ResultMessageData.length > 0 ? (
          <>
            <div
              className="chat-message px-2 bg-light-primary"
              style={StylesMessager.chatBox}
            >
              {myChat.map((message, index) => {
                const currentDate = moment(message.date).format("YYYY-MM-DD");
                const previousDate =
                  index > 0
                    ? moment(myChat[index - 1].date).format("YYYY-MM-DD")
                    : null;

                if (previousDate !== currentDate) {
                  const todayDate = moment().format("YYYY-MM-DD");
                  const displayDate =
                    currentDate === todayDate
                      ? "Today"
                      : moment(message.date).format("MMMM DD, YYYY"); //Buat date, menunjukkan Today

                  return (
                    <div key={index}>
                      <div style={StylesMessager.dateStyle}>{displayDate}</div>
                      <ChatBody data={[message]} />
                    </div>
                  );
                } else {
                  return <ChatBody key={index} data={[message]} />;
                }
              })}
              <div ref={endOfMessagesRef} />
            </div>
            <div className="chat-send bg-light p-3">
              <form
                method="post"
                autoComplete="off"
                onSubmit={(e) => HandlerSendChat(e)}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <input
                    type="text"
                    className="form-control me-2"
                    autoFocus={true}
                    value={writeChat}
                    onChange={(e) => setWriteChat(e.target.value)}
                  />
                  <ButtonPrimary
                    items={{
                      title: "Send",
                      btn_class: "btn-icon btn-success",
                      type: "submit",
                    }}
                  >
                    <i className="bi bi-send"></i>
                  </ButtonPrimary>
                </div>
              </form>
            </div>
          </>
        ) : (
          <EmptyChat />
        )}
      </div>
    </div>
  );
}
