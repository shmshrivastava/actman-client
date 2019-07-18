import React from 'react';

import './home.scss';

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      unpublishedActivities: []
    }
    this.initStateStub();
  }

  initiStateStub(){
    this.state.unpublishedActivities = [
      {
        Id: "activity-1",
        Name: "The first Activity"
      },
      {
        Id: "activity-2",
        Name: "The second Activity"
      }
    ]
  }

  fetchUnpublishedActivities(){

  }

  render(){
    return (
      <div className="home">
        <h1>Home Page </h1>
      </div>
    )
  }
}

export default Home;
