import { ADD_FAV, REMOVE_FAV } from "./actions";

const initialState = {
    myFavorites: []
};

export const rootReducer = (state = initialState, action) => { //action : type, payload
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }   
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(favorite => favorite.id !== action.payload.id)
            } 
        default:
            return state;
    }

};

//export default rootReducer;