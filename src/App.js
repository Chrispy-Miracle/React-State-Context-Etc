import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Navigation from './components/Navigation';
import Layout from './pages/Layout';
import MainContent from './pages/MainContent';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import PageFour from './pages/PageFour';
import './App.css';
// import { useEffect, useRef } from 'react';

function App() {
  return (
    <BrowserRouter>
      {/* <div className="App">
        <Navigation />
        <Header renderCount={renderCount} /> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element ={<MainContent />} />
            <Route path="page2" element ={<PageTwo />} />
            <Route path="page3" element ={<PageThree />} />
            <Route path="page4" element ={<PageFour />} />
          </Route>
        </Routes>
      {/* </div> */}
    </BrowserRouter>

  );
}

export default App;
