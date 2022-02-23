import React from 'react';

const DisplayDetails = ({ stores }) => {
  return (
    <div>
      {stores.map((store) => (
        <div>{store}</div>
      ))}
    </div>
  );
};

export default DisplayDetails;
