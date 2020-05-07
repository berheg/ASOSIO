import React from 'react';
import ListItem from '../ListItem/ListItem.component';
import './NameList.css';

const NameList = (props) => {
  return (
    <div className="name-list">
      
        <ListItem
          title={"("+ props.names + ")"}      
        />
      
    </div>
  );
};

export default NameList;