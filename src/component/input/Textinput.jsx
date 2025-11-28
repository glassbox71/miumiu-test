import './scss/Input.scss';

import React from 'react';

const Textinput = ({ title, disabled = false }) => {
  return (
    <div className="base-input">
      <input type="text" placeholder={title} disabled={disabled} />
    </div>
  );
};

export default Textinput;
