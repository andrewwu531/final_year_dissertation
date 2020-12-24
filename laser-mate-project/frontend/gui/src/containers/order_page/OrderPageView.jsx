import React from "react";
import "./OrderPageView.scss";

function App() {
  return <FoodAndDrinkOrderingPlatform6 {...foodAndDrinkOrderingPlatform6Data} />;
}

export default App;


function FoodAndDrinkOrderingPlatform6(props) {
  const {
    alcohol,
    drinks,
    starters,
    x26,
    spanText,
    spanText2,
    ramen,
    sushi,
    image11,
    x38,
    starters2,
    polygon3,
    image3,
    image4,
    ikaKaraage,
    x650,
    image5,
    image32,
    takoyakiOctopus,
    x420,
    image6,
    image52,
    image33,
    edamame,
    x460,
    image7,
    image53,
    image34,
    softShellCrabSalad,
    x580,
    image8,
    image54,
    goToPayment,
    polygon1,
  } = props;

  return (
    <div className="food-and-drink-ordering-platform-6">
      <div className="auto-flex1-C61RwL">
        <div className="overlap-group-uxzUmT">
          <div className="rectangle-10"></div>
          <div className="rectangle-4"></div>
          <div className="alcohol raleway-semi-bold-black-13px">{alcohol}</div>
          <div className="drinks raleway-semi-bold-black-13px">{drinks}</div>
          <div className="starters-NOBY2w raleway-semi-bold-black-13px">{starters}</div>
          <div className="x-NOBY2w raleway-semi-bold-black-13px">{x26}</div>
          <div className="e-sushi-13-rd-glasgow raleway-semi-bold-white-17px">
            <span className="span0-DIxPHv">{spanText}</span>
            <span className="span1-DIxPHv">{spanText2}</span>
          </div>
          <div className="ramen raleway-semi-bold-black-13px">{ramen}</div>
          <div className="sushi raleway-semi-bold-black-13px">{sushi}</div>
          <img className="image-11" src={image11} />
          <div className="x-kwy4Oh raleway-semi-bold-black-13px">{x38}</div>
        </div>
        <h1 className="starters-uxzUmT raleway-semi-bold-black-25px">{starters2}</h1>
      </div>
      <div className="auto-flex4-C61RwL">
        <div className="auto-flex3-Xa1OFb">
          <div className="auto-flex-fCNQqZ">
            <img className="polygon-3" src={polygon3} />
            <div className="overlap-group2-eOmFi2">
              <img className="image-3" src={image3} />
              <div className="rectangle-6"></div>
              <img className="image-4" src={image4} />
              <div className="ika-karaage raleway-semi-bold-black-13px">{ikaKaraage}</div>
              <div className="x650 raleway-semi-bold-black-13px">{x650}</div>
              <img className="image-5-65UnHp" src={image5} />
            </div>
            <div className="overlap-group3-eOmFi2">
              <img className="image-3" src={image32} />
              <div className="rectangle-"></div>
              <div className="takoyaki-octopus raleway-semi-bold-black-13px">{takoyakiOctopus}</div>
              <div className="x420 raleway-semi-bold-black-13px">{x420}</div>
              <img className="image-6" src={image6} />
              <img className="image-5-aCHwQo" src={image52} />
            </div>
          </div>
          <div className="auto-flex2-fCNQqZ">
            <div className="overlap-group4-MhDiGq">
              <img className="image-3" src={image33} />
              <div className="rectangle-"></div>
              <div className="edamame raleway-semi-bold-black-13px">{edamame}</div>
              <div className="x460 raleway-semi-bold-black-13px">{x460}</div>
              <img className="image-7" src={image7} />
              <img className="image-5-YASm9a" src={image53} />
            </div>
            <div className="overlap-group5-MhDiGq">
              <img className="image-3" src={image34} />
              <div className="rectangle-"></div>
              <div className="soft-shell-crab-salad raleway-semi-bold-black-13px">{softShellCrabSalad}</div>
              <div className="x580 raleway-semi-bold-black-13px">{x580}</div>
              <img className="image-8" src={image8} />
              <img className="image-5-iUezIo" src={image54} />
            </div>
          </div>
          <div className="overlap-group1-fCNQqZ">
            <div className="rectangle-1"></div>
            <div className="go-to-payment raleway-semi-bold-white-15px">{goToPayment}</div>
          </div>
        </div>
        <img className="polygon-1" src={polygon1} />
      </div>
    </div>
  );
}
const foodAndDrinkOrderingPlatform6Data = {
    alcohol: "Alcohol",
    drinks: "Drinks",
    starters: "Starters",
    x26: ">",
    spanText: "",
    spanText2: "E-sushi, 130-132 Byres Rd, Glasgow",
    ramen: "Ramen",
    sushi: "Sushi",
    image11: "https://anima-uploads.s3.amazonaws.com/projects/5fde5ab0746ef40da36af483/releases/5fde5b01c250e07ea6d8ff89/img/image-11@1x.png",
    x38: ">",
    starters2: "Starters",
    polygon3: "https://anima-uploads.s3.amazonaws.com/projects/5fde5ab0746ef40da36af483/releases/5fde5b01c250e07ea6d8ff89/img/polygon-3@1x.png",
    image3: "https://anima-uploads.s3.amazonaws.com/projects/5fde5ab0746ef40da36af483/releases/5fde5b01c250e07ea6d8ff89/img/image-3@1x.png",
    image4: "https://anima-uploads.s3.amazonaws.com/projects/5fde5ab0746ef40da36af483/releases/5fde5b01c250e07ea6d8ff89/img/image-4@1x.png",
    ikaKaraage: "Ika Karaage",
    x650: "£6.50",
    image5: "https://anima-uploads.s3.amazonaws.com/projects/5fde5ab0746ef40da36af483/releases/5fde5b01c250e07ea6d8ff89/img/image-5@1x.png",
    image32: "https://anima-uploads.s3.amazonaws.com/projects/5fde5ab0746ef40da36af483/releases/5fde5b01c250e07ea6d8ff89/img/image-3@1x.png",
    takoyakiOctopus: "Takoyaki Octopus",
    x420: "£4.20",
    image6: "https://anima-uploads.s3.amazonaws.com/projects/5fde5ab0746ef40da36af483/releases/5fde5b01c250e07ea6d8ff89/img/image-6@1x.png",
    image52: "https://anima-uploads.s3.amazonaws.com/projects/5fde5ab0746ef40da36af483/releases/5fde5b01c250e07ea6d8ff89/img/image-5@1x.png",
    image33: "https://anima-uploads.s3.amazonaws.com/projects/5fde5ab0746ef40da36af483/releases/5fde5b01c250e07ea6d8ff89/img/image-3@1x.png",
    edamame: "Edamame",
    x460: "£4.60",
    image7: "https://anima-uploads.s3.amazonaws.com/projects/5fde5ab0746ef40da36af483/releases/5fde5b01c250e07ea6d8ff89/img/image-7@1x.png",
    image53: "https://anima-uploads.s3.amazonaws.com/projects/5fde5ab0746ef40da36af483/releases/5fde5b01c250e07ea6d8ff89/img/image-5@1x.png",
    image34: "https://anima-uploads.s3.amazonaws.com/projects/5fde5ab0746ef40da36af483/releases/5fde5b01c250e07ea6d8ff89/img/image-3@1x.png",
    softShellCrabSalad: "Soft Shell Crab Salad",
    x580: "£5.80",
    image8: "https://anima-uploads.s3.amazonaws.com/projects/5fde5ab0746ef40da36af483/releases/5fde5b01c250e07ea6d8ff89/img/image-8@1x.png",
    image54: "https://anima-uploads.s3.amazonaws.com/projects/5fde5ab0746ef40da36af483/releases/5fde5b01c250e07ea6d8ff89/img/image-5@1x.png",
    goToPayment: "Go to Payment",
    polygon1: "https://anima-uploads.s3.amazonaws.com/projects/5fde5ab0746ef40da36af483/releases/5fde5b01c250e07ea6d8ff89/img/polygon-1@1x.png",
};

