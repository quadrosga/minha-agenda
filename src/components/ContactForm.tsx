import React, { FC, ChangeEvent, useState, FormEventHandler } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Action } from '../types'

interface ContactFormProps {
  dispatch: React.Dispatch<Action>
}

const ContactForm: FC<ContactFormProps> = (props) => {
  const { dispatch } = props
  const [contact, setContact] = useState({
    nome: '',
    sobrenome: '',
    telefone: '',
    email: ''
  })

  // Definindo função chamada sempre que o usuário digita no input
  // desestruturação para pegar nome e valor do objeto target (o input)
  // setContact atualiza o contact state, retornando um novo objeto com mesmas
  // propriedades que o objeto prévio, mas com novo valor na propriedade name
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setContact((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  // Definindo função para evitar o comportamento padrão do submit
  const handleOnSubmit: FormEventHandler<HTMLElement> = (e) => {
    e.preventDefault()

    dispatch({
      type: 'ADD_CONTACT',
      payload: {
        id: Date.now(),
        ...contact
      }
    })
  }

  return (
    <Form onSubmit={handleOnSubmit} className="contact-form">
      <h3 className="mb-3">Adicionar Novo Contato</h3>
      <Form.Group controlId="nome">
        <Form.Label>Primeiro Nome</Form.Label>
        <Form.Control
          name="nome"
          value={contact.nome}
          type="text"
          placeholder="Digite o primeiro nome"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="sobrenome">
        <Form.Label>Sobrenome</Form.Label>
        <Form.Control
          name="sobrenome"
          value={contact.sobrenome}
          type="text"
          placeholder="Digite o sobrenome"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="telefone">
        <Form.Label>Telefone</Form.Label>
        <Form.Control
          name="telefone"
          value={contact.telefone}
          type="text"
          placeholder="Digite o número de telefone"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          value={contact.email}
          type="text"
          placeholder="Digite o endereço de email"
          onChange={handleOnChange}
        />
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button variant="primary" type="submit" className="submit-btn">
          Adicionar contato
        </Button>
      </div>
    </Form>
  )
}

export default ContactForm
