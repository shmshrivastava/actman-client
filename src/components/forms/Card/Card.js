import React from 'react';
import PropTypes from 'prop-types';
import Stubber from '../../../Stubber';

class Card extends React.Component {

  render(){
    return (
      <div>
        <Stubber {...props} id="Card" />
      </div>
    )
  }
}

export default Card;
