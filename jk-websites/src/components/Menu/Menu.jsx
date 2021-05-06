import React from 'react';
import PropTypes, { string } from 'prop-types';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const {
      items,
    } = this.props;

    return (
      <div className="c-menu">
        <p>{items}</p>
      </div>
    );
  }
}

Menu.propTypes = {
  items: PropTypes.arrayOf(string).isRequired,
};

export default Menu;
