import React from 'react';
import '../scss/ProductShoesSize.scss';

const ProductShoesSize = () => {
  return (
    <div className="ProductShoesSize">
      <ul className="shoesSize">
        <li class="th">
          <div class="first">미우미우 사이즈 (이탈리아)</div>
          <div class="second">대한민국</div>
          <div class="last">발</div>
        </li>

        <li class="list">
          <div class="first">34</div>
          <div class="second">210</div>
          <div class="last">22cm</div>
        </li>
        <li class="list">
          <div class="first">34.5</div>
          <div class="second">215</div>
          <div class="last">22.3cm</div>
        </li>
        <li class="list">
          <div class="first">35</div>
          <div class="second">220</div>
          <div class="last">22.6cm</div>
        </li>
        <li class="list">
          <div class="first">35.5</div>
          <div class="second">225</div>
          <div class="last">23cm</div>
        </li>
        <li class="list">
          <div class="first">36</div>
          <div class="second">230</div>
          <div class="last">23.3cm</div>
        </li>
        <li class="list">
          <div class="first">36.5</div>
          <div class="second">235</div>
          <div class="last">23.6cm</div>
        </li>
        <li class="list">
          <div class="first">37</div>
          <div class="second">240</div>
          <div class="last">24cm</div>
        </li>
        <li class="list">
          <div class="first">37.5</div>
          <div class="second">245</div>
          <div class="last">24.3cm</div>
        </li>
        <li class="list">
          <div class="first">38</div>
          <div class="second">250</div>
          <div class="last">24.6cm</div>
        </li>
        <li class="list">
          <div class="first">38.5</div>
          <div class="second">255</div>
          <div class="last">25cm</div>
        </li>
        <li class="list">
          <div class="first">39</div>
          <div class="second">260</div>
          <div class="last">25.3cm</div>
        </li>
        <li class="list">
          <div class="first">39.5</div>
          <div class="second">265</div>
          <div class="last">25.6cm</div>
        </li>
        <li class="list">
          <div class="first">40</div>
          <div class="second">270</div>
          <div class="last">26cm</div>
        </li>
        <li class="list">
          <div class="first">40.5</div>
          <div class="second">275</div>
          <div class="last">26.3cm</div>
        </li>
        <li class="list">
          <div class="first">41</div>
          <div class="second">280</div>
          <div class="last">26.6cm</div>
        </li>
        <li class="list">
          <div class="first">41.5</div>
          <div class="second">285</div>
          <div class="last">27cm</div>
        </li>
        <li class="list">
          <div class="first">42</div>
          <div class="second">290</div>
          <div class="last">27.3cm</div>
        </li>
      </ul>

      <div className="footSize">
        <h3>치수 가이드</h3>
        <p className="sub-title">치수는 발가락에서 발뒤꿈치까지의 발 길이를 기준으로 합니다.</p>

        <img src="/assets/images/static/product/footSize.png" alt="발 사이즈 사진" />
      </div>
    </div>
  );
};

export default ProductShoesSize;
