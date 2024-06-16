import React, { useEffect, useRef, useState, useMemo } from "react";
import { ButtonPrimary, ButtonSecondary } from "./ButtonUI";
import ChatBody from "./ChatBody";
import moment from "moment";
import EmptyChat from "./EmptyChat";
import { ButtonSearch } from "../../Components/ButtonUI";
import { Messegers } from "../../Constantas/DataChat";
import axios from "axios";
import Sentiment from "sentiment";

export default function MessengerUI({ profile, selectedUser, setChat, data }) {
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
  const [selectedChat, setSelectedChat] = useState({
    loading: false,
    data: [],
    message: "",
  });

  const [myChat, setMyChat] = useState([]);

  const ReloadData = (user_id) => {
    const param = { from_id: profile.id, to_user_id: user_id };
    const GET_SELECTED_CHAT = (param, setSelectedChat, setMyChat);
  };

  const endOfMessagesRef = useRef(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sentiment = new Sentiment();

  const [search, setSearch] = useState("");
  const ResultMessageData = useMemo(() => {
    let computedData = myChat.map((msg) => {
      const result = sentiment.analyze(msg.messages);
      let sentimentLabel = "Netral";
      if (result.score > 0) sentimentLabel = "Positif";
      else if (result.score < 0) sentimentLabel = "Negatif";

      return {
        ...msg,
        sentiment: sentimentLabel,
        date_fmt: moment(msg.date).format("YYYY-MM-DD"),
        isOutgoing: msg.from_id === profile.id,
      };
    });

    if (search) {
      computedData = computedData.filter((listData) => {
        return Object.keys(listData).some((key) =>
          listData[key].toString().toLowerCase().includes(search)
        );
      });
    }
    return computedData;
  }, [myChat, profile.id, search]);

  useEffect(() => {
    ReloadData(selectedUser.id);
  }, [selectedUser.id]);

  const [writeChat, setWriteChat] = useState("");
  const [chatMsg, setChatMsg] = useState("");

  const [sendChat, setSendChat] = useState({
    loading: false,
    data: [],
    message: "",
  });

  const HandlerSendChat = (e) => {
    e.preventDefault();
    if (writeChat.trim()) {
      const msg = writeChat.toLowerCase();
      const paramPost = {
        from_id: profile.id,
        message: msg,
        to_user_id: selectedUser.id,
      };
      sendChat(paramPost, setSendChat);
      setWriteChat("");
      setChatMsg("");
      scrollToBottom(() => {
        ReloadData(selectedUser.id);
      }, 500);
    } else {
      setChatMsg("Please fill up the field");
    }
  };

  const GET_SELECTED_CHAT = (param) => {
    setChat({ loading: true, data: [], message: "" });
    setMyChat("");

    let data = JSON.stringify({
      from_id: data.id,
      to_user_id: data.id,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3003/api/msg/fetch-all",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        const result = response.data.data;
        if (result) {
          setMyChat(result);
          setChat({ loading: false, data: result, message: "" });
        } else {
          setMyChat("");
          setChat({
            loading: false,
            data: [],
            message:
              "unable to establish a connection to the server. please try again later",
          });
        }
      })
      .catch((error) => {
        setMyChat("");
        setChat({ loading: false, data: [], message: error.message });
      });
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title align-items-start flex-column">
          <span className="fw-bold mb-2 text-gray-900">
            Chats with {selectedUser.fullname}
          </span>
        </h3>
        <form className="search align-items-right d-flex">
          <ButtonSearch
            setSearch={setSearch}
            onChange={(e) => setSearch(e.target.value)}
          >
            <span className="svg-icon svg-icon-1 svg-icon-gray-400 me-1">
              <i class="bi bi-search"></i>
            </span>
          </ButtonSearch>
        </form>
      </div>
      <div className="card-body p-0">
        {ResultMessageData.length > 0 ? (
          <>
            <div
              className="chat-message px-2 bg-light-primary"
              style={StylesMessager.chatBox}
            >
              {setChat.map((message, index) => {
                const currentDate = moment(message.date).format("YYYY-MM-DD");
                const previousDate =
                  index > 0
                    ? moment(setChat[index - 1].date).format("YYYY-MM-DD")
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
                <span className="text-danger">{chatMsg}</span>
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
