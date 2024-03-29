import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import EachExpertMainBody from './components/each-expert-main-body/EachExpertMainBody';
import MainBody from './components/mainbody/MainBody';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/consultation' element={<MainBody />} />
        <Route path='/eachSection' element={<EachExpertMainBody />} />
        <Route path='/*' element={<Navigate to='/consultation'/>} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
