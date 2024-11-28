// Configurando tipagem das interfaces

export interface Contact {
  id: number
  nome: string
  sobrenome: string
  telefone: string
  email: string
}

export interface Action {
  type: string
  payload: Contact
}
