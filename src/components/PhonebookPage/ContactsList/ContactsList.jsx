import { useSelector } from 'react-redux';
import ContactsListItem from './ContactsListItem/ContactsListItem';
import { getFilteredContacts } from '../../../redux/selectors';

const ContactsList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <>
      {filteredContacts.length > 0 ? (
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              <ContactsListItem contact={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <div>You have no contacts.</div>
      )}
    </>
  );
};

export default ContactsList;
