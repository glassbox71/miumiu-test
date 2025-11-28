import '../scss/lnbSub.scss';
import { Link } from 'react-router-dom';
import { bags, iconicBags } from '../../../store/data';

const LnbBags = ({ isActive }) => {
  return (
    <div className={`lnb-box ${isActive ? '' : 'hidden'}`}>
      <div className="lnb-inner">
        <div className="lnb-left">
          <div className="lnb-menus">
            <p className="lnb-menus-title">가방</p>
            <ul className="lnb-sub-menus">
              {bags.map((bag) => (
                <li className="lnb-menuList" key={bag.alt}>
                  <Link to={`/bags/${bag.alt2}`}>{bag.alt}</Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="lnb-img">
            <li>
              <Link>
                <img src="/assets/images/lnb/bags-list.jpg" alt="bag" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="lnb-right">
          <div className="lnb-menus">
            <p className="lnb-menus-title">아이코닉 백</p>
            <ul className="lnb-sub-menus">
              {iconicBags.map((iconicBag) => (
                <li className="lnb-menuList" key={iconicBag.alt}>
                  <Link to={`/bags/tag/${iconicBag.alt2}`}>{iconicBag.alt}</Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="lnb-imgs">
            {iconicBags.slice(0, 4).map((iconicBag) => (
              <li key={iconicBag.alt} data-alt={iconicBag.alt}>
                <Link to={`/bags/tag/${iconicBag.alt2}`}>
                  <img src={iconicBag.src} alt={iconicBag.alt} />
                  <p>{iconicBag.alt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LnbBags;
