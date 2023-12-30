import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header';
import CustomNavbar from '../components/layout/CustomNavbar';

const Home = () => {
  return (
    <div className="App">
      <Header/>
      <CustomNavbar/>
      <Sidebar />
    </div>
  );
}

export default Home