import { CHANGE_SEARCH_FIELD } from "./constants";

const initialState = {
    setSearchField =''
}
export const setSearchField = (state=initialState, action={}) => {
     switch(action.type) {
        case CHANGE_SEARCH_FIELD: 
        return Object.assign({}, state, { setSearchField: action.payload })
     }
}