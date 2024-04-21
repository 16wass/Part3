import React from 'react';
import personService from './services/persons';

const Persons = ({ persons, searchTerm, setPersons }) => {
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id, name) => {
    const confirmDelete = window.confirm(`Delete ${name}?`);
    if (confirmDelete) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
        })
        .catch(error => {
          console.error('Error deleting person:', error);
        });
    }
  };

  return (
    <ul>
      {filteredPersons.map(person => (
        <li key={person.id}>
          {person.name} {person.number} 
          <button onClick={() => handleDelete(person.id, person.name)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;
