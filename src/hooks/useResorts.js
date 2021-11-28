import axios from "axios";
import { useEffect, useState } from "react";

const useResorts = () => {
  const [resorts, setResorts] = useState([]);

  useEffect(() => {
    getResorts();
  }, []);

  const getResorts = () => {
    axios.get("https://gentle-everglades-42923.herokuapp.com/resorts").then((res) => {
      setResorts(res.data);
    });
  };

  return { resorts };
};

export default useResorts;
