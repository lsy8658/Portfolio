import React, { useEffect } from "react";
import "./board.scss";
import { useQuery } from "@tanstack/react-query";
import { boardApi } from "../../api/boardApi";
import IsLoading from "../../components/loading/IsLoading";
export default function Board() {
  const { getBoardApi } = boardApi();

  const { data, isLoading } = useQuery({
    queryKey: ["board"],
    queryFn: getBoardApi,
  });

  if (isLoading) {
    return <IsLoading />;
  }

  if (data) {
    console.log(data);
  }

  return <div className="section">Board</div>;
}
