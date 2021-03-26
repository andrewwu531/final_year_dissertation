import { createStore, combineReducers } from 'redux'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

const initialState = {
    category_id: 0,
    categories: []
}
const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'SET_CATEGORY_ID':
            return {
                ...state,
                category_id: payload
            }
        case 'SET_CATEGORIES':
            return {
                ...state,
                categories: payload
            }
        default:
            return state
    }
}

const store = createStore(
    combineReducers({
        category: reducer,
        router: history
    })
)

export default store