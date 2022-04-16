const initialState = {
    chats: [
        {
            id: 0,
            author: 'rick',
            value: ''
        },
        {
            id: 1,
            author: 'anton',
            value: ''
        },
        {
            id: 2,
            author: 'irina',
            value: ''
        },
        {
            id: 3,
            author: 'kate',
            value: ''
        },
        {
            id: 4,
            author: 'jon',
            value: ''
        },
    ],
    messages: [
        {
            id: 0,
            userName: 'rick',
            idChat: 0,
            message: 'Привет как дела??',
        },
        {
            id: 1,
            userName: 'rick',
            idChat: 0,
            message: 'У меня все ОК!!',
        },
        {
            id: 2,
            userName: 'anton',
            idChat: 1,
            message: 'Когда урок?',
        },
        {
            id: 3,
            userName: 'anton',
            idChat: 1,
            message: 'Сколько стоит?',
        },
        {
            id: 4,
            userName: 'irina',
            idChat: 2,
            message: 'Завтрв встреча в 19:00',
        },
        {
            id: 5,
            userName: 'irina',
            idChat: 2,
            message: 'Созвонимся))',
        },
        {
            id: 6,
            userName: 'kate',
            idChat: 3,
            message: 'Напишешь как приедешь!!',
        },
        {
            id: 7,
            userName: 'kate',
            idChat: 3,
            message: 'Незабудь купить',
        },
        {
            id: 8,
            userName: 'jon',
            idChat: 4,
            message: 'Я подъехал',
        }
    ]
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'printMessage':
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        default:
            return state
    }
}