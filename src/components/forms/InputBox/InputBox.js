import React from 'react';
import PropTypes from 'prop-types';
import Stubber from '../../../Stubber';

class InputBox extends React.Component {

  render(){
    return (
      <div>{this.props.label}
        <Stubber {...props} id="InputBox" />
      </div>
    )
  }
}

export default InputBox;
