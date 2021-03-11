import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Categories = (props) => {


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
        let categories = []
        for (let i = 0; i < restaurantServingTimeCategories.length; i++) {

            console.log("amazing: " + restaurantServingTimeCategories[i].category);
            categories.push(
                restaurantServingTimeCategories[i].category
            );
        }
        console.log("111111111111");
        console.log(categories[1]);
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
                                                    {categories[0]} &nbsp; &nbsp; &nbsp;
                                                    {categories[1]} &nbsp; &nbsp; &nbsp;
                                                    {categories[2]} &nbsp; &nbsp; &nbsp;
                                                    {categories[3]} &nbsp; &nbsp; &nbsp;
                                                    {categories[4]} &nbsp; &nbsp; &nbsp;
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
        <div>{computeCurrentCategories()}</div>
    );

}

export default Categories;