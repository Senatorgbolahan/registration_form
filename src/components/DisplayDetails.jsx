import React from 'react';

const DisplayDetails = ({ stores }) => {
  return (
    <div>
      {stores.map((store) => (
        <p>{store.name}</p>
      ))}
    </div>
  );
};

export default DisplayDetails;
