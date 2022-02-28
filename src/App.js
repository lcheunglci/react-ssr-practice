import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About } from "./page/About";
import { Articles } from "./page/Articles";
import { Home } from "./page/Home";

const App = () => {
  return (
    <BrowserRouter>
      <h1>Server-side rendering example</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="about" element={<About />} />
        <Route path="articles" element={<Articles />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
