import { createContext, useEffect } from "react";
import socketIO from "socket.io-client";

export const SocketContext = createContext(null); // 그릇생성을 위한 변수
const server = "http://localhost:8000/";
// const ws = socketIO(server); // 소켓 서버 연결

export const SocketContextProvider = ({ children }) => {
  return (
    <></>
    // <SocketContext.Provider value={{ ws }}>{children}</SocketContext.Provider>
  );
};
