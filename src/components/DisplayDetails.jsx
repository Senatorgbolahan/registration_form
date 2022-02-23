import React from 'react';

const DisplayDetails = ({ stores }) => {
  return (
    <>
      {stores.map(
        (store) => (
          <p>{store.firstName}</p>,
          <p>{store.lastName}</p>,
          <p>{store.email}</p>
        )
      )}
    </>
  );
};

export default DisplayDetails;
