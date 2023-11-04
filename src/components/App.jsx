import { RiContactsBook2Fill } from 'react-icons/ri';
import { ContactsForm } from './ContactsForm/ContactsForm'
import { ContactsBook } from './ContactsBook/ContactsBook'
import { Filter } from './Filter/Filter'
import { MainContainer, AppTitle, ContactsList, ContactsTitle } from './App.styled';

export default function App() {

  return (
    <div>
        <AppTitle><RiContactsBook2Fill />Phonebook</AppTitle>

        <MainContainer>
          <ContactsForm />

          <ContactsList>
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter />
            <ContactsBook />
          </ContactsList>
        </MainContainer>
      </div>
  )
}
