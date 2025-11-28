// src/utils/generateOrderNumber.js
export const generateOrderNumber = () => {
  const d = new Date();

  const YYYY = d.getFullYear();
  const MM = String(d.getMonth() + 1).padStart(2, '0');
  const DD = String(d.getDate()).padStart(2, '0');

  const HH = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  const ss = String(d.getSeconds()).padStart(2, '0');

  const random = Math.floor(1000 + Math.random() * 9000);

  return `${YYYY}${MM}${DD}-${HH}${mm}${ss}-${random}`;
};
