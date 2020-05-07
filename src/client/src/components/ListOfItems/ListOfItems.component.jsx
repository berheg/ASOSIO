import React from 'react';
import ContentList from '../ContentList/ContentList.component';
import NameList from '../NamesList/NamesList.component';
const ListOfItems = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div className="reaction-list">
        <ContentList
          numberOfNames={item.numberOfNames}
          content={item.content}           
          key={item.content}         
        />
        <NameList className="name-list"
        names={item.name}
        key={item.type} 
        />
        </div>
      ))}
    </div>
  );
};

export default ListOfItems;