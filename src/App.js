import React from "react";
import "./style.css";
import Navigation from "./Navigation"
import MainPage from "./MainPage"
import Personalized from "./Personalized"
import Content from "./Content"
import Footer from "./Footer"
export default function App() {
  return (
    <div>
      <Navigation/>
      <MainPage />
      <Content />
      <Personalized />
      <Footer/>
    </div>
  );
}
