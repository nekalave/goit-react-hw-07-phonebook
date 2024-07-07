import React from 'react';
import Section from './Section/Section';
import ContactForm from './PhonebookPage/ContactForm/ContactForm';
import ContactsList from './PhonebookPage/ContactsList/ContactsList';
import Filter from './PhonebookPage/Filter/Filter';

const App = () => {
  return (
    <>
      <Section title='Phonebook'>
        <ContactForm />
      </Section>
      <Section title='Contacts'>
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
};

export default App;
