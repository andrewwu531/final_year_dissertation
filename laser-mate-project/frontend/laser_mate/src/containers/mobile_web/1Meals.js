import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function App() {
  return <CustomerMeals {...CustomerMealsData} />;
}

export default App;


const CustomerMeals = (props) => {
  const [restaurant, setRestaurant] = useState({});
  const location = useLocation()
  const path1 = location.pathname;
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
    spanText2,
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
    axios.get(`http://localhost:8000/api/restaurant${path1}`)
    .then(res => {
        setRestaurant(res.data);
    })
    .catch(err => {

    });
  }, [path1]);    


  return (
    <div className="customermeals animate-enter">
      <div className="goto-payment-button">
        <div className="textgotopayment raleway-semi-bold-white-15px">{textGoToPayment}</div>
      </div>
      <img className="scroll-group-1" src={scrollGroup1} />
      <div className="overlap-group5">
        <div className="rectanglecategory"></div>
        <div className="categoryname raleway-semi-bold-black-23px">{categoryName}</div>
      </div>
      <div className="overlap-group6">
        <div className="navbarfulllayout" style={{ backgroundImage: `url(${navBarFullLayout})` }}>
          <div className="restaurantaddress raleway-semi-bold-white-17px">
            <span className="span0">{spanText}</span>
            <span className="span1">{restaurant.restaurant_name}</span>
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
        </div>
        <img className="lasermatelogo" src={laserMateLogo} />
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
    spanText2: "Esushi, Glasgow, UK",
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

