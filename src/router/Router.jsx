import React from 'react';
import './Router.css';
import Navbar from '../client/components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Overview from '../client/page/overview/Overview';
import Product from '../client/page/product/Product';
import Male from '../client/page/male/Male';
import Female from '../client/page/female/Female';
import Sale from '../client/page/sale/Sale';
import Discover from '../client/page/discover/Discover';

const Router = () => {
    return (
        <div className='router'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Overview />} />
                <Route path='/product' element={<Product />} />
                <Route path='/male' element={<Male />} />
                <Route path='/female' element={<Female />} />
                <Route path='/sale' element={<Sale />} />
                <Route path='/discover' element={<Discover />} />
            </Routes>
        </div>
    )
}

export default Router;
