import React, { useState } from 'react';
import './Navbar.css'
import { useRecoilValue, useRecoilState } from 'recoil';
import { ContactNotification, ServiceNotification, AboutNotification, ProductNotification ,tatalNotification} from '../store/AtomPage';
function NavBar() {
  // State for notification count of each link
 


  const product = useRecoilValue(ProductNotification)
  const contact = useRecoilValue(ContactNotification)
  const service = useRecoilValue(ServiceNotification)
  const about = useRecoilValue(AboutNotification)
  const all = useRecoilValue(tatalNotification)

  
  return (
    <nav>
      <ul>
        <li><a href="#home">Home {all> 0 && `(${all})`}</a></li>
        <li><a href="#contact">Contact {contact> 0 && `(${contact})`}</a></li>
        <li><a href="#services">Services {service > 0 && `(${service})`}</a></li>
        <li><a href="#about">About {about > 0 && `(${about})`}</a></li>
        <li><a href="#product">Product {product > 0 && `(${product})`}</a></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* Other components and content can go here */}
    </div>
  );
}

export default App;
