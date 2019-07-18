import React from 'react';
import Button from '../../forms/Button/Button'

import './ActivityDetails.scss';

class ActivityDetails extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
    this.initStateStub();
  }

  initStateStub(){
    this.state.ActivityDetails = {
      ActivityId: "3124",
      Name: "Dummy activity"
    }
  }

  render(){
    return (
      <div className="activity-details">

      </div>
    )
  }
}

export default ActivityDetails;
