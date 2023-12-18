import React, { useEffect, useState } from "react";
import { db } from "../Config/firebase";
import { collection, getDocs } from "firebase/firestore";

const useGetData = (collectionName) => {
  const [data, setData] = useState([]);
  const collectionData = collection(db, collectionName);
  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collectionData);
      setData(data.docs.map(doc=> ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, [collectionData]);

  return {data};
};

export default useGetData;
