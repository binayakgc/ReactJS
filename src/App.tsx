import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BlogDetail, BlogList } from './Blog/blogRoute';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/post/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
