"use client"
import { createContext, useEffect, useState } from "react";
import AddWork from "./components/AddWork";
import MyNavbar from "./components/MyNavbar";
import Works from "./components/Works";
import axios from "axios";

export const WorksContext = createContext();

export default function Home() {
  const [works, setWorks] = useState([]);
  const fetchWorks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/works');
      setWorks(response.data);
    } catch (error) {
      console.error("Error fetching works:", error);
    }
  };
  useEffect(() => {
    fetchWorks();
  }, []);
  return (
    <div>
      <WorksContext.Provider value={{ works, setWorks, fetchWorks }}>
        <MyNavbar />
        <AddWork />
        <Works />
      </WorksContext.Provider>
    </div>
  );
}
