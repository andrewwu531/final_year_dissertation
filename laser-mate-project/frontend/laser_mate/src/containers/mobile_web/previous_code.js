import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
//import Restaurant_Serving_Time from '.../components/Restaurant_Serving_Time';


function App() {
  return <CustomerMeals {...CustomerMealsData} />;
}

export default App; 


const CustomerMeals = (props) => {
  const [restaurant, setRestaurant] = useState({});
  const [restaurantServingTimes, setRestaurantServingTimes] = useState({});
  const [currentRestaurantServingTime, setCurrentRestaurantServingTime] = useState({});

  const location = useLocation()
  const full_path = location.pathname;
  const path_split = full_path.split('/');
  const restaurant_id_path = path_split[1];
  const table_number_path = path_split[2];
  const restaurant_id = restaurant_id_path;
  console.log('full_path: ' + full_path);
  console.log('path_split: ' + path_split);
  console.log('restaurant_id_path: ' + restaurant_id_path);
  console.log('table_number_path: ' + table_number_path);
  const {
    textGoToPayment,
    scrollGroup1,
    dishName,
    dishPrice,
    dishName2,
    dishPrice2,
    dishName3,
    dishPrice3,
    dishName4,
    dishPrice4,
    categoryName,
    navBarFullLayout,
    spanText,
    text2,
    category1,
    category2,
    category3,
    category4,
    category5,
    text1,
    laserMateLogo,
    overlapgroup1Props,
    overlapgroupProps,
    overlapgroup12Props,
    overlapgroup2Props,
  } = props;

  useEffect(() => {
    axios.get(`http://localhost:8000/api/restaurant/${restaurant_id_path}`)
      // , { restaurant_id: restaurant_id_path }
      .then(res => {
        console.log("res.data: " + res.data);
        setRestaurant(res.data);
      })
      .catch(err => {
      });
  }, [restaurant_id_path]);

  useEffect(() => {
    axios.post(`http://localhost:8000/api/restaurant_serving_times/search`, { restaurant_id })
      .then(res => {
        console.log("res.data2: " + res.data);
        setRestaurantServingTimes(res.data);
      })
      .catch(err => {
      });
  }, [restaurant_id_path]);

  const computeCurrentRestaurantServingTime = () => {
        
    let result = [];
    var today = new Date();
    var isOpenBusiness = false;
    var current_hour = today.getHours();
    var current_minutes = today.getMinutes();
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
                    break;
                }
            }
            if (current_hour === serving_time_end_hour) {
              if (serving_time_end_minutes >= current_minutes) {
                  console.log("condition - 2");
                  isOpenBusiness = true;
                  break;
              }
            }
            else {
                console.log("condition - 3");
                isOpenBusiness = true;
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
      return (
        <div className="serving_times raleway-semi-bold-black-17px">
          Serving Time | <br />
          {serving_time_start_hour}:{serving_time_start_minutes}
          {day_period_start} - {serving_time_end_hour}:{serving_time_end_minutes}{day_period_end}
        </div>
      );
    } else {
        console.log("---- condition ----- outside serving time");
    }
  };


  return (
    <div className="customermeals animate-enter">
      <div className="goto-payment-button">
        <div className="textgotopayment raleway-semi-bold-white-15px">{textGoToPayment}</div>
      </div>
      <img className="scroll-group-1" src={scrollGroup1} />
      <div className="overlap-group5">
        <div className="rectanglecategory"></div>
        {computeCurrentRestaurantServingTime()}
        <div className="categoryname raleway-semi-bold-black-23px">
          {categoryName}
        </div>
      </div>
      <div className="overlap-group6">
        <div className="navbarfulllayout" style={{ backgroundImage: `url(${navBarFullLayout})` }}>
          <div className="restaurantaddress raleway-semi-bold-white-17px">
            <span className="span0">{spanText}</span>
            <span className="span1">{restaurant.restaurant_name}, {restaurant.postcode}, {restaurant.city}, {restaurant.country} </span>
          </div>
          <div className="overlap-group-4">
            <div className="text-2 raleway-semi-bold-black-13px">{text2}</div>
            <div className="category1 raleway-semi-bold-black-13px">{category1}</div>
            <div className="category2 raleway-semi-bold-black-13px">{category2}</div>
            <div className="category3 raleway-semi-bold-black-13px">{category3}</div>
            <div className="category4 raleway-semi-bold-black-13px">{category4}</div>
            <div className="category5 raleway-semi-bold-black-13px">{category5}</div>
            <div className="text-1 raleway-semi-bold-black-13px">{text1}</div>            
          </div>
          <img className="lasermatelogo" src={laserMateLogo} />
        </div>
      </div>
    </div>
  );
}


function Overlapgroup1(props) {
  const { dishGreyBackground, dishImage } = props;

  return (
    <div className="overlap-group1">
      <img className="dishgreybackground" src={dishGreyBackground} />
      <img className="dishimage" src={dishImage} />
    </div>
  );
}

function Overlapgroup(props) {
  const { dishGreyBackground, dishImage } = props;

  return (
    <div className="overlap-group">
      <img className="dishgreybackground" src={dishGreyBackground} />
      <img className="dishimage" src={dishImage} />
    </div>
  );
}


const overlapgroup1Data = {
  dishGreyBackground: "https://anima-uploads.s3.amazonaws.com/projects/5ff8630ba446f0f86bcf17a3/releases/5ff8631af6a4ee3798a7cdc7/img/path-1@1x.png",
  dishImage: "https://anima-uploads.s3.amazonaws.com/projects/5ff8630ba446f0f86bcf17a3/releases/5ff8631af6a4ee3798a7cdc7/img/image-4@1x.png",
};

const overlapgroupData = {
  dishGreyBackground: "https://anima-uploads.s3.amazonaws.com/projects/5ff8630ba446f0f86bcf17a3/releases/5ff8631af6a4ee3798a7cdc7/img/path-1@1x.png",
  dishImage: "https://anima-uploads.s3.amazonaws.com/projects/5ff8630ba446f0f86bcf17a3/releases/5ff8631af6a4ee3798a7cdc7/img/image-4@1x.png",
};

const overlapgroup12Data = {
  dishGreyBackground: "https://anima-uploads.s3.amazonaws.com/projects/5ff8630ba446f0f86bcf17a3/releases/5ff8631af6a4ee3798a7cdc7/img/path-1@1x.png",
  dishImage: "https://anima-uploads.s3.amazonaws.com/projects/5ff8630ba446f0f86bcf17a3/releases/5ff8631af6a4ee3798a7cdc7/img/image-4@1x.png",
};

const overlapgroup2Data = {
  dishGreyBackground: "https://anima-uploads.s3.amazonaws.com/projects/5ff8630ba446f0f86bcf17a3/releases/5ff8631af6a4ee3798a7cdc7/img/path-1@1x.png",
  dishImage: "https://anima-uploads.s3.amazonaws.com/projects/5ff8630ba446f0f86bcf17a3/releases/5ff8631af6a4ee3798a7cdc7/img/image-4@1x.png",
};

const CustomerMealsData = {
  textGoToPayment: "Go to Payment",
  scrollGroup1: "https://anima-uploads.s3.amazonaws.com/projects/5ff8630ba446f0f86bcf17a3/releases/5ff8b65e0828f884ff28d424/img/scroll-group-1@1x.png",
  dishName: "Takoyaki Octopus",
  dishPrice: "£4.20",
  dishName2: "Takoyaki Octopus",
  dishPrice2: "£4.20",
  dishName3: "Takoyaki Octopus",
  dishPrice3: "£4.20",
  dishName4: "Takoyaki Octopus",
  dishPrice4: "£4.20",
  categoryName: "Starters",
  navBarFullLayout: "https://anima-uploads.s3.amazonaws.com/projects/5ff8630ba446f0f86bcf17a3/releases/5ff8b65e0828f884ff28d424/img/blue-nav-bar@1x.png",
  spanText: "",
  text2: "<",
  category1: "Alcohol",
  category2: "Drinks ",
  category3: "Ramen",
  category4: "Sushi",
  category5: "Dessert",
  text1: ">",
  laserMateLogo: "https://anima-uploads.s3.amazonaws.com/projects/5ff8630ba446f0f86bcf17a3/releases/5ff8631af6a4ee3798a7cdc7/img/image-16@1x.png",
  overlapgroup1Props: overlapgroup1Data,
  overlapgroupProps: overlapgroupData,
  overlapgroup12Props: overlapgroup12Data,
  overlapgroup2Props: overlapgroup2Data,
};