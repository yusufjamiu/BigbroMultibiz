// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SidebarProvider } from './SidebarContext';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Blog from './pages/Blog';
import Faqs from './pages/Faqs';
import Contacts from './pages/Contacts';
import Team from './pages/Team';

const App = () => {
  return (
    <SidebarProvider>
      <Router>
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Navbar />
            <div className="flex-1 overflow-y-auto p-6 mt-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/faqs" element={<Faqs />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/team" element={<Team />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </SidebarProvider>
  );
};

export default App;