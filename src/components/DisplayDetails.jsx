import React from 'react';

const DisplayDetails = ({ stores }) => {
  return (
    <div>
      {stores.map((store) => (
        <p>{store.firstName}</p>,
        <p>{store.lastName}</p>,
        <p>{store.email}</p>
      ))}
    </div>
  );
};

export default DisplayDetails;
