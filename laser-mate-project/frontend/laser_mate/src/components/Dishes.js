import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Dishes = (props) => {

    const [restaurantServingTimesCategorydishes,setRestaurantServingTimesCategorydishes] = useState({});
    var restaurant_serving_time_category_id = props.categories_id[0];
    // props.categories_id[0];
    

    console.log("dish");
    console.log(restaurant_serving_time_category_id);

    useEffect(() => {
        console.log("again");
        console.log(restaurant_serving_time_category_id);

        //restaurant_serving_time_category_id = restaurantServingTimeCategories[0].restaurant_serving_time_category_id;
        axios.post(`http://localhost:8000/api/restaurant_serving_time_category_dishes/search`, { restaurant_serving_time_category_id } )
          .then(res => {
            console.log("useEffect | dishes ---------- ");
            console.log(res.data);
            setRestaurantServingTimesCategorydishes(res.data);
          })
          .catch(err => {
          });
    }, [restaurant_serving_time_category_id]);

    const computeDishes = () => {
        let dishes = []
        console.log("computeDishes ");
        console.log(restaurantServingTimesCategorydishes.length);
        for (let i = 0; i < restaurantServingTimesCategorydishes.length; i++) {

            console.log("wonderfulx: " + restaurantServingTimesCategorydishes[i].dish_brief_descriptions);
            dishes.push(
                restaurantServingTimesCategorydishes[i].dish_brief_descriptions
            );
        }
        console.log("333333333333333333");
        console.log(dishes);

    }
    return(
        <div>
            {computeDishes()}
        </div>
    );

}

export default Dishes;