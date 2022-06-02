import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IMSLogo } from '../../assets/ourlogo';
import FilledButton from '../../components/buttons/FilledButton';
import HamburgerMenu from '../../components/hamburgermenu';
/* import LiveButton from '../../components/LiveButton'; */
import SearchComponent from '../../components/searchcomponent';
import MegaMenu from '../../pagegroups/megamenu';

const Header = () => {
  const history = useHistory();

  const [offcanvasShow, setOffcanvasShow] = useState(false);
  const onCanvasHandler = () => {
    setOffcanvasShow((prev) => !prev);
  };

  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  const header = document.querySelector(".header");
  const headerHeight = header && header.getBoundingClientRect().height;

  useEffect(() => {
    setHeaderTop(headerHeight);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerHeight]);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };


  /* Handeling clicking on logo */
  const handleClickOnLogo = () => {
    offcanvasShow ? onCanvasHandler() : window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <React.Fragment>
      <div className={`header ${scroll > headerTop && "shrinked-header"}`}>
        <div className="container">
          <div className="header-left">
            <div className="logo">
              <Link
                to="/"
                id='IMS_Logo'
                onClick={handleClickOnLogo}
              >
                <IMSLogo />
              </Link>
            </div>
            {/* <LiveButton /> */}
          </div>
          <div className="header-right">
            <SearchComponent />
            <FilledButton
              class={"join-button"}
              text={"JOIN"}
              onClick={() => history.push('/join')}
            />
            <HamburgerMenu onClickEvent={onCanvasHandler} toggleState={offcanvasShow} />
          </div>
        </div>
      </div>
      <MegaMenu show={offcanvasShow} onclose={onCanvasHandler} headerHeight={headerTop} />
    </React.Fragment>
  )
}

export default Header;