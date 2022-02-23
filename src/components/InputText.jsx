import React from 'react';

const InputText = ({
  handleFN,
  handleLN,
  handleEMail,
  firstName,
  lastName,
  email,
}) => {
  return (
    <section>
      <form>
        <input
          onChange={handleFN}
          type="text"
          placeholder="firstName"
          value={firstName}
        />
        <br />
        <br />
        <input
          onChange={handleLN}
          type="text"
          placeholder="LastName"
          value={lastName}
        />
        <br />
        <br />
        <input
          onChange={handleEMail}
          type="text"
          placeholder="Email"
          value={email}
        />
      </form>
      <h2>{firstName }</h2>
      <h2>{lastName }</h2>
      <h2>{email }</h2>
    </section>
  );
};

export default InputText;
