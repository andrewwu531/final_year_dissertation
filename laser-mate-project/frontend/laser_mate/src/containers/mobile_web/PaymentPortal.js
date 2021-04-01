import React from 'react';


function Payment_Portal_Page() {

    const line = "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/5ffc7b98bfc97e62c2dcaffe/img/line-2@1x.png";
    const line2 = "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/5ffc7b98bfc97e62c2dcaffe/img/line-3@1x.png";
    
    return (
        <div>
            <div className="blue-nav-bar-2">
                <div className="payment-portal-text">Payment Portal</div>
            </div>
            <div className="payment-total-text raleway-semi-bold-black-13px">Total</div>
                <div className="payment-total-price raleway-semi-bold-black-13px">£53.50</div>
                <img className="payment-line-1" alt="line" src={line} /> 
                <div className="payment-click-text raleway-semi-bold-black-16px">click</div>
                <div className="payment-to-scan-card-text raleway-semi-bold-black-16px">to scan card</div> 
                <img className="payment-line-2" alt="line-1" src={line2} /> 
        </div>
    )

}

export default Payment_Portal_Page;