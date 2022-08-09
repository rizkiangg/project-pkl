import Home from "./pages/home/Home";
import TopBar from "./components/top_bar/TopBar";
import Single from "./pages/single/Single";
import write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Header from "./components/header/Header";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Write from "./pages/write/Write";

function App() {
  const user = false;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={user ? <Home /> : <Login />} />
      <Route path="/register" element={user ? <Home /> : <Register />} />
      <Route path="/settings" element={user ? <Settings /> : <Register />} />
      <Route path="/post/:postId" element={<Single />} />
      <Route path="/write" element={user ? <Write /> : <Register />} />
    </Routes>
  );
}

export default App;
