const initialState = {
    token: null,
    loggedIn: false
};

const currentUser = (state = initialState, action) => {
   
    switch(action.type){

        case "SET_TOKEN":
            return {
                ...state,
                token: action.payload,
                loggedIn:true
            }

        case "LOG_OUT":
            return {
                ...state,
                token: null,
                loggedIn: false
            }

        default:
            return state
    }
}

export default currentUser;