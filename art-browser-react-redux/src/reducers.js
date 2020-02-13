import { SEARCH, SELECT, RESULTS, LOADING } from "./actions";

const defaultState = {
    query: '',
    results: []
}
export function art(state=defaultState, action) {
    switch(action.type) {
        case SEARCH:
            return {
                ...state,
                query: action.payload.query
            }
            break;
        case RESULTS:
            return {
                ...state,
                results: action.payload.results
            }
        case LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case SELECT:
            return {
                ...state
            }
    }
}