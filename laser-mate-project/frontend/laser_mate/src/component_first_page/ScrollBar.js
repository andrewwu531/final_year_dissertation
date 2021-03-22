import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';


const MenuItem = ({text, cat_id, selected}) => {

  const handleClick = () => {
    return cat_id;
  }

  return <p
    className={`menu-item ${selected ? 'active' : ''}`}
    onClick={handleClick}
    >{text}</p>


};


export const Menu = (list, selected) =>
  list.map(el => {
    var {i, cat_id} = el;

    return <MenuItem text={i} key={i} cat_id={cat_id} selected={selected} />;
  });

const selected = "item1";

class AppScrollBar extends Component {

  render() {
    
    const { onSelectItem, selectedCategory, categories } = this.props;
    
    const menu = Menu(categories, selectedCategory);

    return (
      <div className="App">
        <ScrollMenu
          data={menu}
          selected={selectedCategory}
          onSelect={onSelectItem}
        />
      </div>
    );
  }
}

export default AppScrollBar;
