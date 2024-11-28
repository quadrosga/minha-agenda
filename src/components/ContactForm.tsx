import React, { FC, ChangeEvent, useState } from 'react'
import { Action, Contact } from '../types'
import { Button, Form } from 'react-bootstrap'

interface ContactFormProps {
  dispatch: React.Dispatch<Action>
  dataToEdit: Contact | undefined
  toggleModal: () => void
}

const ContactForm: FC<ContactFormProps> = ({
  dispatch,
  dataToEdit,
  toggleModal
}) => {
  const [contact, setContact] = useState({
    nome: dataToEdit?.nome ? dataToEdit.nome : '',
    sobrenome: dataToEdit?.sobrenome ? dataToEdit.sobrenome : '',
    telefone: dataToEdit?.telefone ? dataToEdit.telefone : '',
    email: dataToEdit?.email ? dataToEdit.email : ''
  })

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setContact((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!dataToEdit) {
      dispatch({
        type: 'ADD_CONTACT',
        payload: {
          id: Date.now(),
          ...contact
        }
      })
      setContact({
        nome: '',
        sobrenome: '',
        telefone: '',
        email: ''
      })
    } else {
      dispatch({
        type: 'UPDATE_CONTACT',
        payload: {
          id: dataToEdit.id,
          updates: {
            id: Date.now(),
            ...contact
          }
        }
      })
      toggleModal()
    }
  }

  return (
    <Form onSubmit={handleOnSubmit} className="contact-form">
      <h3 className="mb-3">Adicionar Novo Contato</h3>
      <Form.Group controlId="nome">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          name="nome"
          value={contact.nome}
          type="text"
          placeholder="Insira o primeiro nome"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="sobrenome">
        <Form.Label>Sobrenome</Form.Label>
        <Form.Control
          name="sobrenome"
          value={contact.sobrenome}
          type="text"
          placeholder="Insira o sobrenome"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="telefone">
        <Form.Label>Telefone</Form.Label>
        <Form.Control
          name="telefone"
          value={contact.telefone}
          type="text"
          placeholder="Insira o número de telefone"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          value={contact.email}
          type="email"
          placeholder="Insira o endereço de email"
          onChange={handleOnChange}
        />
      </Form.Group>

      <div className="d-flex justify-content-end">
        <Button variant="primary" type="submit" className="submit-btn">
          {dataToEdit ? 'Atualizar Contato' : 'Adicionar Contato'}
        </Button>
      </div>
    </Form>
  )
}

export default ContactForm
