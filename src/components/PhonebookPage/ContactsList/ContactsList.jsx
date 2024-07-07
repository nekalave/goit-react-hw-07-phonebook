import { getContacts, getFilter } from '../../../redux/selectors';
import { useSelector } from 'react-redux';
import ContactsListItem from './ContactsListItem/ContactsListItem';

const ContactsList = () => {

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <ContactsListItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
