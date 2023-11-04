import { useDispatch } from "react-redux";
import { ContactItem, DeleteBtn } from "./Contact.styled";
import { deleteContact } from "redux/contactsSlice";

export const Contact = ({ contact: { id, name, number }}) => {
  const dispatch = useDispatch();
  
  return (
    <ContactItem>
      <p>{name}: {number}</p>
      <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>Delete</DeleteBtn>
    </ContactItem>
  );
}