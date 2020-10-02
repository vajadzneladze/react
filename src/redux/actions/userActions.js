const setAccessToken = accessToken => {
    return {
        type: 'SET_TOKEN',
        payload: accessToken
    }
}

const logOut = () => {
    return {
        type: 'LOG_OUT',
    }
}

export default {
    setAccessToken,
    logOut
}