import React, { Component } from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends Component {
  state = {
    sections: [
      {
        title: 'skincare',
        imageUrl: 'images/skincare.jpg',
        id: 1,
        linkUrl: 'shop/skincare',
      },
      {
        title: 'bodycare',
        imageUrl: 'images/bodycare.jpg',
        id: 2,
        linkUrl: 'shop/bodycare',
      },
      {
        title: 'fragrance',
        imageUrl: 'images/fragrance.jpg',
        id: 3,
        linkUrl: 'shop/fragrance',
      },
      {
        title: "women's",
        imageUrl: 'images/alexis-rose.webp',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens',
      },
      {
        title: "men's",
        imageUrl: 'images/david-rose.webp',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens',
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
