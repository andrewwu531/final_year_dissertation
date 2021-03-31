import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, A11y } from "swiper";
import { connect } from "react-redux";
import "swiper/components/pagination/pagination.scss";
import "swiper/swiper.scss";

import { useDishes } from "../hooks/Hooks";
import Categories from "./Categories";

SwiperCore.use([Pagination, A11y]);


const Dishes = ({ category_id }) => {
  const [dishPages, setDishPages] = useState([]);
  const { dishes } = useDishes(category_id);

  const url = "http://localhost:8000";
  const grey_image =
    "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/dish-grey-background@1x.png";

  const ok_image =
    "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/6063286fcc6938f815b56cf6/img/ok-image-1@1x.png";


  useEffect(() => {
    let count = 1;
    setDishPages([]);
    const total = [1];

    for (const i in dishes) {
      count++;
      if (count == 4) {
        count = 1;
        total.push(total.length + 1);
      }
    }

    setDishPages(total);
  }, [dishes]);

  return (

    <div>
        {/* <div className='category_display'>
            Main Course
        </div> */}
         
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        >

        {dishPages.map((p, index) => (
            
            <SwiperSlide key={index}>

              <div className="dishes">
                {dishes.slice(index * 4, (index + 1) * 4).map((dish, i) => (
                  
                <div key={i} className="dish">
                    <img className="dish-image" src={url + dish.photo} />
                    <img className="grey-background" src={grey_image} />
                    <div className='dish-descriptions'> {dish.description}</div>
                    <div className="dish-price">£{dish.price}</div>
                </div>
                ))}
              </div> 

            </SwiperSlide>
        ))}

        <div className='swiper'></div>
        </Swiper>
    </div>
  );
};


export default connect((store) => ({ ...store.category }))(Dishes);
