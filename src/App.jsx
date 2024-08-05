import React from 'react';
import Footer from './Project/New folder/Footer';
import { Routes, Route} from 'react-router-dom';
import BookRoom from './Project/New folder/BookRoom';
import AboutUs from './Project/New folder/AboutUs';
import Gallery from './Project/New folder/Gallery';
import ContactUs from './Project/New folder/ContactUs';
import Home from './Project/New folder/Home';




function App() {

  return (
    <div>
  
      <Routes>
        <Route path='/HotelWebsite/' element={<Home/>} />
        <Route path='/HotelWebsite/room' element={<BookRoom />} />
        <Route path='/HotelWebsite/about' element={<AboutUs />} />
        <Route path='/HotelWebsite/gallery' element={<Gallery />} />
        <Route path='HotelWebsite/contact' element={<ContactUs />} />
      </Routes>
  
      
      <Footer />


    </div>
  );
}

export default App;
