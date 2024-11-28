import React, { FC } from 'react'
import { Container } from 'react-bootstrap'

const Header: FC = () => {
  return (
    <header>
      <Container className="d-flex justify-content-center">
        <h1>Minha Agenda</h1>
      </Container>
    </header>
  )
}

export default Header
