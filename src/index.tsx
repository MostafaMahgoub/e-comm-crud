import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Crud from './CRUD/crud';
import Ecomm from './E-commerce/e-comm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/products" element={<Crud />} />
        <Route path="/" element={<Ecomm />} />
      </Routes>
    </Router>
  </React.StrictMode>
);