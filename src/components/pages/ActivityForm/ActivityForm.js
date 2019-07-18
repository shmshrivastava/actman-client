import React from 'react';
import Button from '../../forms/Button/Button'

import './ActivityForm.scss';

class ActivityForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
    this.onSubmitClicked = this.onSubmitClicked.bind(this);
    this.fetchSchema();
    this.fetchData();
    this.initStateStub();
  }

  initiStateStub(){
    this.state.data = {

    }
    this.state.schema = {

    }
  }

  fetchSchema(){

  }

  fetchData(){

  }

  onSubmitClicked(){
    console.log("on submit clicked");
  }

  render(){
    return (
      <div className="activity-form">
        <h1>Activity Form</h1>
      </div>
    )
  }
}

export default ActivityForm;
