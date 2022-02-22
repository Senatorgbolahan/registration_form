import React from 'react';
import './style.css';
import { useState } from 'react';
import InputText from './components/InputText';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleInput = (e) => {
    setFirstName(e.target.value);
  };
  return (
    <div>
      <InputText
        // setFirstName={setFirstName}
        firstName={firstName}
        handleInput={handleInput}
      />
    </div>
  );
}
