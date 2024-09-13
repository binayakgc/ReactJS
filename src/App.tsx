import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BlogDetail } from './Components/blogdetail';
import { BlogList } from './Components/bloglist';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/post/:id" element={<BlogDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;