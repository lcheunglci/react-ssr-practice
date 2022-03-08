import React, {lazy, Suspense} from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

const BigGreenHeading = styled.h1`
    color: green;
    font-size: 96px;
`;


const About = lazy(() => import("./page/About"));
const Articles = lazy(()=> import("./page/Articles"));
const Home = lazy(() => import("./page/Home"));



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
      <Suspense fallback={<p>Loading..</p>}>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="about" element={<About />} />
          <Route path="articles" element={<Articles />} />
        </Routes>

      </Suspense>
    </>
  )
}

export default App;
