import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
import Destination from "./pages/Destination/Destination";
import Dashboard from "./pages/Deshboard/Dashboard";
import UserProfile from "./pages/UserProfile/UserProfile";
import ContactUs from "./pages/Contact/ContactUs";

// import global components
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
