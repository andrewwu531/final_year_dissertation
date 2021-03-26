import {useState, useEffect} from 'react'
import axios from 'axios'

export function useDishes(id) {
    const [dishes, setDishes] = useState([])
    const [working, setWorking] = useState(true)
    useEffect(() => {
        async function getData() {
            try {
                const {data} = await axios.post(`http://localhost:8000/api/restaurant_serving_time_category_dishes/search`, { restaurant_serving_time_category_id: id })
                const allDishes = data.map(dish => ({
                    description: dish.dish_brief_descriptions,
                    price: dish.dish_price,
                    photo: dish.dish_photo
                }));
                setDishes(allDishes);
                setWorking(false)
            } catch (error) {
                setWorking(false)
            }
        }
        getData()
    }, [id])
    return {dishes, working}
}

export function useCategories(id) {
    const [categories, setCategories] = useState([])
    const [categoriesId, setCategoiresId] = useState([])
    
    useEffect(() => {
        async function getData() {
            try {
                const {data} = await axios.get(`http://localhost:8000/api/restaurant_serving_time_categories/${id}`)
                const allCategories = data.map(i => ({
                    i: i.category,
                    cat_id: i.restaurant_serving_time_category_id
                }))
                setCategories(allCategories)
                setCategoiresId(data.map(i => 
                    i.restaurant_serving_time_category_id
                ))
            } catch (error) {
                console.log(error.message)
            }
        }
        getData()
    }, [id])
    return {categories, categoriesId}
}