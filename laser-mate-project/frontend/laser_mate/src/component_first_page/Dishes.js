import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dishes = (props) => {


    let dishes_image = []
    let dishes = []
    const url = "http://localhost:8000";
    const grey_image = "https://anima-uploads.s3.amazonaws.com/projects/5ffc7b766b43875ceda22007/releases/60040bae6ebe2c806f50c88c/img/dish-grey-background@1x.png";


    const [restaurantServingTimesCategorydishes, setRestaurantServingTimesCategorydishes] = useState({});
    var restaurant_serving_time_category_id = props.categories_id[0];


    console.log("dishdish");
    console.log(restaurant_serving_time_category_id);

    console.log(props);



    useEffect(() => {
        console.log("again");
        console.log(restaurant_serving_time_category_id);

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

            console.log("wonderfulx: " + restaurantServingTimesCategorydishes[i].dish_photo); 
            

            dishes.push({
                description: restaurantServingTimesCategorydishes[i].dish_brief_descriptions,
                price: restaurantServingTimesCategorydishes[i].dish_price,
                photo: restaurantServingTimesCategorydishes[i].dish_photo
            });
        }
    

        for (let i = 0; i < dishes.length ; i++) {


            if ( i == 0 ){
                dishes_image.push(
                    <div key={i}>
                        <div className="dishname raleway-semi-bold-black-15px"> {dishes[i].description}</div>
                        <div className="dishprice-1 raleway-semi-bold-black-15px">£{dishes[i].price}</div>
                        <img className="dishgreybackground-1" src={grey_image} />
                        <img className="dishimage-1" src={ url + dishes[i].photo}/>
                    </div>
                );
            }


            else if ( i == 1 ){
                console.log( " I am hard working");
                dishes_image.push(
                    <div key={i}>
                        <div className="dishname-1 raleway-semi-bold-black-15px"> {dishes[i].description}</div>
                        <div className="dishprice-2 raleway-semi-bold-black-15px">£{dishes[i].price}</div>
                        <img className="dishgreybackground-2" src={grey_image} />
                        <img className="dishimage-2" src={url + dishes[i].photo}/>
                    </div>
                );
            }


            else if ( i == 2 ){
                console.log( " I am hard working");
                dishes_image.push(
                    <div key={i}>
                        <div className="dishname-2 raleway-semi-bold-black-15px"> {dishes[i].description}</div>
                        <div className="dishprice-3 raleway-semi-bold-black-15px">£{dishes[i].price}</div>
                        <img className="dishgreybackground-4" src={grey_image} />
                        <img className="dishimage-3" src={"http://localhost:8000" + dishes[i].photo}/>
                    </div>
                );
            }


            else if ( i == 3 ){
                console.log( " I am handsome");
                dishes_image.push(
                    <div key={i}>
                        <div className="dishname-3 raleway-semi-bold-black-15px"> {dishes[i].description}</div>
                        <div className="dishprice-4 raleway-semi-bold-black-15px">£{dishes[i].price} </div>
                        <img className="dishgreybackground-3" src={grey_image} />
                        <img className="dishimage-4" src={"http://localhost:8000" + dishes[i].photo}/>
                    </div>

                );
            }


            if ( i == 4 ) {
                break;
            }
        }

        console.log("333333333333333333");
        console.log(dishes_image)
        
        

        return (
            <div>
                {dishes_image}
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