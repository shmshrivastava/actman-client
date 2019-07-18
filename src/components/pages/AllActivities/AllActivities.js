import React from 'react';
import Button from '../../forms/Button/Button'

import './AllActivities.scss';

class AllActivities extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
    this.initStateStub();
  }

  initStateStub(){
    this.state.allActivities = [
      {
        ActivityId: "activity-1",
        Name: "First Demo Activity"
      },
      {
        ActivityId: "activity-2",
        Name: "Second Demo Activity"
      }
    ]
  }

  getAllActivities(){

  }


  render(){
    return (
      <div className="all-activities">

      </div>
    )
  }
}

export default AllActivities;
