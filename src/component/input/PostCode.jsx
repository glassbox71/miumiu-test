import React, { useState } from 'react';
import './scss/Input.scss';

const PostCode = ({ postCode, onPostCode }) => {
  const postInput = /^[0-9]*$/;

  const handlePostCode = (e) => {
    const value = e.target.value;
    if (!postInput.test(value)) return;
    onPostCode(value);
  };

  return (
    <div className="base-input">
      <p>우편번호*</p>
      <input
        type="text"
        placeholder="우편번호를 입력해주세요"
        value={postCode}
        maxLength={5}
        onChange={handlePostCode}
      />
    </div>
  );
};

export default PostCode;
