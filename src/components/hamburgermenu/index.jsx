import React from 'react';
import { HamburgerIcon } from '../../assets/icons';
import disableScroll from 'disable-scroll';

const HamburgerMenu = (props) => {
  props.toggleState ? disableScroll.on() : disableScroll.off();
  
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