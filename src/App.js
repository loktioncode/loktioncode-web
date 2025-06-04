/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { darkTheme, lightTheme } from './redux/themeSlice';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ThankYou from './ThankYou';
import Header from './components/Header';
import Footer from './components/Home/Footer';
import OurBrand from './pages/OurBrand';
import Services from './pages/Services';
import GetAQuote from './pages/GetAQuote';
import Portfolio from './pages/Portfolio';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    let hour = new Date().getHours();
    if(hour < 6 || hour > 17){
      dispatch(darkTheme())
    }else{
      dispatch(lightTheme())
    }
  },[])
  return (
    <div
    className='rotate'
    style={{
      backgroundImage:``,
      backgroundSize:`cover`,
    }}>
      <Router>
        <Header />
        <Routes>
          <Route element={<Home />} exact path='/' />
          <Route element={<OurBrand />} exact path='/our-brand' />
          <Route element={<Services />} exact path='/services' />
          <Route element={<GetAQuote />} exact path='/get-a-quote' />
          <Route element={<Portfolio />} exact path='/portfolio' />

          <Route element={<ThankYou />} path="/submitted"/>
        </Routes>
      <Footer />
      </Router>
    </div>
    
  )
}

export default App