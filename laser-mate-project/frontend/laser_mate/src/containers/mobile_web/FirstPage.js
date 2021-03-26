import React from 'react';
import { useLocation } from 'react-router-dom';

import ServingTime from '../../component_first_page/Serving_Time';
import Scrollbar from '../../component_first_page/ScrollBar';
import Restaurant from '../../component_first_page/Restaurant';

function FirstPage() {
    const location = useLocation();
    const full_path = location.pathname;
    const path_split = full_path.split('/');
    const restaurant_id_path = path_split[1];
    const table_number_path = path_split[2];

    return (
        <div>
            <header className='header animate-enter'>
                <div className='top'>
                    <img alt='' src="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/5ffc7b98bfc97e62c2dcaffe/img/image-16@1x.png" />
                    <Restaurant restaurant_id={restaurant_id_path}> </Restaurant>
                </div>
                <Scrollbar />
            </header>

            <ServingTime restaurant_id={restaurant_id_path} ></ServingTime>
        </div>
    )
}

export default FirstPage;
