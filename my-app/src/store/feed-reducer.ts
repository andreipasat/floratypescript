import { FeedState, FeedActionTypes, FeedAction } from './../types/feed';
import axios from 'axios';
import { Dispatch } from 'redux';

let initialState: FeedState = {
    products : [],
    loading : false,
    error: null
}

const feedReducer = (state = initialState, action: FeedAction): FeedState => {
    switch(action.type) {

        case FeedActionTypes.FETCH_FEED: {
            return {...state, loading: action.payload, error: null}
        }

        case FeedActionTypes.FETCH_FEED_ERROR: {
            return {...state, error: action.payload}
        }

        case FeedActionTypes.GET_FEED :{
            return {...state, products: action.payload}
        }

        // case FeedActionTypes.GET_PRODUCT : {
        //     return {...state}
        // }

        // case FeedActionTypes.ADD_PRODUCT : {
        //     return {...state}
        // }

        // case FeedActionTypes.UPDATE_PRODUCT : {
        //     return {...state}
        // }

        // case FeedActionTypes.DELETE_PRODUCT : {
        //     return {...state}
        // }


        default : {
            return state
        }
    }
}
const fetchFeedCreator = (loading: boolean): FeedAction => ({type : FeedActionTypes.FETCH_FEED, payload : loading})
const fetchFeedErrorCreator = (error: string): FeedAction => ({type : FeedActionTypes.FETCH_FEED_ERROR, payload : error})
const getFeedCreator = (products: any[]): FeedAction => ({type : FeedActionTypes.GET_FEED, payload : products})
// const addProductCreator = (product) => ({type : FeedActionTypes.ADD_PRODUCT, product})
// const updateProductCreator = (product) => ({type : FeedActionTypes.UPDATE_PRODUCT, product})
// const deleteProductCreator = (product) => ({type : FeedActionTypes.DELETE_PRODUCT, product})

export const fetchProducts = () => {
    return async (dispatch:Dispatch<FeedAction>) => {
        try {
            dispatch(fetchFeedCreator(true))
            const response = await axios.get('https://bouquets.herokuapp.com/bouquets')
            dispatch(getFeedCreator(response.data))
            dispatch(fetchFeedCreator(false))
        } catch (e) {
            dispatch(fetchFeedCreator(false))
            dispatch(fetchFeedErrorCreator('Error loading data'))
        }
    }
}

export default feedReducer