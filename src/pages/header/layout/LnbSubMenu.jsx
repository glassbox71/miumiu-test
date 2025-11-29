import React, { useMemo } from 'react';
import { useHeaderStore } from '../../../store/useHeaderStore';
import { useProductsStore } from '../../../store/useProductsStore';
import { Link } from 'react-router-dom';
import '../scss/lnbSub.scss';

const LnbSubMenu = ({ categoryKey, isActive, onCloseLnb }) => {
  const {
    title,
    data: menuData,
    path: menuPath,
    image: imageSrc,
  } = useHeaderStore((state) => state.menuData[categoryKey]);

  const allItems = useProductsStore((state) => state.items);

  //TODO  LNB 랜덤 사진 가지고 오는 코드;
  const randomItems = useMemo(() => {
    if (allItems.length === 0) return [];
    const filteredItems = allItems.filter((item) => item.category1 === categoryKey);
    // console.log(filteredItems, 'filteredItems');
    const shuffled = [...filteredItems].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  },[]);

  //TODO  LNB 카테고리 대표 사진 가지고 오는 코드;
  const getItemImageSrc = (item) =>
    item?.detail_images?.[0]?.url || '/assets/images/default-product-image.png';

  return (
    <div className={`lnb-box ${isActive ? '' : 'hidden'}`}>
      <div className="lnb-inner">
        <div className="lnb-left">
          <div className="lnb-menus">
            <p className="lnb-menus-title">{title}</p>
            <ul className="lnb-sub-menus">
              {menuData.map((menuItem) => (
                <li className="lnb-menuList" key={menuItem.alt} onClick={onCloseLnb}>
                  <Link to={`/${menuPath}/${menuItem.alt2}`}>{menuItem.alt}</Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="lnb-img">
            <li>
              <div>
                <img src={imageSrc} alt={title} />
              </div>
            </li>
          </ul>
        </div>
        <div className="lnb-right">
          <ul className="lnb-imgs">
            {randomItems.map((item) => (
              <li key={item.id}>
                <Link to={`/product/${item.id}`} onClick={onCloseLnb}>
                  <img src={getItemImageSrc(item)} alt={item.name} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LnbSubMenu;
