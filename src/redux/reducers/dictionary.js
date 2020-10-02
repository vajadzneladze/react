const initialState = {
    lang: 'en',
    languages : [],
    dictionary: []
};

const dictionary = (state = initialState, action) => {
   
    switch(action.type){

        case "SET_LOCAL":
            return {
                ...state,
                lang: action.payload,
            }
        
    case "SET_LANGUAGES":
        return {
            ...state,
            languages: action.payload,
        }

        case "SET_DICTIONARY":
            return {
                ...state,
                dictionary: action.payload,
            }

        default:
            return state
    }
}

export default dictionary;