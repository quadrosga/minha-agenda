import React, { useReducer, FC, useState, useEffect } from 'react'
import Header from './components/Header'
import ContactForm from './components/ContactForm'
import { contactsReducer, AppState } from './reducers/contactReducers'
import ContactList from './components/ContactLIst'

import { Contact } from './types'
import EditModal from './components/EditModal'

const initialState: AppState = {
  contacts: []
}

const App: FC = () => {
  const [state, dispatch] = useReducer(contactsReducer, initialState)
  const [showModal, setShowModal] = useState(false)
  const [dataToEdit, setDataToEdit] = useState<Contact | undefined>(undefined)
  useEffect(() => {
    if (!showModal) {
      setDataToEdit(undefined)
    }
  }, [showModal])
  const toggleModal = () => {
    setShowModal((show) => !show)
  }
  const handleEdit = (id: number) => {
    setDataToEdit(
      state.contacts.find((contact: { id: number }) => contact.id === id)
    )
    toggleModal()
  }

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <ContactForm
          dispatch={dispatch}
          dataToEdit={dataToEdit}
          toggleModal={toggleModal}
        />
        <hr />
        {state.contacts.length > 0 && (
          <ContactList
            contacts={state.contacts}
            handleEdit={handleEdit}
            dispatch={dispatch}
          />
        )}
      </div>
      <EditModal
        showModal={showModal}
        dataToEdit={dataToEdit}
        toggleModal={toggleModal}
        dispatch={dispatch}
      />
    </>
  )
}

export default App
