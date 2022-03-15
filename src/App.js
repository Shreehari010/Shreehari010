import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Logo from "./Components/logo/index";
import Header from './Components/Header/Header';
import light from "./Theme/light";
import Dark from "./Theme/Dark";
import Container from "./Theme/Component/container"
import { ThemeProvider } from "styled-components";
import { useSelector } from 'react-redux';
import HomeContent from './Components/HomePage/HomePage1/HomeContent';
import ScrollTop from './Components/ScrollTop/ScrollTop';
import TermsAndCondition from './Components/TermsAndCondition/TermsAndCondition';
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy"


function App() {

  const config = useSelector(state => state.NavTopReducer)
  console.log("dark mode presemt",config.darkMode)
  return (
    <ThemeProvider theme={config.darkMode === "light" ? Dark : light}>
    <Container>
    <BrowserRouter>
    <Header/>
      <Routes>
           
            <Route exact path="/" element={<HomeContent/>}/>
            <Route  path="/TermsAndCondition"  element={<TermsAndCondition/>}/>
            <Route  path="/PrivacyPolicy"  element={<PrivacyPolicy/>}/>
            <Route  path="/logo"  element={<Logo/>}/>
      </Routes>
    </BrowserRouter>
    <ScrollTop/>
    </Container>
</ThemeProvider>
  );
}

export default App;
