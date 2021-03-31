import React from 'react';
import { useLocation } from 'react-router-dom';

function Order_Summary_Page() {

    const plus_sign = "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/plus-sign@1x.png";
    const minus_sign = "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6060c799c1e2b7d01501544a/img/minus-sign@1x.png";
    const line = "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/5ffc7b98bfc97e62c2dcaffe/img/line-2@1x.png";

    const location = useLocation();
    const full_path = location.pathname;
    const path_split = full_path.split('/');
    const restaurant_id_path = path_split[1];
    const table_number_path = path_split[2];

    const dishes = [];

    dishes.push("1");
    dishes.push("2");
    dishes.push("3");
    dishes.push("4");
    dishes.push("5");
    dishes.push("6");
    dishes.push("7");
    dishes.push("8");

    return (
        <div>
            <div className="blue-nav-bar-1">
                <div className="order_summary_text">Order Summary</div>
            </div>
            <div>
              {dishes.map((dish, i) => (
              
                <div className="text_group">
                    <img className="plus_sign_1" alt="plus_sign" src={plus_sign} />
                    <div className="quantity_1 raleway-semi-bold-black-16px"> 1 </div>
                    <img className="minus_sign_1" alt="minus_sign" src={minus_sign} />
                    <div className="order_1 raleway-semi-bold-black-13px">Albóndigas</div>
                    <div className="order_price raleway-semi-bold-black-13px">£6.50</div>
                </div>
              
              ))}
            </div>
            <img className="order_line" alt="line" src={line} /> 
            <div className="order_total_text raleway-semi-bold-black-12px">Total</div>
            <div className="order_total_price raleway-semi-bold-black-12px">£53.00 + £0.00 (tip)</div>
            <div className="add_tips raleway-semi-bold-black-12px">Add tips</div>
            <img className="add_tips_button" alt="add_tips_button" src={plus_sign} />
            <div className="meal_come_together raleway-semi-bold-black-12px">Order Come Together?</div>
            <div className="order_summary_radio_button border-1-3px-dove-gray"></div>
            <div className="special_request_text raleway-semi-bold-black-15px">Special Request</div>
            <div className="special_request_textbox"></div>
            <div className="order_rectangle"></div>
            <a href={'/' + restaurant_id_path + '/' + table_number_path} className="order_backtomenu raleway-semi-bold-black-15px">Back to Menu</a>
            <div className="order_rectangle_1"></div>
            <div className="order_entercarddetails raleway-semi-bold-black-15px">Enter Card Details</div>
            <div className="order-grey-background"></div>
        </div>
    );
}

export default Order_Summary_Page;



