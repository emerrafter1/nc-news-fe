import { useState } from "react";
import "./newApp.css";
import Header from "./Header";
import Nav from "./Nav";
import Articles from "./Articles";
import SingleArticle from "./SingleArticle";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>

      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </>
  );
}

export default App;
