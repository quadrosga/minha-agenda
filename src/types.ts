// Configurando tipagem das interfaces

export interface Contact {
  id: number
  nome: string
  sobrenome: string
  telefone: string
  email: string
}

export interface Update {
  id: number
  updates?: Contact
}

export interface Action {
  type: 'ADD_CONTACT' | 'UPDATE_CONTACT' | 'DELETE_CONTACT'
  payload: Contact | Update
}
