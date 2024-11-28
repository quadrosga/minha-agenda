import React, { FC } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

import { Contact, Action } from '../types'

interface ExtraProps {
  handleEdit: (id: number) => void
  dispatch: React.Dispatch<Action>
}

const ContactItem: FC<Contact & ExtraProps> = ({
  id,
  nome,
  sobrenome,
  telefone,
  email,
  handleEdit,
  dispatch
}) => {
  return (
    <tr>
      <td>{nome}</td>
      <td>{sobrenome}</td>
      <td>{telefone}</td>
      <td>{email}</td>
      <td>
        <AiFillEdit
          size={20}
          onClick={() => handleEdit(id)}
          color="blue"
          className="icon"
        />
      </td>
      <td>
        <AiFillDelete
          size={20}
          onClick={() => {
            const confirmDelete = window.confirm(
              `Tem certeza que deseja deletar o contato de ${nome} ${sobrenome}?`
            )
            if (confirmDelete) {
              dispatch({
                type: 'DELETE_CONTACT',
                payload: { id }
              })
            }
          }}
          color="red"
          className="icon"
        />
      </td>
    </tr>
  )
}
export default ContactItem
