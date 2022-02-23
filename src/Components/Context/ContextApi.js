import React, { useState, createContext } from "react";

export const StuContext = createContext();

export const ContextApiProvider = (props) => {
  const [stuData, setStuData] = useState([
    {
      id: "1",
      name: "ManiKumar",
      age: 22,
      course: "MERN",
      batch: "September",
    },
    {
      id: "2",
      name: "VamshiKalyan",
      age: 28,
      course: "MERN",
      batch: "November",
    },
    {
      id: "3",
      name: "Vaibhav",
      age: 25,
      course: "MERN",
      batch: "July",
    },
    {
      id: "4",
      name: "AzizKhan",
      age: 26,
      course: "MERN",
      batch: "December",
    },
  ]);
  return (
    <StuContext.Provider value={[stuData, setStuData]}>
      {props.children}
    </StuContext.Provider>
  );
};
