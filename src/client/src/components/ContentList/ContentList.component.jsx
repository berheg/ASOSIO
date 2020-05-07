import React from 'react';
import ListItem from '../ListItem/ListItem.component';

const ContentList = (props) => {
  return (
    <div className="content-list">
      
        <ListItem
          title={props.content +"X" + props.numberOfNames}      
        />
      
    </div>
  );
};

export default ContentList;