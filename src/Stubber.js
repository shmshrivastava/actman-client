import React from 'react';

function Stubber(props){
  for (var propName in props) {
    if (props.hasOwnProperty(propName)) {
      let propValue = props[propName];
      if(props.id && typeof propValue == "function"){
          if(!window[props.id]){
            window[props.id] = {};
          }
          window[props.id][propName] = propValue;
      }
    }
  }
  return (
    <div>This is a stub component.</div>
  )
}

export default Stubber;
