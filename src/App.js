import React from 'react';
import './style.css';
import { useState } from 'react';
import DisplayDetails from './components/DisplayDetails';
import InputText from './components/InputText';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [stores, setstore] = useState([]);

  const handleFN = (e) => {
    setFirstName(e.target.value);
  };
  const handleLN = (e) => {
    setLastName(e.target.value);
  };
  const handleEMail = (e) => {
    setEmail(e.target.value);
  };
  const handleDetails = () => {
    let names = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    setstore([...stores, names]);
  };
  return (
    <div>
      <InputText
        // setFirstName={setFirstName}
        firstName={firstName}
        handleFN={handleFN}
        handleLN={handleLN}
        handleEMail={handleEMail}
        lastName={lastName}
        email={email}
        handleDetails={handleDetails}
      />
      <DisplayDetails stores={stores} />
    </div>
  );
}
