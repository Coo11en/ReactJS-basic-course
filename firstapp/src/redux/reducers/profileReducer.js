const initialState = {
    interests: [
        {
            id: 0,
            interest: 'Рыбалка'
        },
        {
            id: 1,
            interest: 'Охота'
        },
        {
            id: 2,
            interest: 'Прогулка'
        },
        {
            id: 3,
            interest: 'Путишествия'
        },
    ]
}

export const interestsReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'addInterest':
            return {
                ...state,
                interests: [...state.interests, action.payload]
            }
        default:
            return state
    }
}