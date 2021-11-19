import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import HomeProducts from '../HomeProducts/HomeProducts';
import Products from '../Products/Products';
import WatchProduct from '../WatchProduct/WatchProduct';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <WatchProduct></WatchProduct>
            <Footer></Footer>
        </div>
    );
};

export default Home;