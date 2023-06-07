/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
export default function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className="App">
      {isOpen && <>test</>}
      <button onClick={toggle}>Toggle show</button>
    </div>
  );
}
