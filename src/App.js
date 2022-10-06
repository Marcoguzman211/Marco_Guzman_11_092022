import React from 'react';
import Home from './pages/Home';
import Logement from './pages/Logement';
import NotFound from './pages/NotFound';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/main.css';
import { home, logement, about, notFound } from './routes';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path={home} element={<Home />} />
                <Route path={logement} element={<Logement />} />
                <Route path={about} element={<About />} />
                <Route path={notFound} element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
