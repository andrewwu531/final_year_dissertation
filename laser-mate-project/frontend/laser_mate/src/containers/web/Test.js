import React from "react";

function App() {
  return (
    <div className="meals-interface-m1c1-2 animate-enter">
      <Pay_Button2>Cart</Pay_Button2>
      <div className="help segoeui-bold-alizarin-crimson-20px">Help</div>
      <div className="servingtimeindicat raleway-semi-bold-black-17px">Serving Time: 5pm-12pm</div>
      <div className="categoryname raleway-semi-bold-black-23px">Maki</div>
      <div className="overlap-group">
        <div className="first-four-meals">
          <div className="overlap-group2-1">
            <div className="rectangle-four-meals">
              <div className="inner-rectangle-four-meals">
                <div className="group-3">
                  <div className="overlap-group-1">
                    <img
                      className="dishgreybackground"
                      src="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6063286fcc6938f815b56cf6/img/dish-grey-background@1x.png"
                    />
                    <img
                      className="dishimage"
                      src="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6063286fcc6938f815b56cf6/img/dish-image-2@1x.png"
                    />
                    <div className="dishname-2 raleway-semi-bold-black-15px">Dragon Maki</div>
                    <div className="dishprice raleway-semi-bold-black-15px">£13.20</div>
                  </div>
                </div>
                <div className="flex-col">
                  <div className="group-2">
                    <div className="overlap-group-1">
                      <img
                        className="dishgreybackground"
                        src="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6063286fcc6938f815b56cf6/img/dish-grey-background@1x.png"
                      />
                      <img
                        className="dishimage"
                        src="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6063286fcc6938f815b56cf6/img/dish-image-1@1x.png"
                      />
                      <div className="dishname raleway-semi-bold-black-15px">Crab Maki</div>
                      <div className="dishprice raleway-semi-bold-black-15px">£13.50</div>
                    </div>
                  </div>
                  <div className="meal-4">
                    <div className="overlap-group-1">
                      <img
                        className="dishgreybackground"
                        src="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6063286fcc6938f815b56cf6/img/dish-grey-background@1x.png"
                      />
                      <img
                        className="dishimage"
                        src="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6063286fcc6938f815b56cf6/img/dish-image-3@1x.png"
                      />
                      <div className="dishname-1 raleway-semi-bold-black-15px">Duck Maki</div>
                      <div className="dishprice raleway-semi-bold-black-15px">£13.90</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ellipse-white"></div>
            <div className="ellipse-blue"></div>
          </div>
        </div>
        <img
          className="okimage"
          src="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6063286fcc6938f815b56cf6/img/ok-image-1@1x.png"
        />
      </div>
      <div className="overlap-group1">
        <div className="white-bar"></div>
        <div className="navbarfulllayout">
          <div className="restaurantaddress raleway-semi-bold-white-17px">
            <span className="span0"></span>
            <span className="span1">Esushi, Glasgow, UK</span>
          </div>
          <div className="overlap-group2">
            <div className="text-1 raleway-semi-bold-black-13px">&lt;</div>
            <div className="drinks raleway-semi-bold-black-14px">Drinks</div>
            <div className="category2 raleway-semi-bold-black-14px">Starters</div>
            <div className="category3 raleway-semi-bold-black-14px">Handrolls</div>
            <div className="category4 raleway-semi-bold-black-14px">Maki</div>
            <div className="category5 raleway-semi-bold-black-14px">Donburi</div>
          </div>
        </div>
        <img
          className="lasermatelogo"
          src="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/laser-mate-logo@1x.png"
        />
        <img
          className="first-swipping-category-bar"
          src="https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/601c08108c1c1d1ca8ea032a/img/first-swipping-category-bar-@1x.png"
        />
      </div>
    </div>
  );
}

export default App;


function Pay_Button2(props) {
  const { children } = props;

  return (
    <div className="pay-button">
      <div className="paytext roboto-medium-black-19px">{children}</div>
    </div>
  );
}
