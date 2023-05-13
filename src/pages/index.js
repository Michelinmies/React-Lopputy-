import ProductList from '../components/products/ProductList';
import { connectDatabase, getAllDocuments } from '../helpers/db-util';
  
function HomePage(props) {
  return <ProductList products={props.products} />;
  
}


export async function getStaticProps() {
  
  const client = await connectDatabase();

  const products = await getAllDocuments(client, 'products', {_id: -1 }, {});
  
  return {
    props: {
      products: products.map((product) => ({
        title: product.title,
        price: product.price,
        image: product.image,
        id: product._id.toString(),
      })),
    },
    revalidate: 1,
  }; 
}

export default HomePage;
