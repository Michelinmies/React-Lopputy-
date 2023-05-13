import classes from './ProductDetail.module.css';

function ProductDetail(props) {
  return (
    <section className={classes.detail}>
      <img
        src={props.image}
        alt={props.title}
      />
      <h1>{props.title}</h1>
      <price>{props.price}€</price>
      <p>{props.description}</p>
    </section>
  );
}

export default ProductDetail;
