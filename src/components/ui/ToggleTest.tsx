import React from 'react';
import ToggleItem from './ToggleItem';

const ToggleTest = () => {
  const data = [
    {
      title: 'name one',
      desc: <p>content block one</p>,
      id: 1,
    },
    {
      title: 'name two',
      desc: <p> content block two</p>,
      id: 2,
    },
    {
      title: 'name three',
      desc: <p> content block three</p>,
      id: 3,
    },
    {
      title: 'name four',
      desc: <p> content block four</p>,
      id: 4,
    },
  ];

  return (
    <>
      {data.map((data, id) => {
        return (
          <ToggleItem
            id={id}
            title={data.title}
            desc={data.desc}
            key={id}
          />
        );
      })}
    </>
  );
};

export default ToggleTest;
