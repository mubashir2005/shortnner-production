import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./Components/Navbar";
import Main from "./Components/Main";
import Customer from "./Components/Customer";
import Brand from "./Components/Brand";
import Complements from "./Components/Complements";
import Footer from "./Components/Footer";
import Democracy from "./Components/Democracy";


export default function App() {
  return (
      <div className="App">
          <img src={'https://shortnner.tech/9EmJ7KUB8'}/>
          <NavigationBar/>
          <Main/>
          <Democracy/>
          <Customer />
          <Brand />
          <Complements />
          <Footer />

    </div>
  )
}
