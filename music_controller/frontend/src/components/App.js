import React, { Component } from "react";
import {render}  from "react-dom";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Room from "./Room";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<RoomJoinPage />} />
        <Route path="/create" element={<CreateRoomPage />} />
        <Route path="/room/:roomCode" element={<Room/>} />
      </Routes>
    </Router>
  );
}

export default App;


const appDiv = document.getElementById("app");

console.log(appDiv)
render(<App />, appDiv);
