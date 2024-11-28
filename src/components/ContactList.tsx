import React, { FC } from 'react'
import { Action, Contact } from '../types'
import ContactItem from './ContactItem'

interface ContactListProps {
  contacts: Contact[]
  handleEdit: (id: number) => void
  dispatch: React.Dispatch<Action>
}
const ContactList: FC<ContactListProps> = ({
  contacts,
  handleEdit,
  dispatch
}) => {
  return (
    <div className="contacts-list">
      <h3 className="contacts-list-title">Lista de Contatos</h3>
      <div className="contacts-list-table-container">
        <table className="contacts-list-table">
          <thead className="contacts-list-header">
            <tr>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>Editar</th>
              <th>Deletar</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <ContactItem
                key={contact.id}
                {...contact}
                handleEdit={handleEdit}
                dispatch={dispatch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default ContactList
