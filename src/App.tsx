import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Writing from "./pages/Writing";
import Post from "./pages/Post";
import Projects from "./pages/Projects";
import BuilderLog from "./pages/BuilderLog";
import InteractiveDemo from "./pages/InteractiveDemo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/writing' element={<Writing />} />
        <Route path='/writing/:slug' element={<Post />} />
        <Route path='/interactive-demo' element={<InteractiveDemo />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/log' element={<BuilderLog />} />
      </Routes>
    </BrowserRouter>
  );
}
