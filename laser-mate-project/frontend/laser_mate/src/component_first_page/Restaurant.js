import React, { useState, useEffect } from "react";
import axios from "axios";

const Restaurant = (props) => {
  const [restaurant, setRestaurant] = useState({});
  const restaurant_id_path = props.restaurant_id;

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/restaurant/${restaurant_id_path}`)
      .then((res) => {
        console.log("useEffect | Restaurant ---------- " + res.data);
        setRestaurant(res.data);
      })
      .catch((err) => {});
  }, [restaurant_id_path]);

  console.log("Restaurant.js end: ");
  console.log(restaurant);

  return (
    <div className="restaurant_address">
      {restaurant.restaurant_name}, {restaurant.city}, {restaurant.postcode}
    </div>
  );
};

export default Restaurant;
