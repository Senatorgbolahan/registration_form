import React from 'react';

const DisplayDetails = ({ stores }) => {
  return (
    <>
      {/* {list.map((res) => (
            <li key={res}>{res}</li>
          ))} */}

      <ul>
        {stores.map((store) => (
          // <p>{store.firstName}</p>,
          // <p>{store.lastName}</p>,
          // <p>{store.email}</p>
          <li key={store}>
            {store.firstName}, {store.lastName} , {store.email}
          </li>
        ))}
      </ul>
    </>
  );
};

export default DisplayDetails;
