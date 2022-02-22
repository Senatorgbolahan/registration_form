import React from 'react';

const InputText = ({ handleInput, firstName }) => {
  return (
    <section>
      <form>
        <input
          onChange={handleInput}
          type="text"
          placeholder="firstName"
          value={firstName}
        />
      </form>
      <h2>{firstName}</h2>
    </section>
  );
};

export default InputText;
