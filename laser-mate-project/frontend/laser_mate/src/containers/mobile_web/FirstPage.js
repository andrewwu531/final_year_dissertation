import React, { useState, useEffect } from 'react';
import { Helmet, renderStatic } from 'react-helmet';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router';
import Restaurant from '../../components/Restaurant';
import ServingTime from '../../components/Serving_Time';


function CustomerMeals() {


    const location = useLocation()
    const full_path = location.pathname;
    const path_split = full_path.split('/');
    const restaurant_id_path = path_split[1];
    const table_number_path = path_split[2];
    console.log("First Page");

    return (
        <div className="mealsinterfacem1c1 animate-enter">
            
            <ServingTime
                restaurant_id={restaurant_id_path}
            >
            </ServingTime>
            
            <div className="overlap-group1">
                <a className="pay-button" href={ table_number_path +'/order_summary'}>
                    <div className="overlap-group2">
                        <div className="yellowrectangle"></div>
                        <div className="paytext roboto-medium-black-19px">Pay</div>
                    </div>
                </a>
                <div className="help segoeui-bold-alizarin-crimson-20px">Help</div>
            </div>
            
            <div className="categoryname raleway-semi-bold-black-25px">Maki</div>
            <div className="x0">
                <div className="first-four-meals">
                        <img className="ellipse-white" src={"https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/601c08108c1c1d1ca8ea032a/img/ellipse-2@1x.png"} />
                        <img className="ellipse-blue" src={"https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/601c08108c1c1d1ca8ea032a/img/ellipse-2-1@1x.png"} />
                </div>
            </div>
            <div className="overlap-group">
                <div className="second-swi-teogry-bar">
                    <div className="overlap-group-3">
                        <div className="white-bar"></div>
                        <div className="nav-bar">
                            <div className="overlap-group-3">
                                <div className="navbarfulllayout" style={{ backgroundImage: `url(${"https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/blue-nav-bar@1x.png"})` }}>
                                    <div className="restaurantaddress raleway-semi-bold-white-17px">
                                        <span className="span1">
                                            <Restaurant restaurant_id={restaurant_id_path}></Restaurant>
                                        </span>
                                    </div>
                                    <div className="overlap-group5">
                                    </div>
                                </div>
                                <img className="lasermatelogo" src={"https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/5ffc7b98bfc97e62c2dcaffe/img/image-16@1x.png"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default CustomerMeals;
