import React, { Component } from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends Component {
  state = {
    sections: [
      {
        title: 'bodycare',
        imageUrl: 'images/bodycare.jpg',
        id: 1,
        linkUrl: 'shop/bodycare',
      },
      {
        title: 'fragrance',
        imageUrl: 'images/fragrance.jpg',
        id: 2,
        linkUrl: 'shop/fragrance',
      },
      {
        title: 'apparel',
        imageUrl: 'images/apparel.jpg',
        id: 3,
        linkUrl: 'shop/apparel',
      },
      {
        title: 'gifts',
        imageUrl: 'images/alexis-rose.jpg',
        id: 4,
        size: 'large',
        linkUrl: 'shop/gifts',
      },
      {
        title: 'goods',
        imageUrl: 'images/david-rose.jpg',
        id: 5,
        size: 'large',
        linkUrl: 'shop/goods',
      },
    ],
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
