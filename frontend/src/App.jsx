import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import SignUp from "./signup";
import Login from "./Login";
import "./index.css";
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/signUp" />} />
            <Route path="/signUp" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
