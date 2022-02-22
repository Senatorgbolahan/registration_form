import React from "react";
import "./style.css";
import {useState} from 'react'
import InputText from './components/InputText'

export default function App() {

  const [firstName, setFirstname] = useState('')
  
  return (
    <div>
      <InputText/>
    </div>
  );
}
