import React from "react";

function App() {
  return <CustomerMeal {...customerMealData} />;
}

export default App;


function CustomerMeal(props) {
  const {
    navBarFullLayout,
    spanText,
    spanText2,
    text3,
    category1,
    category2,
    category3,
    category4,
    category5,
    text2,
    laserMateLogo,
    mealImage,
    mealName,
    mealDescrptions,
    plus,
    number,
    minus,
    extrasText,
    extraClickbox,
    extraDetails,
    text1,
    addToBillsText,
    cancelText,
  } = props;

  return (
    <div className="customermeal">
      <div className="overlap-group1">
        <div className="navbarfulllayout" style={{ backgroundImage: `url(${navBarFullLayout})` }}>
          <div className="restaurantaddress raleway-semi-bold-white-17px">
            <span className="span0">{spanText}</span>
            <span className="span1">{spanText2}</span>
          </div>
          <div className="overlap-group">
            <div className="text-3 raleway-semi-bold-black-13px">{text3}</div>
            <div className="category1 raleway-semi-bold-black-13px">{category1}</div>
            <div className="category2 raleway-semi-bold-black-13px">{category2}</div>
            <div className="category3 raleway-semi-bold-black-13px">{category3}</div>
            <div className="category4 raleway-semi-bold-black-13px">{category4}</div>
            <div className="category5 raleway-semi-bold-black-13px">{category5}</div>
            <div className="text-2 raleway-semi-bold-black-13px">{text2}</div>
          </div>
        </div>
        <img className="lasermatelogo" src={laserMateLogo} />
      </div>
      <div className="meal-details">
        <img className="mealimage" src={mealImage} />
        <div className="auto-flex2">
          <div className="overlap-group-1">
            <div className="mealrectangle"></div>
            <div className="mealname raleway-semi-bold-black-20px">{mealName}</div>
          </div>
          <p className="mealdescrptions raleway-semi-bold-black-13px">{mealDescrptions}</p>
          <div className="auto-flex1">
            <img className="plus" src={plus} />
            <div className="number raleway-semi-bold-black-20px">{number}</div>
            <img className="minus" src={minus} />
          </div>
        </div>
      </div>
      <div className="extras">
        <div className="auto-flex3">
          <div className="extrastext raleway-semi-bold-black-17px">{extrasText}</div>
          <img className="extraclickbox" src={extraClickbox} />
        </div>
        <div className="extradetails raleway-semi-bold-black-17px">{extraDetails}</div>
      </div>
      <div className="special-requests">
        <div className="text-1 raleway-semi-bold-black-17px">{text1}</div>
        <div className="textentry"></div>
      </div>
      <div className="auto-flex">
        <div className="button-addto-bills">
          <div className="addtobillstext raleway-semi-bold-white-15px">{addToBillsText}</div>
        </div>
        <div className="button-cancel">
          <div className="canceltext raleway-semi-bold-white-15px">{cancelText}</div>
        </div>
      </div>
    </div>
  );
}
const customerMealData = {
    navBarFullLayout: "https://anima-uploads.s3.amazonaws.com/projects/5ff8630ba446f0f86bcf17a3/releases/5ff8b65e0828f884ff28d424/img/blue-nav-bar@1x.png",
    spanText: "",
    spanText2: "Esushi, Glasgow, UK",
    text3: "<",
    category1: "Alcohol",
    category2: "Drinks ",
    category3: "Ramen",
    category4: "Sushi",
    category5: "Dessert",
    text2: ">",
    laserMateLogo: "https://anima-uploads.s3.amazonaws.com/projects/5ff8630ba446f0f86bcf17a3/releases/5ff8631af6a4ee3798a7cdc7/img/image-16@1x.png",
    mealImage: "https://anima-uploads.s3.amazonaws.com/projects/5ff8630ba446f0f86bcf17a3/releases/5ff8631af6a4ee3798a7cdc7/img/image-4-4@1x.png",
    mealName: "Ika Karaage",
    mealDescrptions: <>Fried squid with <br/>chill, sesame and <br/>sea salt</>,
    plus: "https://anima-uploads.s3.amazonaws.com/projects/5ff8630ba446f0f86bcf17a3/releases/5ff8631af6a4ee3798a7cdc7/img/image-5@1x.png",
    number: "1",
    minus: "https://anima-uploads.s3.amazonaws.com/projects/5ff8630ba446f0f86bcf17a3/releases/5ff8631af6a4ee3798a7cdc7/img/image-10@1x.png",
    extrasText: "Extras",
    extraClickbox: "https://anima-uploads.s3.amazonaws.com/projects/5ff8630ba446f0f86bcf17a3/releases/5ff8631af6a4ee3798a7cdc7/img/ellipse-3@1x.png",
    extraDetails: "Extra Salt & Pepper",
    text1: "Special Requests",
    addToBillsText: "Add to Bills",
    cancelText: "Cancel",
};

