import React, { useState } from 'react';
import { koreaCity } from '../../store/data';

const SelectCity = ({ city, onCityChange }) => {
  return (
    <div>
      <p>시/도*</p>
      <select value={city} onChange={(e) => onCityChange(e.target.value)}>
        <option value="">시/도를 선택해주세요</option>
        {koreaCity.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCity;
