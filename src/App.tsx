import React, { FC, useReducer } from 'react'
import Header from './components/Header'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactLIst'
import { contactsReducer, AppState } from './reducers/contactReducers'

const initialState: AppState = {
  contacts: []
}

const App: FC = () => {
  const [state, dispatch] = useReducer(contactsReducer, initialState)
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <ContactForm dispatch={dispatch} />
        {state.contacts.length > 0 && <ContactList contacts={state.contacts} />}
      </div>
    </>
  )
}

export default App
