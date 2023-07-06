import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

export default function Home() {
  return (
      <div className="app">
        <MainContent />
        <Footer />
      </div>
  )
}
