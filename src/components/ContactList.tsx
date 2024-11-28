import React, { FC } from 'react'
import { Contact } from '../types'
import ContactItem from './ContactItem'

interface ContactListProps {
  contacts: Contact[]
}
const ContactList: FC<ContactListProps> = ({ contacts }) => {
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
            </tr>
          </thead>
          <tbody>
            {contacts.map(({ nome, sobrenome, telefone, email, id }) => (
              <ContactItem
                key={id}
                id={id}
                nome={nome}
                sobrenome={sobrenome}
                telefone={telefone}
                email={email}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default ContactList
