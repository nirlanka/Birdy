// @flow

// Action types
export const RELOAD_TWEETS = 'RELOAD_TWEETS';
export const LOAD_NEW_TWEETS = 'LOAD_NEW_TWEETS';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const PONG = 'PONG';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
}

// Filter Actions
export const SHOW_FAVED = 'SHOW_FAVED';

export function reloadedTweets(tweets: any[]) {
    return {
        type: RELOAD_TWEETS,
        tweets,
    }
}

export function loadedNewTweets(tweets: any[]) {
    return {
        type: LOAD_NEW_TWEETS,
        tweets,
    }
}

export function filterVisibility(filter: string) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter,
    }
}

export function pinged(pong: string) {
    return {
        type: PONG,
        pong,
    }
}