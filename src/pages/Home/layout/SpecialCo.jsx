import '../scss/specialCo.scss';
import { special } from '../../../store/data';
import { Link } from 'react-router-dom';

const SpecialCo = () => {
  return (
    <section className="specialCo-wrap">
      <div className="inner">
        <h2>SPECIAL COLLECTION</h2>
        <div className="special-item">
          {/* TODO: special 배열 순회하며 각 아이템을 Link 카드로 렌더링 */}
          {special.map((img, key) => (
            <Link
              to={`/CustomStudio/${img.imgUrl}`}
              className={`special-item-box wow animate__animated animate__zoomIn`}
              data-wow-delay="0.6s"
              key={key}
              style={{
                backgroundImage: `url(/assets/images/static/main/SpecialCo/${img.imgUrl}.jpg)`,
              }}>
              <div className="text-wrap">
                <p className="sp-text1">{img.title1}</p>
                {/* TODO: title2가 있을 때만 렌더링 (조건부 렌더링) */}
                {img.title2 && <p className="sp-text2">{img.title2}</p>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialCo;
