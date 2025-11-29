import React, { useEffect, useState } from 'react';
import '../scss/ProductBanner.scss';
import { useParams } from 'react-router-dom';

const ProductBanner = ({ korTitle, bannerTitle }) => {
  // const { category1, category2, tags } = useParams();
    const { category1 } = useParams();
  const [banner, setBanner] = useState('');

  let bannerImg = [
    { key: 'bags', url: '/assets/images/static/product/Product-bags.png' },
    { key: 'shoes', url: '/assets/images/static/product/Product-shoes.png' },
    { key: 'jewellery', url: '/assets/images/static/product/Product-jewellery.png' },
    { key: 'wallets', url: '/assets/images/static/product/Product-wallets.png' },
    { key: 'accessories', url: '/assets/images/static/product/Product-accessories.png' },
  ];

  useEffect(() => {
    setBanner(bannerImg.filter((img) => img.key === category1));
  }, [category1]);

  return (
    <section className="ProductBanner">
      <div>
        <img src={banner[0]?.url} alt="" />
      </div>
      <div className="text-box">
        <span>{korTitle}</span>
        <h2>Miu Miu {bannerTitle}</h2>
      </div>
    </section>
  );
};

export default ProductBanner;
