import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Writing from "./pages/Writing";
import Post from "./pages/Post";
import Projects from "./pages/Projects";
import BuilderLog from "./pages/BuilderLog";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/writing/:slug" element={<Post />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/log" element={<BuilderLog />} />
      </Routes>
    </BrowserRouter>
  );
}

