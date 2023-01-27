import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  useEffect(  () => {
     const fetchData= async()=>{
      try{
        const res = await axios.get(url);
        setData(res.data);
        setError(false);
        setLoading(false);
      }catch{
        setData([]);
        setError(true);
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);
  return {
    data,
    error,
    loading,
  };
};
export default useFetch;
