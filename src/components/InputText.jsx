import React from 'react';

const InputText = ({
  handleFN,
  handleLN,
  handleEMail,
  firstName,
  lastName,
  email,
  handleDetails,
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
      <br />
      <br />

      {/* <h2>{lastName}</h2>
      <h2>{email}</h2> */}
      <button onClick={handleDetails} type="submit">
        Submit
      </button>
    </section>
  );
};

export default InputText;
