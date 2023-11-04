import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Contact } from "components/Contact/Contact";
import { ContactsUL } from "./ContactsBook.styled";
import { getContacts, getFilter } from "redux/selectors";

export const ContactsBook = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    })
  }, [contacts, filter])
  
  return (
    <div>
      <ContactsUL>
        {getVisibleContacts.map(contact =>
          <Contact key={contact.id} contact={contact} />)}
      </ContactsUL>
    </div>
  );
}