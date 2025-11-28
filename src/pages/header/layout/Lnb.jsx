import { Link } from 'react-router-dom';
import './../scss/lnb.scss';
import { useHeaderStore } from '../../../store/useHeaderStore';
import LnbSubMenu from './LnbSubMenu';

const Lnb = ({ isOpen, onClose }) => {
  const activeMenu = useHeaderStore((state) => state.activeMenu);
  const setActiveMenu = useHeaderStore((state) => state.setActiveMenu);
  const menuKeys = Object.keys(useHeaderStore.getState().menuData);

  //TODO LNB 창 닫기
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && <div className="lnb-dimmed" onClick={handleClose}></div>}

      <nav className={`lnb-wrap ${isOpen ? 'active' : ''}`}>
        <div className="lnb-title-list">
          <ul className="lnb-title">
            {menuKeys.map((key) => {
              const menuTitle = useHeaderStore.getState().menuData[key].title;
              return (
                <li key={key}>
                  <Link
                    onClick={() => setActiveMenu(key)}
                    className={activeMenu === key ? 'active' : ''}>
                    {menuTitle}
                  </Link>
                </li>
              );
            })}
            <li className="map">
              <Link to={'/local'} onClick={onClose}>
                매장찾기
              </Link>
            </li>
          </ul>
        </div>

        <div className="lnb-list">
          {menuKeys.map((key) => (
            <LnbSubMenu
              key={key}
              categoryKey={key}
              isActive={activeMenu === key}
              onCloseLnb={handleClose}
            />
          ))}
        </div>
      </nav>
    </>
  );
};

export default Lnb;
