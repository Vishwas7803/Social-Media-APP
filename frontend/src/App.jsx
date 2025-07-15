// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout     from "./components/Layout";
import Home       from "./pages/Home";
import Login      from "./pages/Login";
import Register   from "./pages/Register";
import CreatePost from "./pages/CreatePost";
import Notifications from "./pages/Notification";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Everything under Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<CreatePost />} />
           <Route path="Notifications" element={<Notifications />} />
        </Route>

        {/* Stand‑alone auth routes (no Layout) */}
        <Route path="/login"    element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
