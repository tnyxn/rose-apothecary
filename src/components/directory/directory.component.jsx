import React, { Component } from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends Component {
  state = {
    sections: [
      {
        title: 'skincare',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
        linkUrl: 'shop/hats',
      },
      {
        title: 'bodycare',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        linkUrl: 'shop/jackets',
      },
      {
        title: 'fragrances',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        linkUrl: 'shop/sneakers',
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
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
