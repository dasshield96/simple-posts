import React from 'react';

function FieldError ({children}) {
  return (
    <>
      {children.map((error, index) => (
        <span key={index} className="text-danger">{error}</span>
      ))}
    </>
  )
}

export default FieldError;
