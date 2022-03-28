import React from 'react';
import { HamburgerIcon } from '../../assets/icons';
import './hamburger.scss';

const HamburgerMenu = (props) => {
  return (
    <button 
      className={!props.toggleState ? "hamburger-menu" : "hamburger-menu close"}
      onClick={props.onClickEvent}
    >
      <HamburgerIcon />
    </button>
  )
}

export default HamburgerMenu