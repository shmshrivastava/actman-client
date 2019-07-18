import React from 'react';
import PropTypes from 'prop-types';
import Stubber from '../../../Stubber';

class Button extends React.Component {

  render(){
    return (
      <div>
        <button>{this.props.text}</button>
        <Stubber {...props} id="Button" />
      </div>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string
}

export default Button;
