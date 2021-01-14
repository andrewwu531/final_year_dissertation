// import React from 'react';

// const restaurant_serving_time_id = (props) => {
//     const getRestaurantServingTimeID = () => {
        
//         let result = [];
//         var today = new Date();
//         var isOpenBusiness = false;
//         var current_hour = today.getHours();
//         var current_minutes = today.getMinutes();
//         console.log("current hour and minutes ABC: " + current_hour + ": " + current_minutes);

//         for (let i = 0; i < restaurantServingTimes.length; i++) {
//             console.log(i);
//             var serving_time_start_hour = parseInt(restaurantServingTimes[i].serving_time_start_hour);
//             var serving_time_start_minutes = parseInt(restaurantServingTimes[i].serving_time_start_minutes);
//             var serving_time_end_hour = parseInt(restaurantServingTimes[i].serving_time_end_hour);
//             var serving_time_end_minutes = parseInt(restaurantServingTimes[i].serving_time_end_minutes);

//             console.log("condition - for loop");
//             console.log("condition XYZ: " + serving_time_start_hour);
//             if ((serving_time_start_hour <= current_hour) && (serving_time_end_hour >= current_hour)) {
//                 if (current_hour === serving_time_start_hour) {
//                     if (serving_time_start_minutes <= current_minutes) {
//                         console.log("condition - 1");
//                         return restaurantServingTimes[i].restaurant_serving_time_id;
//                     }
//                 }
//             }
//             if (current_hour === serving_time_end_hour) {
//                 if (serving_time_end_minutes >= current_minutes) {
//                     console.log("condition - 2");
//                     return restaurantServingTimes[i].restaurant_serving_time_id;
//                 }
//             }
//             else {
//                 console.log("condition - 3");
//                 return restaurantServingTimes[i].restaurant_serving_time_id;
//             }
//         }
//     };

//     return (
//         <div>
//             {getRestaurantServingTimeID()}
//         </div>
//     );
// };

// export default restaurant_serving_time_id;