import React from 'react';
import './style.css';
import { useState } from 'react';
import InputText from './components/InputText';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [store, setstore] = useState([]);

  const handleFN = (e) => {
    setFirstName(e.target.value);
  };
  const handleLN = (e) => {
    setLastName(e.target.value);
  };
  const handleEMail = (e) => {
    setEmail(e.target.value);
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
      />
    </div>
  );
}
