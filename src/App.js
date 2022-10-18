import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Footer,
  // Blog,
  // Possibility,
  // Features,
  // WhatGPT3,
  // Header,
} from './containers';
// import { CTA, Brand, Navbar  } from './components';
// import { CTA, Brand, Navbar  } from './components';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Linux from './pages/Linux';
import Contact from './pages/Contact';
import Network from './pages/Network';
import Exploit from './pages/Exploit';
import WebHack from './pages/WebHack';
import WifiHack from './pages/WifiHack';
import Python from './pages/Python';
import Recon from './pages/Recon';
// import NoPage from "./pages/NoPage";
import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Linux" element={<Linux />} />
            <Route path="contact" element={<Contact />} />
            <Route path="recon" element={<Recon />} />
            <Route path="network" element={<Network />} />
            <Route path="exploit" element={<Exploit />} />
            <Route path="webhack" element={<WebHack />} />
            <Route path="wifihack" element={<WifiHack />} />
            <Route path="python" element={<Python />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Navbar />
      <Header /> */}
    </div>
    {/*
    <WhatGPT3 />
    <Blog />
    <Features />
    <Possibility />
    <Blog />
    <CTA />
    <WhatGPT3 />
    */}
    <Footer />
  </div>
);

export default App;
