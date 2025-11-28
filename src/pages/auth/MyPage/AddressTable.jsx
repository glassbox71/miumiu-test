import React from 'react';
import './scss/AddressTable.scss';

const AddressTable = () => {
  return (
    <table className="address-table">
      <tbody>
        <tr>
          <th>이름</th>
          <th>휴대폰 번호</th>
          <th>주소</th>
        </tr>

        <tr>
          <td>홍길동</td>
          <td>010-1234-5678</td>
          <td>
            <span>49376 부산 사하구 감내1로 7-1 (감천동) 103동 1302호</span>
            <div>
              <button className="editBtn">수정</button>
              <button className="deleteBtn">삭제</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AddressTable;
