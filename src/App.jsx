import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Articles from "./Articles";
import SingleArticle from "./SingleArticle";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/User";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <>
      <UserProvider>
        <Header></Header>
        <div id="container">
        <Nav></Nav>


        <div className="main">
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/articles/topic/:topic" element={<Articles />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        </div>
        </div>
      </UserProvider>
    </>
  );
}

export default App;
