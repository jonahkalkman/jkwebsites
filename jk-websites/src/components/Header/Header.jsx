import React from 'react';

import Menu from '../Menu';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItems: [
        'Home',
        'About',
      ],
    };
  }

  render() {
    const {
      menuItems,
    } = this.state;

    return (
      <div className="c-header">
        <Menu text={menuItems} />
      </div>
    );
  }
}

export default Header;
