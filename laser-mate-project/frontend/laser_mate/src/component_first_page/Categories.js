import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dishes from './Dishes';
import ScrollBar from '../component_first_page/ScrollBar';

const Categories = (props) => {

    let categories = []
    let categories_id = []
    const [restaurantServingTimeCategories, setRestaurantServingTimeCategories] = useState([]);
    var current_restaurant_serving_time_id = props.current_restaurant_serving_time_id;
    


    useEffect(() => {
        axios.get(`http://localhost:8000/api/restaurant_serving_time_categories/${current_restaurant_serving_time_id}`)
            .then(res => {
                console.log("useEffect | Categories ---------- " + res.data);
                setRestaurantServingTimeCategories(res.data);
            })
            .catch(err => {
            });
    }, [current_restaurant_serving_time_id]);


    const computeCurrentCategories = () => {
        
        console.log(restaurantServingTimeCategories.length);
        console.log(categories_id);
        console.log("hahey");
        for (let i = 0; i < restaurantServingTimeCategories.length; i++) {

            console.log("amazing: " + restaurantServingTimeCategories[i].category);
            categories_id.push(
                restaurantServingTimeCategories[i].restaurant_serving_time_category_id
            );
            categories.push({
                i: restaurantServingTimeCategories[i].category
            });
        }


        console.log("222222222222222");
        console.log(categories);
        console.log(categories_id);
        console.log(categories_id.length);

        
        return (
            <div className="overlap-group">
                <div className="second-swi-teogry-bar">
                    <div className="overlap-group-3">
                        <div className="white-bar"></div>
                        <div className="nav-bar">
                            <div className="overlap-group-3">
                                <div className="navbarfulllayout">
                                    <div className="overlap-group5">
                                        <div className="drinks raleway-semi-bold-black-14px">
                                                {categories.length > 0 &&
                                                    <ScrollBar categories={categories}></ScrollBar>
                                                } 
                                                {categories_id.length > 0 && 
                                                    <Dishes categories_id={categories_id} ></Dishes>
                                                }
                                                
                                        </div>
                                    </div>
                                    <img className="lasermatelogo" />
                                </div>
                            </div>
                        </div>
                        <div className="overlap-group3">
                        </div>
                    </div>

                </div>
            </div>

        );

    }
    return (
        <div>  
            {computeCurrentCategories()}
            
        </div> 
    );

}

export default Categories;
