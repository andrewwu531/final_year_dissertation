import React from 'react';

function Order_Summary_Page() {

    const plus_sign = "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png";
    const minus_sign = "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png";

    return (
        <div>
            <div className="blue-nav-bar-1">
                <div className="order_summary_text">Order Summary</div>
            </div>
            <div className="text_group">
                <img className="plus_sign_1" alt="plus_sign" src={plus_sign} />
                <div className="quantity_1 raleway-semi-bold-black-16px"> 1 </div>
                <img className="minus_sign_1" alt="minus_sign" src={minus_sign} />
                <div className="order_1 raleway-semi-bold-black-13px">Albóndigas</div>
                
            </div>
            <div className="grey-background"></div>
        </div>
    );
}

export default Order_Summary_Page;




function App() {
  return (
    <div className="order-summary-page">
      <div className="overlap-group">
        <div className="whitebackground"></div>
        <div className="textbox"></div>
        <div className="text-2 raleway-semi-bold-black-17px">Special Requests</div>
        <div className="mealcometogethert raleway-semi-bold-black-14px">Meals Come Together?</div>
        <div className="ellipseradiobutton border-1-3px-dove-gray"></div>
        <div className="addtipstext raleway-semi-bold-black-14px">Add Tip</div>
        <img
          className="plusbutton"
          src="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-button@1x.png"
        />
        <div className="total raleway-semi-bold-black-14px">Total</div>
        <div className="x12010-1-tip raleway-semi-bold-black-14px">£120.10 + £1 (tip)</div>
        <img
          className="line"
          src="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/5ffc7b98bfc97e62c2dcaffe/img/line-2@1x.png"
        />
        <div className="repeatgridmealswhole">
          <div className="overlap-group3">
            <div className="group-17-3">
              <div className="x0">
                <Meal_group_1
                  plus_Sign="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png"
                  meal_Quantity="1"
                  minus_Sign="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png"
                  meal_Name="Ika Karaage"
                  meal_Price="£6.50"
                />
                <Meal_group_2
                  plus_Sign="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png"
                  meal_Quantity="1"
                  minus_Sign="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png"
                  meal_Name="Ika Karaage"
                  meal_Price="£6.50"
                />
                <Meal_group_2
                  plus_Sign="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png"
                  meal_Quantity="1"
                  minus_Sign="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png"
                  meal_Name="Ika Karaage"
                  meal_Price="£6.50"
                />
                <Meal_group_4
                  plus_Sign="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png"
                  meal_Quantity="1"
                  minus_Sign="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png"
                  meal_Name="Ika Karaage"
                  meal_Price="£6.50"
                />
                <Meal_group_4
                  plus_Sign="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png"
                  meal_Quantity="1"
                  minus_Sign="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png"
                  meal_Name="Ika Karaage"
                  meal_Price="£6.50"
                />
                <Meal_group_4
                  plus_Sign="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png"
                  meal_Quantity="1"
                  minus_Sign="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png"
                  meal_Name="Ika Karaage"
                  meal_Price="£6.50"
                />
              </div>
            </div>
            <div className="group-17-2">
              <div className="x01">
                <Meal_group_1
                  plus_Sign="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png"
                  meal_Quantity="1"
                  minus_Sign="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png"
                  meal_Name="Ika Karaage"
                  meal_Price="£6.50"
                />
                <Meal_group_2
                  plus_Sign="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png"
                  meal_Quantity="1"
                  minus_Sign="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png"
                  meal_Name="Ika Karaage"
                  meal_Price="£6.50"
                />
                <Meal_group_4
                  plus_Sign="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png"
                  meal_Quantity="1"
                  minus_Sign="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png"
                  meal_Name="Ika Karaage"
                  meal_Price="£6.50"
                />
                <Meal_group_4
                  plus_Sign="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png"
                  meal_Quantity="1"
                  minus_Sign="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png"
                  meal_Name="Ika Karaage"
                  meal_Price="£6.50"
                />
                <Meal_group_4
                  plus_Sign="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png"
                  meal_Quantity="1"
                  minus_Sign="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png"
                  meal_Name="Ika Karaage"
                  meal_Price="£6.50"
                />
                <Meal_group_4
                  plus_Sign="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png"
                  meal_Quantity="1"
                  minus_Sign="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png"
                  meal_Name="Ika Karaage"
                  meal_Price="£6.50"
                />
              </div>
            </div>
            <Group17
              meal_group_1Props={Group17Data.meal_group_1Props}
              meal_group_4Props={Group17Data.meal_group_4Props}
              meal_group_42Props={Group17Data.meal_group_42Props}
              meal_group_43Props={Group17Data.meal_group_43Props}
              meal_group_44Props={Group17Data.meal_group_44Props}
              meal_group_45Props={Group17Data.meal_group_45Props}
            />
            <Group17
              meal_group_1Props={Group172Data.meal_group_1Props}
              meal_group_4Props={Group172Data.meal_group_4Props}
              meal_group_42Props={Group172Data.meal_group_42Props}
              meal_group_43Props={Group172Data.meal_group_43Props}
              meal_group_44Props={Group172Data.meal_group_44Props}
              meal_group_45Props={Group172Data.meal_group_45Props}
              className="group-17"
            />
            <Group172 {...Group1722Data} />
            <Group172 {...Group1723Data} className="group-17-6" />
            <Group172 {...Group1724Data} className="group-17-5" />
            <Group172 {...Group1725Data} className="group-17-1" />
          </div>
        </div>
        <img
          className="bluenavbar"
          src="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/blue-nav-bar@1x.png"
        />
        <div className="ordersummarytext raleway-semi-bold-white-18px">Order Summary</div>
        <img
          className="lasermatelogo"
          src="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/laser-mate-logo@1x.png"
        />
      </div>
      <div className="flex-row">
        <div className="overlap-group1">
          <div className="rectangle"></div>
          <div className="backtomenutext raleway-semi-bold-black-15px">Back to Menu</div>
        </div>
        <div className="overlap-group2">
          <div className="rectangle"></div>
          <div className="text-1 raleway-semi-bold-black-15px">Enter Card Details</div>
        </div>
      </div>
    </div>
  );
}


function Meal_group_1(props) {
  const { plus_Sign, meal_Quantity, minus_Sign, meal_Name, meal_Price } = props;

  return (
    <div className="mealgroup1-1">
      <img className="plussign" src={plus_Sign} />
      <div className="mealquantity-1 raleway-medium-black-20px">{meal_Quantity}</div>
      <img className="minussign-1" src={minus_Sign} />
      <div className="mealname raleway-semi-bold-black-14-5px">{meal_Name}</div>
      <div className="mealprice raleway-semi-bold-black-14-5px">{meal_Price}</div>
    </div>
  );
}


function Meal_group_2(props) {
  const { plus_Sign, meal_Quantity, minus_Sign, meal_Name, meal_Price } = props;

  return (
    <div className="mealgroup">
      <img className="plussign" src={plus_Sign} />
      <div className="mealquantity raleway-medium-black-20px">{meal_Quantity}</div>
      <img className="minussign" src={minus_Sign} />
      <div className="mealname raleway-semi-bold-black-14-5px">{meal_Name}</div>
      <div className="mealprice raleway-semi-bold-black-14-5px">{meal_Price}</div>
    </div>
  );
}


function Meal_group_4(props) {
  const { plus_Sign, meal_Quantity, minus_Sign, meal_Name, meal_Price } = props;

  return (
    <div className="mealgroup">
      <img className="plussign" src={plus_Sign} />
      <div className="mealquantity raleway-medium-black-20px">{meal_Quantity}</div>
      <img className="minussign" src={minus_Sign} />
      <div className="mealname raleway-semi-bold-black-14-5px">{meal_Name}</div>
      <div className="mealprice raleway-semi-bold-black-14-5px">{meal_Price}</div>
    </div>
  );
}


function Group17(props) {
  const {
    meal_group_1Props,
    meal_group_4Props,
    meal_group_42Props,
    meal_group_43Props,
    meal_group_44Props,
    meal_group_45Props,
    className,
  } = props;

  return (
    <div className={`group-17-4 ${className || ""}`}>
      <div className="x02">
        <Meal_group_1
          plus_Sign={meal_group_1Props.plus_Sign}
          meal_Quantity={meal_group_1Props.meal_Quantity}
          minus_Sign={meal_group_1Props.minus_Sign}
          meal_Name={meal_group_1Props.meal_Name}
          meal_Price={meal_group_1Props.meal_Price}
        />
        <Meal_group_4
          plus_Sign={meal_group_4Props.plus_Sign}
          meal_Quantity={meal_group_4Props.meal_Quantity}
          minus_Sign={meal_group_4Props.minus_Sign}
          meal_Name={meal_group_4Props.meal_Name}
          meal_Price={meal_group_4Props.meal_Price}
        />
        <Meal_group_4
          plus_Sign={meal_group_42Props.plus_Sign}
          meal_Quantity={meal_group_42Props.meal_Quantity}
          minus_Sign={meal_group_42Props.minus_Sign}
          meal_Name={meal_group_42Props.meal_Name}
          meal_Price={meal_group_42Props.meal_Price}
        />
        <Meal_group_4
          plus_Sign={meal_group_43Props.plus_Sign}
          meal_Quantity={meal_group_43Props.meal_Quantity}
          minus_Sign={meal_group_43Props.minus_Sign}
          meal_Name={meal_group_43Props.meal_Name}
          meal_Price={meal_group_43Props.meal_Price}
        />
        <Meal_group_4
          plus_Sign={meal_group_44Props.plus_Sign}
          meal_Quantity={meal_group_44Props.meal_Quantity}
          minus_Sign={meal_group_44Props.minus_Sign}
          meal_Name={meal_group_44Props.meal_Name}
          meal_Price={meal_group_44Props.meal_Price}
        />
        <Meal_group_4
          plus_Sign={meal_group_45Props.plus_Sign}
          meal_Quantity={meal_group_45Props.meal_Quantity}
          minus_Sign={meal_group_45Props.minus_Sign}
          meal_Name={meal_group_45Props.meal_Name}
          meal_Price={meal_group_45Props.meal_Price}
        />
      </div>
    </div>
  );
}


function Group172(props) {
  const {
    plus_Sign,
    meal_Quantity,
    minus_Sign,
    meal_Name,
    meal_Price,
    meal_group_4Props,
    meal_group_42Props,
    meal_group_43Props,
    meal_group_44Props,
    meal_group_45Props,
    className,
  } = props;

  return (
    <div className={`group-17-7 ${className || ""}`}>
      <div className="x04">
        <div className="mealgroup1-1">
          <img className="plussign" src={plus_Sign} />
          <div className="mealquantity-1 raleway-medium-black-20px">{meal_Quantity}</div>
          <img className="minussign-1" src={minus_Sign} />
          <div className="mealname raleway-semi-bold-black-14-5px">{meal_Name}</div>
          <div className="mealprice raleway-semi-bold-black-14-5px">{meal_Price}</div>
        </div>
        <Meal_group_4
          plus_Sign={meal_group_4Props.plus_Sign}
          meal_Quantity={meal_group_4Props.meal_Quantity}
          minus_Sign={meal_group_4Props.minus_Sign}
          meal_Name={meal_group_4Props.meal_Name}
          meal_Price={meal_group_4Props.meal_Price}
        />
        <Meal_group_4
          plus_Sign={meal_group_42Props.plus_Sign}
          meal_Quantity={meal_group_42Props.meal_Quantity}
          minus_Sign={meal_group_42Props.minus_Sign}
          meal_Name={meal_group_42Props.meal_Name}
          meal_Price={meal_group_42Props.meal_Price}
        />
        <Meal_group_4
          plus_Sign={meal_group_43Props.plus_Sign}
          meal_Quantity={meal_group_43Props.meal_Quantity}
          minus_Sign={meal_group_43Props.minus_Sign}
          meal_Name={meal_group_43Props.meal_Name}
          meal_Price={meal_group_43Props.meal_Price}
        />
        <Meal_group_4
          plus_Sign={meal_group_44Props.plus_Sign}
          meal_Quantity={meal_group_44Props.meal_Quantity}
          minus_Sign={meal_group_44Props.minus_Sign}
          meal_Name={meal_group_44Props.meal_Name}
          meal_Price={meal_group_44Props.meal_Price}
        />
        <Meal_group_4
          plus_Sign={meal_group_45Props.plus_Sign}
          meal_Quantity={meal_group_45Props.meal_Quantity}
          minus_Sign={meal_group_45Props.minus_Sign}
          meal_Name={meal_group_45Props.meal_Name}
          meal_Price={meal_group_45Props.meal_Price}
        />
      </div>
    </div>
  );
}
const meal_group_1Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const meal_group_4Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const meal_group_42Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const meal_group_43Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const meal_group_44Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const meal_group_45Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const Group17Data = {
    meal_group_1Props: meal_group_1Data,
    meal_group_4Props: meal_group_4Data,
    meal_group_42Props: meal_group_42Data,
    meal_group_43Props: meal_group_43Data,
    meal_group_44Props: meal_group_44Data,
    meal_group_45Props: meal_group_45Data,
};

const meal_group_12Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const meal_group_46Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const meal_group_47Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const meal_group_48Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const meal_group_49Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const meal_group_410Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const Group172Data = {
    meal_group_1Props: meal_group_12Data,
    meal_group_4Props: meal_group_46Data,
    meal_group_42Props: meal_group_47Data,
    meal_group_43Props: meal_group_48Data,
    meal_group_44Props: meal_group_49Data,
    meal_group_45Props: meal_group_410Data,
};

const meal_group_411Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const meal_group_412Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const meal_group_413Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const meal_group_414Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const meal_group_415Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const Group1722Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
    meal_group_4Props: meal_group_411Data,
    meal_group_42Props: meal_group_412Data,
    meal_group_43Props: meal_group_413Data,
    meal_group_44Props: meal_group_414Data,
    meal_group_45Props: meal_group_415Data,
};

const meal_group_416Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const meal_group_417Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const meal_group_418Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const meal_group_419Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const meal_group_420Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const Group1723Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
    meal_group_4Props: meal_group_416Data,
    meal_group_42Props: meal_group_417Data,
    meal_group_43Props: meal_group_418Data,
    meal_group_44Props: meal_group_419Data,
    meal_group_45Props: meal_group_420Data,
};

const meal_group_421Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const meal_group_422Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const meal_group_423Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const meal_group_424Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const meal_group_425Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const Group1724Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
    meal_group_4Props: meal_group_421Data,
    meal_group_42Props: meal_group_422Data,
    meal_group_43Props: meal_group_423Data,
    meal_group_44Props: meal_group_424Data,
    meal_group_45Props: meal_group_425Data,
};

const meal_group_426Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const meal_group_427Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const meal_group_428Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const meal_group_429Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const meal_group_430Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
};

const Group1725Data = {
    plus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png",
    meal_Quantity: "1",
    minus_Sign: "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png",
    meal_Name: "Ika Karaage",
    meal_Price: "£6.50",
    meal_group_4Props: meal_group_426Data,
    meal_group_42Props: meal_group_427Data,
    meal_group_43Props: meal_group_428Data,
    meal_group_44Props: meal_group_429Data,
    meal_group_45Props: meal_group_430Data,
};

