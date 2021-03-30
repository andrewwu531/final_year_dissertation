import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { connect } from 'react-redux';

import { setNewCategoryId } from '../store/actions'

const MenuItem = ({text, selected}) => {
  return <p
    className={`scroll-text ${selected ? 'active' : ''}`}
    >{text}</p>
};


export const Menu = (list, selected) =>
  list.map(({i, cat_id}) => <MenuItem text={i} key={i} cat_id={cat_id} selected={selected} />);



function AppScrollBar({category_id, categories, ...props}) {
    console.log(categories, 'id', category_id)
    const menu = Menu(categories);

    const onSelectCategory = (name) => {
      const data = categories.find(item => item.i === name)
      console.log("damn")
      console.log(data)
      if (!data) return;
      props.setNewCategoryId(data.cat_id)
    }

    return (
      <div className="white-scrollbar">
        <ScrollMenu
          data={menu}
          selected={(item) => console.log('selected', item)}
          onSelect={onSelectCategory}
        />
      </div>
    );
}

export default connect(store => ({...store.category}), {setNewCategoryId})(AppScrollBar);
