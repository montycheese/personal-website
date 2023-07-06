import React from "react";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Script from 'next/script';


export default function Home() {
  return (
      <div className="app">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-GXBJ5T0SDT" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-GXBJ5T0SDT');
        `}
      </Script>
        <MainContent />
        <Footer />
      </div>
  )
}
