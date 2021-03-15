import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
//import App from '../containers/mobile_web/1FirstPage';


// list of items
// const list = [
//   { name: 'item1' },
//   { name: 'item2' },
//   { name: 'item3' },
//   { name: 'item4' },
//   { name: 'item5' },
//   { name: 'item6' }, 
//   { name: 'item7' },
//   { name: 'item8' },
//   { name: 'item9' }
// ];

// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
  return <div
    className={`menu-item ${selected ? 'active' : ''}`}
    >{text}</div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    var {i} = el;

    return <MenuItem text={i} key={i} selected={selected} />;
  });


const selected = 'item1';

class AppScrollBar extends Component {
  constructor(props) {
    super(props);
    console.log("props-");
    console.log(props);
    // call it again if items count changes
    this.menuItems = Menu(props.categories, selected);
  }

  state = {
    selected
  };

  onSelect = key => {
    this.setState({ selected: key });
  }


  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;

    return (
      <div className="App">
        <ScrollMenu
          data={menu}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

export default AppScrollBar;
