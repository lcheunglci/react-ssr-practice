import React from "react";
import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import { About } from "./page/About";
import { Articles } from "./page/Articles";
import { Home } from "./page/Home";

const BigGreenHeading = styled.h1`
    color: green;
    font-size: 96px;
`;

const App = () => {
  return (
    <>
      <BigGreenHeading>Server-side rendering example</BigGreenHeading>
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
    </>
  )
}

export default App;
