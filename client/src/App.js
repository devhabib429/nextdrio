
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Homepage from './components/Homepage';
import Resource from './components/Resource';
import Error from './components/Error';
import Community from './components/Community';



function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path='/about' element={<AboutUs />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/resources' element={<Resource />} />
        <Route exact path='/community' element={<Community />} />
        <Route element={Error} />
      </Routes>
      <Footer />


    </>

  );
}

export default App;
