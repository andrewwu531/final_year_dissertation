import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import { setNewCategories } from '../store/actions'
import { useCategories } from '../hooks/Hooks';
import Dishes from './Dishes';

function Categories(props) {
    const {categoriesId, categories} = useCategories(props.current_restaurant_serving_time_id)
    console.log("hellll")
    useEffect(() => {
        props.setNewCategories(categories)
        
    }, [categories])

    return (
        <div>
            
            {categoriesId.length > 0 && 
                <Dishes categories_id={categoriesId}
                        categories={categories} ></Dishes>
            }
        </div>
    )
}

export default connect(null, {setNewCategories})(Categories);

