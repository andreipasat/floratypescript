export enum FeedActionTypes {
    FETCH_FEED = 'FETCH_FEED',
    FETCH_FEED_ERROR = 'FETCH_FEED_ERROR',
    GET_FEED = 'GET_FEED',
    GET_PRODUCT = 'GET_PRODUCT',
    ADD_PRODUCT = 'ADD_PRODUCT',
    UPDATE_PRODUCT = 'UPDATE_PRODUCT',
    DELETE_PRODUCT = 'DELETE_PRODUCT',
}

export interface FeedState {
    products: any[];
    loading: boolean;
    error: null | string;
}


interface FetchFeedAction {
    type: FeedActionTypes.FETCH_FEED;
    payload: boolean
}
interface FetchFeedErrorAction {
    type: FeedActionTypes.FETCH_FEED_ERROR,
    payload: string
}
interface GetFeedAction {
    type: FeedActionTypes.GET_FEED,
    payload: any[]
}

export type FeedAction = FetchFeedAction | FetchFeedErrorAction | GetFeedAction
