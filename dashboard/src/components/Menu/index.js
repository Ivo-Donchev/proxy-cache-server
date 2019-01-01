import React from 'react';

import {SideNav, Nav} from 'react-sidenav';

import './styles.css';

const theme = {
  selectionColor: '#FFF',
  hoverBgColor: '#181b20'
};

const Menu = ({options, onOptionSelect}) => (
  <div className="Menu">
    <div className="Navigation">
      <SideNav
        defaultSelectedPath="1"
        theme={theme}
        onItemSelection={onOptionSelect}>
        {options.map(({value}) => (  
          <Nav key={value} id={value}>
            <div className="Text">{value}</div>
          </Nav>
        ))}
      </SideNav>
    </div>
  </div>
);

export default Menu;
