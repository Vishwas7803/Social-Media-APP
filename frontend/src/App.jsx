// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout     from "./components/Layout";
import Home       from "./pages/Home";
import Login      from "./pages/Login";
import Register   from "./pages/Register";
import CreatePost from "./pages/CreatePost";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Everything under Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />          {/* /            */}
          <Route path="create" element={<CreatePost />} /> {/* /create     */}
        </Route>

        {/* Stand‑alone auth routes (no Layout) */}
        <Route path="/login"    element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
