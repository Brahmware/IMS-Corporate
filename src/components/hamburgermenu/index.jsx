import React from 'react';
import { HamburgerIcon } from '../../assets/icons';

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