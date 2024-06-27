import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import ContentList from './components/ContentList';
import CreateContentComponent from './components/CreateContentComponent';
import EditContent from './components/EditContent';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/content" element={<ContentList />} />
          <Route path="/content/create" element={<CreateContentComponent />} />
          <Route path="/content/edit/:id" element={<EditContent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
