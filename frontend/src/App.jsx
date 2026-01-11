import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./signup";
import Login from "./Login";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/signUp" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
