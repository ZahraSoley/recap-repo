import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Reserve from './pages/Reserve/Reserve';
import Confirm from './pages/Confirm/Confirm';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState([])
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reserve-a-table' element={<Reserve setFormData={setFormData} />} />
        <Route path='/confirm' element={<Confirm formData={formData} />} />
      </Routes>
    </>
  );
}

export default App;
