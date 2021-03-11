import React, { useState, useEffect } from 'react';
import axios from 'axios';

// function DishesApp() {
//     return <Dishes {...CustomerMealsData} />;
// }

// export default DishesApp;

const Dishes = (props) => {

    let dishes_brief = []

    const {
        payText,
        help,
        servingTimeIndicat,
        categoryName,
        dishGreyBackground,
        dishImage,
        dishName,
        dishPrice,
        dishGreyBackground2,
        dishImage2,
        dishName2,
        dishPrice2,
        ellipseWhite,
        ellipseBlue,
        dishGreyBackground3,
        dishImage3,
        dishName3,
        dishPrice3,
        dishGreyBackground4,
        dishImage4,
        dishName4,
        dishPrice4,
        ellipseWhite2,
        ellipseBlue2,
        navBarFullLayout,
        spanText,
        text2,
        drinks,
        category2,
        category3,
        category4,
        category5,
        text1,
        laserMateLogo,
        category52,
        firstSwippingCategoryBar,
        group2Props,
        meal4Props,
        meal42Props,
        group22Props,
    } = props;

    const [restaurantServingTimesCategorydishes, setRestaurantServingTimesCategorydishes] = useState({});
    var restaurant_serving_time_category_id = props.categories_id[0];
    // props.categories_id[0];


    console.log("dish");
    console.log(restaurant_serving_time_category_id);

    useEffect(() => {
        console.log("again");
        console.log(restaurant_serving_time_category_id);

        //restaurant_serving_time_category_id = restaurantServingTimeCategories[0].restaurant_serving_time_category_id;
        axios.post(`http://localhost:8000/api/restaurant_serving_time_category_dishes/search`, { restaurant_serving_time_category_id })
            .then(res => {
                console.log("useEffect | dishes ---------- ");
                console.log(res.data);
                setRestaurantServingTimesCategorydishes(res.data);
            })
            .catch(err => {
            });
    }, [restaurant_serving_time_category_id]);

    const computeDishes = () => {
        console.log("computeDishes ");
        console.log(restaurantServingTimesCategorydishes.length);
        for (let i = 0; i < restaurantServingTimesCategorydishes.length; i++) {

            console.log("wonderfulx: " + restaurantServingTimesCategorydishes[i].dish_brief_descriptions);
            dishes_brief.push(
                restaurantServingTimesCategorydishes[i].dish_brief_descriptions
            );
        }
        console.log("333333333333333333");
        console.log(dishes_brief);

        return (
            <div>
                <div className="dishname raleway-semi-bold-black-15px"> {dishes_brief[0]}</div>
                <div className="dishname-1 raleway-semi-bold-black-15px">{dishes_brief[1]}</div>
                <div className="dishname-2 raleway-semi-bold-black-15px">{dishes_brief[2]}</div>
            </div>

        );

    }
    return (
        <div>
            {computeDishes()}
        </div>
    );
}

export default Dishes;