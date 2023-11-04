import { useContext, useEffect, useState } from "react";

import { SocketContext } from "../../context/SocketContextProvider";
import { useNavigate, useParams } from "react-router-dom";
export default function ChatTest() {
  const [roomId, setRoomId] = useState("");
  const [id, setId] = useState("");
  const [msg, setMsg] = useState("");

  const { ws } = useContext(SocketContext);

  const joinRoom = () => {
    if (roomId === "" && id === "") return;
    ws.emit("join_room", {
      id,
      roomId,
    });
  };

  const sendMsg = () => {
    ws.emit("send_message", { roomId, msg });
  };

  const leaveRoom = () => {
    setId("");
    setRoomId("");
    ws.emit("leave_room", { roomId, id });
  };
  useEffect(() => {
    ws.on("join_room", (data) => {
      console.log("effect1==>", data);
    });
    ws.on("send_message", (data) => {
      console.log("effect2==>", data);
    });

    ws.on("leave_room", (data) => {
      console.log("effect3==>", data);
    });
  }, [ws]);

  return (
    <div>
      <label htmlFor="">Room ID</label>
      <input
        type="text"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <label htmlFor="">User Id</label>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={joinRoom}>join Room</button>
      <div>
        <label htmlFor="">massage</label>
        <input type="text" onChange={(e) => setMsg(e.target.value)} />
        <button onClick={sendMsg}>massage input</button>
      </div>
      <div>
        <button onClick={leaveRoom}>방나가기</button>
      </div>
    </div>
  );
}
// const data = useParams();
// const [desc, setDesc] = useState("");
// const navigate = useNavigate();
