import React, { useEffect } from 'react';
import WOW from 'wowjs';
import '../scss/MostLove.scss';
import { Link } from 'react-router-dom';
import { items } from '../../../store/data';

const MostLove = () => {
  useEffect(() => {
    const wow = new WOW.WOW({ live: false });
    wow.init();
  }, []);

  return (
    <section className="MostLove wow animate__animated  animate__fadeInUp" data-wow-delay="0.6s">
      <h2>MOST LOVED</h2>

      <div className="inner">
        <ul className="item-box  ">
          {items.map((el, index) => {
            return (
              <li className="item" category={el.imgUrl} key={index}>
                <Link to={`/${el.imgUrl}`}>
                  <div className="item-img">
                    <img
                      className="bannerImg"
                      src={`/assets/images/static/main/mostLoved/${el.imgUrl}.png`}
                      alt={el.title}
                    />
                    <img
                      className="bannerImg-hover"
                      src={`/assets/images/static/main/mostLoved/${el.imgUrl}-hover.png`}
                      alt={el.title}
                    />
                  </div>
                  <p className="title">{el.title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default MostLove;
