import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: (state, action) => ({
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
    })
})

export default rootReducer