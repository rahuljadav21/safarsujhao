import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
import Destination from "./pages/Destination/Destination";
import Dashboard from "./pages/Deshboard/Dashboard";
import UserProfile from "./pages/UserProfile/UserProfile";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/destination" element={<Destination/>}/>
        <Route path="/profile" element={<UserProfile/>}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
