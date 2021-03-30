import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import ServingTime from '../../component_first_page/Serving_Time';
import Scrollbar from '../../component_first_page/ScrollBar';
import Restaurant from '../../component_first_page/Restaurant';
import history from '../../history/History';

function FirstPage() {
    const location = useLocation();
    const full_path = location.pathname;
    const path_split = full_path.split('/');
    const restaurant_id_path = path_split[1];
    const table_number_path = path_split[2];

    return (
        <div>
            <div className='blue-nav-bar animate-enter'>
                <div className='nav-bar'>
                    <img className='logo' alt='logo' src="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/5ffc7b98bfc97e62c2dcaffe/img/image-16@1x.png" />
                    <Restaurant restaurant_id={restaurant_id_path}> </Restaurant>
                </div>
                <Scrollbar />
            

                <ServingTime restaurant_id={restaurant_id_path} ></ServingTime>
                <div className="cart-button">
                    <a href={'/' + restaurant_id_path + '/' +table_number_path+ '/order_summary'} className="cart-text roboto-medium-black-19px" >Pay</a>
                </div>
            </div>
        </div>
    )
}

export default FirstPage;
