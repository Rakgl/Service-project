import React from 'react';
import './LoadingSytle.scss';

const Loading = () => (
  <div className="middle">
    <div className="loading-screen">
      <div className="spinner-square">
        <div className="square-1 square"></div>
        <div className="square-2 square"></div>
        <div className="square-3 square"></div>
      </div>
    </div>
  </div>
);

export default Loading;
