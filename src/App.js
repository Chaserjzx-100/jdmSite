import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import WheelGallery from './components/WheelGallery';
import { AddVehicle } from './components/AddVehicle';
import { Update } from './components/Update';
import { ListEmployees } from './components/ListEmployees';
import Home from './components/Home';
import { createContext } from 'react';
import React, { useState } from 'react'
import ReactSwitch from 'react-switch';
import { Suspense } from 'react';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <BrowserRouter>
          <Navbar />

          <div className='App container-fluid'>
            <div className='container text-right'>
              <div className='switch'>
                <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
              </div>

              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/inventory" element={<ListEmployees />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/wheels" element={<WheelGallery />} />
                <Route path="/addVehicle/:carID" element={<AddVehicle />} />
                <Route path="/update/:carID" element={<Update />} />
              </Routes>
            </Suspense>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
