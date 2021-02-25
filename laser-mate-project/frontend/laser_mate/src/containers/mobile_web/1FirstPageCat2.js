import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router';

function App() {
  return <CustomerMeals {...CustomerMealsData} />;
}

export default App;


function CustomerMeals(props) {
  const [restaurant, setRestaurant] = useState({});
  const [restaurantServingTimes, setRestaurantServingTimes] = useState({});
  const [restaurantServingTimeCategories, setRestaurantServingTimeCategories] = useState({});

  const location = useLocation()
  const full_path = location.pathname;
  const path_split = full_path.split('/');
  const restaurant_id_path = path_split[1];
  const table_number_path = path_split[2];
  const restaurant_id = restaurant_id_path;
  var current_restaurant_serving_time_id;
  console.log('full_path: ' + full_path);
  console.log('path_split: ' + path_split);
  console.log('restaurant_id_path: ' + restaurant_id_path);
  console.log('table_number_path: ' + table_number_path);
  const {
    payText,
    help,
    servingTimeIndicat,
    categoryName,
    dishGreyBackground,
    dishImage,
    dishName,
    dishPrice,
    dishGreyBackground2,
    dishImage2,
    dishName2,
    dishPrice2,
    ellipseWhite,
    ellipseBlue,
    dishGreyBackground3,
    dishImage3,
    dishName3,
    dishPrice3,
    dishGreyBackground4,
    dishImage4,
    dishName4,
    dishPrice4,
    ellipseWhite2,
    ellipseBlue2,
    navBarFullLayout,
    spanText,
    text2,
    drinks,
    category2,
    category3,
    category4,
    category5,
    text1,
    laserMateLogo,
    category52,
    firstSwippingCategoryBar,
    group2Props,
    meal4Props,
    meal42Props,
    group22Props,
  } = props;

  useEffect(() => {
    axios.get(`http://localhost:8000/api/restaurant/${restaurant_id_path}`)
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
  useEffect(() => {
    axios.get(`http://localhost:8000/api/restaurant_serving_time_categories/${current_restaurant_serving_time_id}`)
      .then(res => {
        console.log("res.data3: " + res.data);
        setRestaurantServingTimeCategories(res.data);
      })
      .catch(err => {
      });
  }, [current_restaurant_serving_time_id]);

  const computeCurrentRestaurantServingTime = () => {

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
        <div className="serving_times raleway-semi-bold-black-15px">
          {serving_time_start_hour}:{serving_time_start_minutes}
          {day_period_start} - {serving_time_end_hour}:{serving_time_end_minutes}{day_period_end}
        </div>
      );
    } else {
      console.log("---- condition ----- outside serving time");
    }
  };

  const computeCurrentCategories = () => {
    let categories = [];
    for (let i = 0; i < restaurantServingTimeCategories.length; i++) {
      console.log("amazing: " + restaurantServingTimeCategories[i].category);
      categories.push(restaurantServingTimeCategories[i].category);
    }
    if (categories.length < 12){
      return(
        <div className="drinks raleway-semi-bold-black-14px">
          {categories[5]} &nbsp; &nbsp; &nbsp;
          {categories[6]} &nbsp; &nbsp; &nbsp;
          {categories[7]} &nbsp; &nbsp; &nbsp;
          {categories[8]} &nbsp; &nbsp; &nbsp;
          {categories[9]} &nbsp; &nbsp; &nbsp;
        </div>
      );
    }
  };


  return (
    <div className="mealsinterfacem1c1 animate-enter">
      <div className="overlap-group1">
        <div className="pay-button">
          <div className="overlap-group2">
            <div className="yellowrectangle"></div>
            <div className="paytext roboto-medium-black-19px">{payText}</div>
          </div>
        </div>
        <div className="help segoeui-bold-alizarin-crimson-20px">{help}</div>
      </div>
      <div className="servingtimeindicat1 raleway-semi-bold-black-15px">Serving Times:</div>
      <div className="servingtimeindicat raleway-semi-bold-black-15px">{computeCurrentRestaurantServingTime()}</div>
      <div className="categoryname raleway-semi-bold-black-25px">{categoryName}</div>
      <div className="x0">
        <div className="first-four-meals">
          <div className="overlap-group-1">
            <div className="rectangle-four-meals">
              <div className="inner-rect-four-meals">
                <div className="auto-flex">
                  <div className="group-1">
                    <div className="overlap-group-2">
                      <img className="dishgreybackground" src={dishGreyBackground} />
                      <img className="dishimage" src={dishImage} />
                      <div className="dishname raleway-semi-bold-black-15px">{dishName}</div>
                      <div className="dishprice raleway-semi-bold-black-15px">{dishPrice}</div>
                    </div>
                  </div>
                  <div className="group-3">
                    <div className="overlap-group-2">
                      <img className="dishgreybackground" src={dishGreyBackground2} />
                      <img className="dishimage" src={dishImage2} />
                      <div className="dishname-3 raleway-semi-bold-black-15px">{dishName2}</div>
                      <div className="dishprice raleway-semi-bold-black-15px">{dishPrice2}</div>
                    </div>
                  </div>
                </div>
                <div className="auto-flex1">
                  <Group2
                    dishGreyBackground={group2Props.dishGreyBackground}
                    dishImage={group2Props.dishImage}
                    dishName={group2Props.dishName}
                    dishPrice={group2Props.dishPrice}
                  />
                  <Meal4
                    dishGreyBackground={meal4Props.dishGreyBackground}
                    dishImage={meal4Props.dishImage}
                    dishName={meal4Props.dishName}
                    dishPrice={meal4Props.dishPrice}
                  />
                </div>
              </div>
            </div>
            <img className="ellipse-white" src={ellipseWhite} />
            <img className="ellipse-blue" src={ellipseBlue} />
          </div>
        </div>
        <div className="second-four-meals">
          <div className="overlap-group-1">
            <div className="rectangle-four-meals">
              <div className="inner-rect-four-meals">
                <div className="auto-flex">
                  <div className="meal-1">
                    <div className="overlap-group-2">
                      <img className="dishgreybackground" src={dishGreyBackground3} />
                      <img className="dishimage" src={dishImage3} />
                      <div className="dishname-4 raleway-semi-bold-black-15px">{dishName3}</div>
                      <div className="dishprice raleway-semi-bold-black-15px">{dishPrice3}</div>
                    </div>
                  </div>
                  <Meal4
                    dishGreyBackground={meal42Props.dishGreyBackground}
                    dishImage={meal42Props.dishImage}
                    dishName={meal42Props.dishName}
                    dishPrice={meal42Props.dishPrice}
                  />
                </div>
                <div className="auto-flex1">
                  <Group2
                    dishGreyBackground={group22Props.dishGreyBackground}
                    dishImage={group22Props.dishImage}
                    dishName={group22Props.dishName}
                    dishPrice={group22Props.dishPrice}
                  />
                  <div className="meal-4">
                    <div className="overlap-group-2">
                      <img className="dishgreybackground" src={dishGreyBackground4} />
                      <img className="dishimage" src={dishImage4} />
                      <div className="dishname-5 raleway-semi-bold-black-15px">{dishName4}</div>
                      <div className="dishprice raleway-semi-bold-black-15px">{dishPrice4}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="ellipse-white" src={ellipseWhite2} />
            <img className="ellipse-blue" src={ellipseBlue2} />
          </div>
        </div>
      </div>
      <div className="overlap-group">
        <div className="second-swi-teogry-bar">
          <div className="overlap-group-3">
            <div className="white-bar"></div>
            <div className="nav-bar">
              <div className="overlap-group-3">
                <div className="navbarfulllayout" style={{ backgroundImage: `url(${navBarFullLayout})` }}>
                  <div className="restaurantaddress raleway-semi-bold-white-17px">
                    <span className="span0">{spanText}</span>
                    <span className="span1">{restaurant.restaurant_name}, {restaurant.city}, {restaurant.postcode}, {restaurant.country}</span>
                  </div>
                  <div className="overlap-group5">
                    <div className="text-2 raleway-semi-bold-black-13px">{text2}</div>
                    <div className="drinks raleway-semi-bold-black-14px"> {computeCurrentCategories()} </div>
                    {/* <div className="drinks raleway-semi-bold-black-14px">{drinks}</div>
                    <div className="category2 raleway-semi-bold-black-14px">{category2}</div>
                    <div className="category3 raleway-semi-bold-black-14px">{category3}</div>
                    <div className="category4 raleway-semi-bold-black-14px">{category4}</div>
                    <div className="category5 raleway-semi-bold-black-14px">{category5}</div> */}
                    <div className="text-1 raleway-semi-bold-black-13px">{text1}</div>
                  </div>
                </div>
                <img className="lasermatelogo" src={laserMateLogo} />
              </div>
            </div>
          </div>
          <div className="overlap-group3">
            <div className="category5-1 raleway-semi-bold-black-14px">{category52}</div>
          </div>
        </div>
        <img className="first-swip-tegory-bar" src={firstSwippingCategoryBar} />
      </div>
    </div>
  );
}


function Group2(props) {
  const { dishGreyBackground, dishImage, dishName, dishPrice } = props;

  return (
    <div className="group-2">
      <div className="overlap-group-2">
        <img className="dishgreybackground" src={dishGreyBackground} />
        <img className="dishimage" src={dishImage} />
        <div className="dishname-1 raleway-semi-bold-black-15px">{dishName}</div>
        <div className="dishprice raleway-semi-bold-black-15px">{dishPrice}</div>
      </div>
    </div>
  );
}


function Meal4(props) {
  const { dishGreyBackground, dishImage, dishName, dishPrice } = props;

  return (
    <div className="meal-4">
      <div className="overlap-group-2">
        <img className="dishgreybackground" src={dishGreyBackground} />
        <img className="dishimage" src={dishImage} />
        <div className="dishname-2 raleway-semi-bold-black-15px">{dishName}</div>
        <div className="dishprice raleway-semi-bold-black-15px">{dishPrice}</div>
      </div>
    </div>
  );
}
const group2Data = {
  dishGreyBackground: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/dish-grey-background@1x.png",
  dishImage: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/601c08108c1c1d1ca8ea032a/img/dish-image-1@1x.png",
  dishName: "Crab Maki",
  dishPrice: "£13.50",
};

const meal4Data = {
  dishGreyBackground: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/dish-grey-background@1x.png",
  dishImage: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/601c08108c1c1d1ca8ea032a/img/dish-image-3@1x.png",
  dishName: "Duck Maki",
  dishPrice: "£13.90",
};

const meal42Data = {
  dishGreyBackground: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/dish-grey-background@1x.png",
  dishImage: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/601c08108c1c1d1ca8ea032a/img/dish-image-6@1x.png",
  dishName: "Tokyo Maki",
  dishPrice: "£13.80",
};

const group22Data = {
  dishGreyBackground: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/dish-grey-background@1x.png",
  dishImage: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/601c08108c1c1d1ca8ea032a/img/dish-image-5@1x.png",
  dishName: "Golden Maki",
  dishPrice: "£12.80",
};

const CustomerMealsData = {
  payText: "Pay",
  help: "Help",
  servingTimeIndicat: "Serving Time: 5pm-12pm",
  categoryName: "Maki",
  dishGreyBackground: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/dish-grey-background@1x.png",
  dishImage: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/601c08108c1c1d1ca8ea032a/img/dish-image@1x.png",
  dishName: "California Maki",
  dishPrice: "£10.20",
  dishGreyBackground2: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/dish-grey-background@1x.png",
  dishImage2: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/601c08108c1c1d1ca8ea032a/img/dish-image-2@1x.png",
  dishName2: "Dragon Maki",
  dishPrice2: "£13.20",
  ellipseWhite: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/601c08108c1c1d1ca8ea032a/img/ellipse-2@1x.png",
  ellipseBlue: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/601c08108c1c1d1ca8ea032a/img/ellipse-2-1@1x.png",
  dishGreyBackground3: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/dish-grey-background@1x.png",
  dishImage3: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/601c08108c1c1d1ca8ea032a/img/dish-image-4@1x.png",
  dishName3: "Eel Maki",
  dishPrice3: "£14.20",
  dishGreyBackground4: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/dish-grey-background@1x.png",
  dishImage4: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/601c08108c1c1d1ca8ea032a/img/dish-image-7@1x.png",
  dishName4: "Special Maki",
  dishPrice4: "£14.20",
  ellipseWhite2: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/601c08108c1c1d1ca8ea032a/img/ellipse-2@1x.png",
  ellipseBlue2: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/601c08108c1c1d1ca8ea032a/img/ellipse-2-1@1x.png",
  navBarFullLayout: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/blue-nav-bar@1x.png",
  spanText: "",
  text2: "",
  drinks: "Drinks",
  category2: "Starters",
  category3: "Handrolls",
  category4: "Maki",
  category5: "Donburi",
  text1: "",
  laserMateLogo: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/5ffc7b98bfc97e62c2dcaffe/img/image-16@1x.png",
  category52: "Vegetarian",
  firstSwippingCategoryBar: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/601c08108c1c1d1ca8ea032a/img/first-swipping-category-bar-@1x.png",
  group2Props: group2Data,
  meal4Props: meal4Data,
  meal42Props: meal42Data,
  group22Props: group22Data,
};
