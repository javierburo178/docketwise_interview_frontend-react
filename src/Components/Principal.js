import { useEffect, useState } from "react";
import { callApi } from "../Api/api";

const Principal = () => {
  const [data, setData] = useState("");
  const fetchMoviesData = async () => {
    const { message } = await callApi("/test");
    setData(message);
  };

  useEffect(() => {
    fetchMoviesData();
  }, []);
  return <div>{data}</div>;
};

export default Principal;
