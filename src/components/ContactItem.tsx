import React, { FC } from 'react'
import { Contact } from '../types'

const ContactItem: FC<Contact> = ({ nome, sobrenome, telefone, email }) => {
  return (
    <tr>
      <td>{nome}</td>
      <td>{sobrenome}</td>
      <td>{telefone}</td>
      <td>{email}</td>
    </tr>
  )
}
export default ContactItem
