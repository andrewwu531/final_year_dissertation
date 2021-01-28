import React from "react";

function App() {
  return <CustomerMeals {...CustomerMealsData} />;
}

export default App;


function CustomerMeals(props) {
  const {
    dishGreyBackground,
    dishImage,
    dishName,
    dishPrice,
    dishGreyBackground2,
    dishImage2,
    dishName2,
    dishPrice2,
    servingTimeIndicat,
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
    extrasText,
    group4Props,
    group42Props,
    group43Props,
    group44Props,
  } = props;

  return (
    <div className="customermeals animate-enter">
      <div className="repeat-grid-5">
        <div className="auto-flex">
          <div className="group-4-1">
            <div className="overlap-group-1">
              <img className="dishgreybackground" src={dishGreyBackground} />
              <img className="dishimage" src={dishImage} />
              <div className="dishname raleway-semi-bold-black-15px">{dishName}</div>
              <div className="dishprice raleway-semi-bold-black-15px">{dishPrice}</div>
            </div>
          </div>
          <Group4
            dishGreyBackground={group4Props.dishGreyBackground}
            dishImage={group4Props.dishImage}
            dishName={group4Props.dishName}
            dishPrice={group4Props.dishPrice}
          />
          <Group4
            dishGreyBackground={group42Props.dishGreyBackground}
            dishImage={group42Props.dishImage}
            dishName={group42Props.dishName}
            dishPrice={group42Props.dishPrice}
          />
        </div>
        <div className="auto-flex1">
          <div className="group-4-1">
            <div className="overlap-group-1">
              <img className="dishgreybackground" src={dishGreyBackground2} />
              <img className="dishimage" src={dishImage2} />
              <div className="dishname raleway-semi-bold-black-15px">{dishName2}</div>
              <div className="dishprice raleway-semi-bold-black-15px">{dishPrice2}</div>
            </div>
          </div>
          <Group4
            dishGreyBackground={group43Props.dishGreyBackground}
            dishImage={group43Props.dishImage}
            dishName={group43Props.dishName}
            dishPrice={group43Props.dishPrice}
          />
          <Group4
            dishGreyBackground={group44Props.dishGreyBackground}
            dishImage={group44Props.dishImage}
            dishName={group44Props.dishName}
            dishPrice={group44Props.dishPrice}
          />
        </div>
      </div>
      <div className="servingtimeindicat raleway-semi-bold-black-17px">{servingTimeIndicat}</div>
      <div className="category-heading">
        <div className="overlap-group6">
          <div className="rectanglecategory"></div>
          <div className="categoryname raleway-semi-bold-black-23px">{categoryName}</div>
        </div>
      </div>
      <div className="nav-bar">
        <div className="overlap-group7">
          <div className="navbarfulllayout" style={{ backgroundImage: `url(${navBarFullLayout})` }}>
            <div className="restaurantaddress raleway-semi-bold-white-17px">
              <span className="span0">{spanText}</span>
              <span className="span1">{spanText2}</span>
            </div>
            <div className="overlap-group">
              <div className="text-2 raleway-semi-bold-black-13px">{text2}</div>
              <div className="category1 raleway-semi-bold-black-14px">{category1}</div>
              <div className="category2 raleway-semi-bold-black-14px">{category2}</div>
              <div className="category3 raleway-semi-bold-black-14px">{category3}</div>
              <div className="category4 raleway-semi-bold-black-14px">{category4}</div>
              <div className="category5 raleway-semi-bold-black-14px">{category5}</div>
              <div className="text-1 raleway-semi-bold-black-13px">{text1}</div>
            </div>
          </div>
          <img className="lasermatelogo" src={laserMateLogo} />
        </div>
      </div>
      <div className="rectangle-43"></div>
      <div className="rectangle-42"></div>
      <div className="extrastext roboto-medium-black-19px">{extrasText}</div>
    </div>
  );
}


function Group4(props) {
  const { dishGreyBackground, dishImage, dishName, dishPrice } = props;

  return (
    <div className="group-4">
      <div className="overlap-group-2">
        <img className="dishgreybackground" src={dishGreyBackground} />
        <img className="dishimage" src={dishImage} />
        <div className="dishname raleway-semi-bold-black-15px">{dishName}</div>
        <div className="dishprice raleway-semi-bold-black-15px">{dishPrice}</div>
      </div>
    </div>
  );
}
const group4Data = {
    dishGreyBackground: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/dish-grey-background@1x.png",
    dishImage: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/dish-image@1x.png",
    dishName: "Takoyaki Octopus",
    dishPrice: "£4.20",
};

const group42Data = {
    dishGreyBackground: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/dish-grey-background@1x.png",
    dishImage: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/dish-image@1x.png",
    dishName: "Takoyaki Octopus",
    dishPrice: "£4.20",
};

const group43Data = {
    dishGreyBackground: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/dish-grey-background@1x.png",
    dishImage: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/dish-image@1x.png",
    dishName: "Takoyaki Octopus",
    dishPrice: "£4.20",
};

const group44Data = {
    dishGreyBackground: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/dish-grey-background@1x.png",
    dishImage: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/dish-image@1x.png",
    dishName: "Takoyaki Octopus",
    dishPrice: "£4.20",
};

const CustomerMealsData = {
    dishGreyBackground: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/dish-grey-background@1x.png",
    dishImage: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/dish-image@1x.png",
    dishName: "Takoyaki Octopus",
    dishPrice: "£4.20",
    dishGreyBackground2: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/dish-grey-background@1x.png",
    dishImage2: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/dish-image@1x.png",
    dishName2: "Takoyaki Octopus",
    dishPrice2: "£4.20",
    servingTimeIndicat: "Serving Time: 5pm-12pm",
    categoryName: "Starters",
    navBarFullLayout: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/blue-nav-bar@1x.png",
    spanText: "",
    spanText2: "Esushi, Glasgow, UK",
    text2: "<",
    category1: "Alcohol",
    category2: "Drinks ",
    category3: "Ramen",
    category4: "Sushi",
    category5: "Dessert",
    text1: ">",
    laserMateLogo: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/5ffc7b98bfc97e62c2dcaffe/img/image-16@1x.png",
    extrasText: "Pay",
    group4Props: group4Data,
    group42Props: group42Data,
    group43Props: group43Data,
    group44Props: group44Data,
};

