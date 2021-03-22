import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dishes from './Dishes';
import ScrollBar from '../component_first_page/ScrollBar';

const Categories = ({
    current_restaurant_serving_time_id
}) => {

    const [selectedCategory, setSelectedCategory] = useState();
    const [categories, setCategories] = useState([]);
    const [categories_id, setCategories_id] = useState([]);
    const [all_categories_id, setAll_categories_id] = useState([]);



    const handleCategorySelect = (id) => {


        const catObj = categories.find(c =>  c.i == id);

        if (catObj && catObj.cat_id) {

            const catIds = all_categories_id.filter(i => i == catObj.cat_id)
            setCategories_id(catIds);
        
        }
        
        setSelectedCategory(id);
    }
    

    useEffect(() => {
        axios.get(`http://localhost:8000/api/restaurant_serving_time_categories/${current_restaurant_serving_time_id}`)
            .then(res => {
                console.log("useEffect | Categories ---------- " + res.data);
                computeCurrentCategories(res.data);
            })
            .catch(err => {
            });
    }, [current_restaurant_serving_time_id]);


    const computeCurrentCategories = (data) => {

        const cats = data.map(i => ({
            i: i.category,
            cat_id: i.restaurant_serving_time_category_id
        }));

        const catIds = data.map(i => 
            i.restaurant_serving_time_category_id
        );

        setCategories(cats);
        setCategories_id(catIds);
        setAll_categories_id(catIds);
    }
        
    return (
        <div>  
            <div className="overlap-group">
                <div className="second-swi-teogry-bar">
                    <div className="overlap-group-3">
                        <div className="white-bar"></div>
                        <div className="nav-bar">
                            <div className="overlap-group-3">
                                <div className="navbarfulllayout">
                                    <div className="overlap-group5">
                                        <div className="drinks raleway-semi-bold-black-14px">
                                                {categories.length > 0 &&
                                                    <ScrollBar categories={categories}
                                                               selectedCategory={selectedCategory}
                                                               selected_categories_id={categories_id[0]}
                                                               onSelectItem={handleCategorySelect}
                                                    ></ScrollBar>
                                                } 
                                                {categories_id.length > 0 && 
                                                    <Dishes categories_id={categories_id} ></Dishes>
                                                }
                                                
                                        </div>
                                    </div>
                                    <img className="lasermatelogo" />
                                </div>
                            </div>
                        </div>
                        <div className="overlap-group3">
                        </div>
                    </div>

                </div>
            </div>
            
        </div> 
    );

}

export default Categories;

