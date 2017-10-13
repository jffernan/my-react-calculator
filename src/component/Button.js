import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  }

  render() {
    let className = "component-button";
    if (this.props.blue) {
      className += " blue";
    }
    if (this.props.wide) {
      className += " wide";
    }

    return (
      <div
        className={className}
      >
        <button
          onClick={this.handleClick}
        >
          {this.props.name}
        </button>
      </div>
    );
  }
}
Button.propTypes = {
  name: PropTypes.string,
  blue: PropTypes.bool,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
};
export default Button;
