import React from 'react';
import { useParams } from 'react-router-dom';

const AdProduct = ({ startIndex }) => {
  const { category1 } = useParams();

  let bannerImg = [
    {
      key: 'bags',
      urls: [
        { no: 1, img: '/assets/images/static/product/bags-1.png' },
        { no: 2, img: '/assets/images/static/product/bags-2.png' },
        { no: 3, img: '/assets/images/static/product/bags-3.png' },
        { no: 4, img: '/assets/images/static/product/bags-4.png' },
      ],
    },
    {
      key: 'shoes',
      urls: [
        { no: 1, img: '/assets/images/static/product/shoes-1.png' },
        { no: 2, img: '/assets/images/static/product/shoes-2.png' },
        { no: 3, img: '/assets/images/static/product/shoes-3.png' },
        { no: 4, img: '/assets/images/static/product/shoes-4.png' },
      ],
    },
    {
      key: 'jewellery',
      urls: [
        { no: 1, img: '/assets/images/static/product/jewellery-1.png' },
        { no: 2, img: '/assets/images/static/product/jewellery-2.png' },
        { no: 3, img: '/assets/images/static/product/jewellery-3.png' },
        { no: 4, img: '/assets/images/static/product/jewellery-4.png' },
      ],
    },
    {
      key: 'wallets',
      urls: [
        { no: 1, img: '/assets/images/static/product/wallets-1.png' },
        { no: 2, img: '/assets/images/static/product/wallets-2.png' },
        { no: 3, img: '/assets/images/static/product/wallets-3.png' },
        { no: 4, img: '/assets/images/static/product/wallets-4.png' },
      ],
    },
    {
      key: 'accessories',
      urls: [
        { no: 1, img: '/assets/images/static/product/accessories-1.png' },
        { no: 2, img: '/assets/images/static/product/accessories-2.png' },
        { no: 3, img: '/assets/images/static/product/accessories-3.png' },
        { no: 4, img: '/assets/images/static/product/accessories-4.png' },
      ],
    },
  ];

  const banner = bannerImg.find((img) => img.key === category1);
  if (!banner) return null;

  const bannerShow = banner.urls.slice(startIndex, startIndex + 2);

  return (
    <>
      {bannerShow.map((item, i) => (
        <div key={item.no} className={`banner banner${item.no}`}>
          <img src={item.img} alt={`banner banner-${item.no}`} />
        </div>
      ))}
    </>
  );
};

export default AdProduct;
