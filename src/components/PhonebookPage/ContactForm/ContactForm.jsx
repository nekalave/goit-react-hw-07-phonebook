import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../../redux/contactsSlice';
import { getContacts } from '../../../redux/selectors';

const ContactForm = () => {

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value.replace(/^\s+/, '');
    const number = form.elements.number.value.replace(/^\s+/, '');
    const duplicateContact = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (!name.trim() || !number.trim()) {
      alert('Please fill in all fields.');
      return;
    }
    if (duplicateContact) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact(name, number));
      form.reset();
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input type='text' name='name' required />
      </label>
      <label>
        Number
        <input type='tel' name='number' required />
      </label>
      <button className={css.submitButton} type='submit'>Add Contact</button>
    </form>
  );

};

export default ContactForm;
