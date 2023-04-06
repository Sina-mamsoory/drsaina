import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import MainBody from './components/mainbody/MainBody';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/consultation' element={<MainBody />} />
        <Route path='/*' element={<Navigate to='/consultation'/>} />
      </Routes>
    </div>
  );
}

export default App;
