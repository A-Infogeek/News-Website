import './App.css';

import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';

const App =()=> {
  const apiKey=process.env.REACT_APP_NEWS_API;
  const [progress, setProgress]= useState(0);

    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <LoadingBar color="#f11946" progress={progress}/>
          <Routes>
          <Route path="/" element={<News setProgress={setProgress} apikey={apiKey} key="general" pageSize={5} country="in" category="general" />} />
          <Route path="/business" element={<News setProgress={setProgress} apikey={apiKey} key="business" pageSize={5} country="in" category="business" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} apikey={apiKey} key="entertainment" pageSize={5} country="in" category="entertainment" />} />
          <Route path="/health" element={<News setProgress={setProgress} apikey={apiKey} key="health" pageSize={5} country="in" category="health" />} />
          <Route path="/science" element={<News setProgress={setProgress} apikey={apiKey} key="science" pageSize={5} country="in" category="science" />} />
          <Route path="/sports" element={<News setProgress={setProgress} apikey={apiKey} key="sports" pageSize={5} country="in" category="sports" />} />
          <Route path="/technology" element={<News setProgress={setProgress} apikey={apiKey} key="technology" pageSize={5} country="in" category="technology" />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
}
export default App

