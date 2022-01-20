import { useEffect, useState } from "react";
import { callApi } from "../Api/api";
import RootFolder from "./RootFolder";

const Principal = () => {
  const [data, setData] = useState("");
  const fetchMoviesData = async () => {
    const response = await callApi("/document_stores");
    setData(response);
  };

  useEffect(() => {
    fetchMoviesData();
  }, []);
  return <div>{data && <RootFolder data={data}></RootFolder>}</div>;
};

export default Principal;
