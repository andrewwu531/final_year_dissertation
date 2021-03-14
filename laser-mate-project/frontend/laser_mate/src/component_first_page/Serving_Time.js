import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Categories from './Categories';


const Serving_Time = (props) => {
    const [restaurantServingTimes, setRestaurantServingTimes] = useState({});

    var restaurant_id = props.restaurant_id;
    var current_restaurant_serving_time_id;


    console.log("Serving Time | restaurant id")
    console.log(restaurant_id);

    useEffect(() => {
        axios.post(`http://localhost:8000/api/restaurant_serving_times/search`, { restaurant_id })
            .then(res => {
                console.log("useEffect | Serving Time---------- " + res.data);
                setRestaurantServingTimes(res.data);
            })
            .catch(err => {
            });
    }, [restaurant_id]);
    
    
    const compute_current_serving_time_id = () => {
        let result = [];
        var today = new Date();
        var isOpenBusiness = false;
        var current_hour = today.getHours();
        var current_minutes = today.getMinutes();
        console.log("11111111111111");
        console.log("current hour and minutes ABC: " + current_hour + ": " + current_minutes);
        console.log("restaurantServingTimes: " + restaurantServingTimes);
        console.log("restaurantServingTimes string: " + JSON.stringify(restaurantServingTimes));
        console.log("restaurantServingTimes.length: " + restaurantServingTimes.length);

        for (let i = 0; i < restaurantServingTimes.length; i++) {
            console.log(i);
            var serving_time_start_hour = parseInt(restaurantServingTimes[i].serving_time_start_hour);
            var serving_time_start_minutes = parseInt(restaurantServingTimes[i].serving_time_start_minutes);
            var serving_time_end_hour = parseInt(restaurantServingTimes[i].serving_time_end_hour);
            var serving_time_end_minutes = parseInt(restaurantServingTimes[i].serving_time_end_minutes);

            console.log("condition - for loop");
            console.log("condition XYZ: " + serving_time_start_hour);
            if ((serving_time_start_hour <= current_hour) && (serving_time_end_hour >= current_hour)) {
                if (current_hour === serving_time_start_hour) {
                    if (serving_time_start_minutes <= current_minutes) {
                        console.log("condition - 1");
                        isOpenBusiness = true;
                        console.log("abcdefg - condition 1 " + restaurantServingTimes[i].restaurant_serving_time_id);
                        current_restaurant_serving_time_id = restaurantServingTimes[i].restaurant_serving_time_id;
                        break;
                    }
                }
                if (current_hour === serving_time_end_hour) {
                    if (serving_time_end_minutes >= current_minutes) {
                        console.log("condition - 2");
                        isOpenBusiness = true;
                        console.log("abcdefg - condition 2 " + restaurantServingTimes[i].restaurant_serving_time_id);
                        current_restaurant_serving_time_id = restaurantServingTimes[i].restaurant_serving_time_id;
                        break;
                    }
                }
                else {
                    console.log("condition - 3");
                    isOpenBusiness = true;
                    console.log("abcdefg - condition 3 " + restaurantServingTimes[i].restaurant_serving_time_id);
                    current_restaurant_serving_time_id = restaurantServingTimes[i].restaurant_serving_time_id;
                    break;
                }
            }
        }
        if (isOpenBusiness === true) {
            console.log("condition - isOpenBusiness");
            console.log("current serving time: " + serving_time_start_hour + serving_time_start_minutes +
                serving_time_end_hour + serving_time_end_minutes)
            var day_period_start = "am";
            var day_period_end = "am";
            if (serving_time_start_hour > 12) {
                serving_time_start_hour -= 12;
                day_period_start = "pm";
            }
            if (serving_time_start_hour === 12) {
                day_period_start = "pm";
            }
            if (serving_time_end_hour > 12) {
                serving_time_end_hour -= 12;
                day_period_end = "pm";
            }
            if (serving_time_end_hour === 12) {
                console.log("andrewwu");
                day_period_end = "pm";
            }
            if (serving_time_start_minutes === 0) {
                serving_time_start_minutes = "00";
            }
            if (serving_time_end_minutes === 0) {
                serving_time_end_minutes = "00";
            }
        } else {
            console.log("---- condition ----- outside serving time");
        }
        return (
            <div className="serving_times raleway-semi-bold-black-15px">

                Serving Time: <br />            
                {serving_time_start_hour}:{serving_time_start_minutes}
                {day_period_start} - {serving_time_end_hour}:{serving_time_end_minutes}{day_period_end}
                
            </div>  
        );
    }
    return(
        <div>
            <div className="servingtimeindicat1 raleway-semi-bold-black-15px">
                {compute_current_serving_time_id()}
            </div>
            <Categories current_restaurant_serving_time_id={current_restaurant_serving_time_id}></Categories>
        </div>

    );

};

export default Serving_Time;