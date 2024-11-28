import { Contact, Action } from '../types'

// Definindo interface cuja propriedade contacts recebe um array de objetos Contact
// AppState é o estado da aplicação que o Reducer administrará
export interface AppState {
  contacts: Contact[]
}

// contactsReducer recebe duas propriedades: seu estado e a ação enviada para atualizar o estado
// switch/case: checar se o type property da action é a esperada (string ADD_CONTACT)
// se sim, retorna novo objeto que represento o novo estado da aplicação, copiando todas as
// propriedades do estado anterior (...state) e atualiza com um novo array que inclui todos os
// contatos anteriores (...state.contacts), mais o novo contato passado na action.payload
// caso contrário, returna a estado sem mudanças (default: return state)
export const contactsReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
    default:
      return state
  }
}
