
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

import Card from '../ui/Card';
import classes from './ProductItem.module.css';

function ProductItem(props) {
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);

  function showDetailsHandler() {
    router.push('/' + props.id);
  }

  function toggleFavoriteHandler() {
    setIsFavorite(!isFavorite);
    props.onToggleFavorite(props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <price>{props.price}€</price>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Contact</button>
          <button onClick={toggleFavoriteHandler}>
            {isFavorite ? <FaStar color="blue" /> : <FaRegStar />}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ProductItem;