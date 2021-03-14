import React from "react";

function App() {
  return <Order_Summary {...Order_Summary2Data} />;
}

export default App;


function Order_Summary(props) {
  const {
    image16,
    orderSummary,
    line2,
    total,
    specialRequests,
    x120101Tip,
    scrollGroup3,
    addTip,
    text1,
    image5,
    ellipse1,
    ellipse2,
    ellipse3,
    backToMenu,
    enterCardDetails,
  } = props;

  return (
    <div className="ordersummary-2">
      <div className="overlap-group">
        <img className="image-16" src={image16} />
        <div className="order-summary raleway-semi-bold-white-18px">{orderSummary}</div>
      </div>
      <div className="overlap-group2">
        <div className="rectangle-46"></div>
        <img className="line-2" src={line2} />
        <div className="total raleway-semi-bold-black-14px">{total}</div>
        <div className="special-requests raleway-semi-bold-black-17px">{specialRequests}</div>
        <div className="rectangle-12"></div>
        <div className="x12010-1-tip raleway-semi-bold-black-14px">{x120101Tip}</div>
        <img className="scroll-group-3" src={scrollGroup3} />
        <div className="add-tip raleway-semi-bold-black-14px">{addTip}</div>
        <div className="text-1 raleway-semi-bold-black-14px">{text1}</div>
        <img className="image-5" src={image5} />
        <img className="ellipse-1" src={ellipse1} />
        <img className="ellipse-2" src={ellipse2} />
        <img className="ellipse-3" src={ellipse3} />
      </div>
      <div className="flex-row">
        <div className="overlap-group3">
          <div className="rectangle-1"></div>
          <div className="back-to-menu raleway-semi-bold-black-15px">{backToMenu}</div>
        </div>
        <div className="overlap-group1">
          <div className="rectangle-1"></div>
          <div className="enter-card-details raleway-semi-bold-black-15px">{enterCardDetails}</div>
        </div>
      </div>
    </div>
  );
}


function Group17(props) {
  const { x01Props, x012Props, x013Props, x014Props, x015Props, x016Props, x017Props, className } = props;

  return (
    <div className={`group-17 ${className || ""}`}>
      <div className="repeat-grid-4">
        <X01
          image5={x01Props.image5}
          number={x01Props.number}
          image10={x01Props.image10}
          ikaKaraage={x01Props.ikaKaraage}
          price={x01Props.price}
        />
        <X01
          image5={x012Props.image5}
          number={x012Props.number}
          image10={x012Props.image10}
          ikaKaraage={x012Props.ikaKaraage}
          price={x012Props.price}
          className="x1"
        />
        <X01
          image5={x013Props.image5}
          number={x013Props.number}
          image10={x013Props.image10}
          ikaKaraage={x013Props.ikaKaraage}
          price={x013Props.price}
          className="x2"
        />
        <X01
          image5={x014Props.image5}
          number={x014Props.number}
          image10={x014Props.image10}
          ikaKaraage={x014Props.ikaKaraage}
          price={x014Props.price}
          className="x3"
        />
        <X01
          image5={x015Props.image5}
          number={x015Props.number}
          image10={x015Props.image10}
          ikaKaraage={x015Props.ikaKaraage}
          price={x015Props.price}
          className="x4"
        />
        <X01
          image5={x016Props.image5}
          number={x016Props.number}
          image10={x016Props.image10}
          ikaKaraage={x016Props.ikaKaraage}
          price={x016Props.price}
          className="x5"
        />
        <X01
          image5={x017Props.image5}
          number={x017Props.number}
          image10={x017Props.image10}
          ikaKaraage={x017Props.ikaKaraage}
          price={x017Props.price}
          className="x6"
        />
      </div>
    </div>
  );
}


function X01(props) {
  const { image5, number, image10, ikaKaraage, price, className } = props;

  return (
    <div className={`x0-1 ${className || ""}`}>
      <img className="image-5-1" src={image5} />
      <div className="number raleway-medium-black-20px">{number}</div>
      <img className="image-10" src={image10} />
      <div className="ika-karaage raleway-semi-bold-black-14-5px">{ikaKaraage}</div>
      <div className="price raleway-semi-bold-black-14-5px">{price}</div>
    </div>
  );
}
const x01Data = {
    image5: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-5-1@1x.png",
    number: "1",
    image10: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-10@1x.png",
    ikaKaraage: "Ika Karaage",
    price: "£6.50",
};

const x012Data = {
    image5: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-5-1@1x.png",
    number: "1",
    image10: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-10@1x.png",
    ikaKaraage: "Ika Karaage",
    price: "£6.50",
};

const x013Data = {
    image5: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-5-1@1x.png",
    number: "1",
    image10: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-10@1x.png",
    ikaKaraage: "Ika Karaage",
    price: "£6.50",
};

const x014Data = {
    image5: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-5-1@1x.png",
    number: "1",
    image10: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-10@1x.png",
    ikaKaraage: "Ika Karaage",
    price: "£6.50",
};

const x015Data = {
    image5: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-5-1@1x.png",
    number: "1",
    image10: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-10@1x.png",
    ikaKaraage: "Ika Karaage",
    price: "£6.50",
};

const x016Data = {
    image5: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-5-1@1x.png",
    number: "1",
    image10: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-10@1x.png",
    ikaKaraage: "Ika Karaage",
    price: "£6.50",
};

const x017Data = {
    image5: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-5-1@1x.png",
    number: "1",
    image10: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-10@1x.png",
    ikaKaraage: "Ika Karaage",
    price: "£6.50",
};

const group17Data = {
    x01Props: x01Data,
    x012Props: x012Data,
    x013Props: x013Data,
    x014Props: x014Data,
    x015Props: x015Data,
    x016Props: x016Data,
    x017Props: x017Data,
};

const x018Data = {
    image5: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-5-1@1x.png",
    number: "1",
    image10: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-10@1x.png",
    ikaKaraage: "Ika Karaage",
    price: "£6.50",
};

const x019Data = {
    image5: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-5-1@1x.png",
    number: "1",
    image10: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-10@1x.png",
    ikaKaraage: "Ika Karaage",
    price: "£6.50",
};

const x0110Data = {
    image5: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-5-1@1x.png",
    number: "1",
    image10: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-10@1x.png",
    ikaKaraage: "Ika Karaage",
    price: "£6.50",
};

const x0111Data = {
    image5: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-5-1@1x.png",
    number: "1",
    image10: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-10@1x.png",
    ikaKaraage: "Ika Karaage",
    price: "£6.50",
};

const x0112Data = {
    image5: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-5-1@1x.png",
    number: "1",
    image10: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-10@1x.png",
    ikaKaraage: "Ika Karaage",
    price: "£6.50",
};

const x0113Data = {
    image5: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-5-1@1x.png",
    number: "1",
    image10: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-10@1x.png",
    ikaKaraage: "Ika Karaage",
    price: "£6.50",
};

const x0114Data = {
    image5: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-5-1@1x.png",
    number: "1",
    image10: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/image-10@1x.png",
    ikaKaraage: "Ika Karaage",
    price: "£6.50",
};

const group172Data = {
    x01Props: x018Data,
    x012Props: x019Data,
    x013Props: x0110Data,
    x014Props: x0111Data,
    x015Props: x0112Data,
    x016Props: x0113Data,
    x017Props: x0114Data,
};

const Order_Summary2Data = {
    image16: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/5ffc7b98bfc97e62c2dcaffe/img/image-16@1x.png",
    orderSummary: "Order Summary",
    line2: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/5ffc7b98bfc97e62c2dcaffe/img/line-2@1x.png",
    total: "Total",
    specialRequests: "Special Requests",
    x120101Tip: "£120.10 + £1 (tip)",
    scrollGroup3: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/601c08108c1c1d1ca8ea032a/img/scroll-group-3-1@1x.png",
    addTip: "Add Tip",
    text1: "Meals Come Together?",
    image5: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/5ffc7b98bfc97e62c2dcaffe/img/image-5@1x.png",
    ellipse1: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/ellipse-1@1x.png",
    ellipse2: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/601c08108c1c1d1ca8ea032a/img/ellipse-2-1@1x.png",
    ellipse3: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/601c08108c1c1d1ca8ea032a/img/ellipse-2@1x.png",
    backToMenu: "Back to Menu",
    enterCardDetails: "Enter Card Details",
    group17Props: group17Data,
    group172Props: group172Data,
};

