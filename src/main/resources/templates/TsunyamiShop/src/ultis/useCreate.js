import { useState, useEffect } from "react";
import axios from "axios";

const useCreate = (url,postData) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  useEffect(() => {
    const createData = async()=>{
      try{
        const res = await axios.post(url,postData);
        setData(res.data);
        setError(false);
        setLoading(false);
      }catch{
        setData([]);
        setError(true);
        setLoading(false);
      }
    }
    createData()
  }, [url]);
  return {
    data,
    error,
    loading,
  };
};
export default useCreate;
