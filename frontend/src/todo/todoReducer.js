const INITIAL_STATE = {
    description: 'Ler livro',
    list: [
        {
            _id: 1,
            description: 'Pagar fatura do cartão',
            done: true
        },
        {
            _id: 2,
            description: 'Reunião de equipe',
            done: false
        },
        {
            _id: 3,
            description: 'Consulta médica',
            done: false
        }
    ]
}

// {
//     description: '',
//     list: []
// }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }

        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data }

        default:
            return state
    }
}