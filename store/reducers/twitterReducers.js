// @flow

import { 
    VisibilityFilters,
    SET_VISIBILITY_FILTER,
    RELOAD_TWEETS,
    LOAD_NEW_TWEETS
} from "../actions/twitterActions";

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    tweets: [],
}

export default function twitterApp(state: any = initialState, action: any) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter,
            })
        
        case RELOAD_TWEETS:
            return Object.assign({}, state, {
                tweets: action.tweets, 
            })

        case LOAD_NEW_TWEETS:
            return Object.assign({}, state, {
                tweets: [...state.tweets, ...action.tweets], 
            })
    
        default:
            return state;
    } 
}