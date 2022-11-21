import React from "react";
import "./index.css";
import { Lobby } from "./pages/Lobby/Lobby";
import { Waiter } from "./pages/Waiter/Waiter";
import { Kitchen } from "./pages/Kitchen/Kitchen";
import { Routes, Route, useLocation} from "react-router-dom";

export const App = () => {

  const location = useLocation();

  console.log(location)
  return (
    <>
      <Routes>
        <Route path="/" element={<Lobby/>} />
        <Route path="Waiter" element={<Waiter />} />
        <Route path="Kitchen" element={<Kitchen />} />
      </Routes>
    </>
  );
};
