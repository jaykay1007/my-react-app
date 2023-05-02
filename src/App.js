import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '././Constants/Layout/Layout';
import SignUp from './Pages/SignUp/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
  <Router>
      <Routes>
      <Route exact path="/signup" element={<SignUp/>} />
     <Route exact path="/" element={<Layout/>}> 
     <Route exact path="/dashboard" element={<Dashboard/>} />
     </Route>
    </Routes>
  </Router>
  );
}

export default App;