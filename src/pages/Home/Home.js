import React from "react";
import Content from "../../components/Content/Content";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home-content">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default Home;
