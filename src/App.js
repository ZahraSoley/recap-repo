import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Reserve from './pages/Reserve/Reserve';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/reserve-a-table' element={<Reserve/>}/>
      </Routes>
    </>
  );
}

export default App;
