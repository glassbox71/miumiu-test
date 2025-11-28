import React from 'react';
import '../scss/speclalCo.scss';
import { speclal } from '../../../store/data';

const SpeclalCo = () => {
  return (
    <section className="speclalCol-wrap">
      <div className="inner">
        <h2>SPECLAL CLLECTION</h2>
        <ul className="speclal-item">
          {speclal.map((img, key) => (
            <li
              className={`speclal-item-box wow animate__animated animate__zoomIn`}
              data-wow-delay="0.6s"
              key={key}
              style={{
                backgroundImage: `url(/assets/images/static/main/SpeclalCo/${img.imgUrl}.jpg)`,
              }}>
              <div className="text-wrap">
                <p className="sp-text1">{img.title1}</p>
                {img.title2 && <p className="sp-text2">{img.title2}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SpeclalCo;
