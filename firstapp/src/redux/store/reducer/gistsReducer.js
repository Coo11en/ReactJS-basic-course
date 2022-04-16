
const initialState = {
    gists: [],
    loading: false,
    error: null
}

export const gistsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'get_gists': {
            return {
                ...state,
                gists: action.payload,
                loading: false
            }
        }
        case 'loading':
            return {
                ...state,
                loading: true
            }
        case 'error':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const loadGists = () => {

    return async (dispatch) => {
        try {
            const response = await fetch('https://api.github.com/gists/public')
            const gists = await response.json();
            dispatch({
                type: 'get_gists',
                payload: gists
            })
        } catch (error) {
            dispatch({
                type: 'error',
                payload: error.message,
            })
        }
    }
}