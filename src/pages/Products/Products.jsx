import './scss/Products.scss';
import CousLet from '../Home/layout/CouLet';
import { categoryKorMap } from '../../store/data';
import ProductBanner from './layout/ProductBanner';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductsStore } from '../../store/useProductsStore';
import ProductList from './layout/ProductList';
import ProductFilterNav from './layout/ProductFilterNav';

const Products = ({ list }) => {
  const { category1, category2, tags } = useParams();

  const { onFetchItems, onCateOnly, onCateTag, onCate1, items } = useProductsStore();

  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    onFetchItems();
  }, [onFetchItems]);

  useEffect(() => {
    if (category1 && category2 && tags) {
      onCateOnly(category1, category2);
    } else if (category1 && tags && !category2) {
      onCateTag(category1, tags);
    } else if (category1 && category2 && !tags) {
      onCateOnly(category1, category2);
    } else if (category1 && !category2 && !tags) {
      onCate1(category1);
    }
  }, [category1, category2, tags, onCateOnly, onCateTag, onCate1]);

  useEffect(() => {
    setFilteredList(items);
  }, [items]);

  const categoryName =
    categoryKorMap.find(
      (c) =>
        (c.eng || '').toLowerCase() === (category1 || '').toLowerCase() ||
        (c.eng || '').toLowerCase() === (tags || '').toLowerCase()
    )?.kor ||
    category1 ||
    tags;

  return (
    <section className="product-page">
      <ProductBanner bannerTitle={categoryName} />
      <ProductFilterNav list={items} onFilterChange={setFilteredList} />
      <div className="product-list-wrap">
        <h2>{categoryName}</h2>
        <ProductList list={filteredList} />
      </div>

      <CousLet />
    </section>
  );
};

export default Products;
