import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';
import ItemList from './ItemList';

function Layout() {
  return (
    <div>
        <Header/>
        <Banner/>
        <ItemList/>
        <Footer/>
    </div>
  )
}

export default Layout;