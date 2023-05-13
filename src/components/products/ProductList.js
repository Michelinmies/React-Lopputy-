import { useState } from 'react';

import ProductItem from './ProductItem';
import classes from './ProductList.module.css';

function ProductList(props) {
  const [favorites, setFavorites] = useState([]);

  function toggleFavoriteHandler(productId) {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId));
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, productId]);
    }
  }

  return (
    <div>
      <ul className={classes.list}>
        {props.products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            isFavorite={favorites.includes(product.id)}
            onToggleFavorite={toggleFavoriteHandler}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;