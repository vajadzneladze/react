const setLocal = local => {
    return {
        type: 'SET_LOCAL',
        payload: local
    }
} 

const setLanguages = languages => {
    return {
        type: 'SET_LANGUAGES',
        payload: languages
    }
} 

const setDictionary = dictionary => {  
    return {
        type: 'SET_DICTIONARY',
        payload: dictionary
    }
}

export default {
    setLocal,
    setLanguages,
    setDictionary
}