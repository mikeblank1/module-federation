import React, { useEffect } from 'react';
const ExportredTitle = () => {
  console.log('---------loading remote component---------');
  useEffect(() => {
    console.log('HOOKS WORKS');
  }, []);
  return (
    <div className="hero">
      <h1 className="title">
        {' '}
        This is a component that came fom <code>checkout app</code> !!!
      </h1>
      <p className="description">And it works like a charm!</p>
    </div>
  );
};

export default ExportredTitle;
