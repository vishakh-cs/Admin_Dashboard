import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import Searchbar from './components/Searchbar';
import Products from './pages/Products';
import Chat from './pages/Chat';
import Inbox from './pages/Inbox';

const App: React.FC = () => {
  return (
    <div className="flex h-full">
      <Router>
        <div className="w-24">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full">
          <div className="p-2 sticky top-0 z-10">
            <Searchbar />
          </div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path='/chat' element={<Inbox />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
