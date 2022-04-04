const initialState = {
    interests: [
        {
            id: '1',
            interest: 'Рыбалка'
        },
        {
            id: '2',
            interest: 'Охота'
        },
        {
            id: '3',
            interest: 'Прогулка'
        },
        {
            id: '4',
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