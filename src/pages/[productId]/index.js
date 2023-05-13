
import { ObjectId } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';
import ProductDetail from '../../components/products/ProductDetail';
import { connectDatabase, getDocumentIdList, getOneDocument } from '../../helpers/db-util';

function ProductDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.productData.title}</title>
        <meta name='description' content={props.productData.description} />
    </Head> 
    <ProductDetail
        image={props.productData.image}
        title={props.productData.title}
        price={props.productData.price}
        description={props.productData.description}
      />
    </Fragment>       
  );
}

export async function getStaticPaths() {


  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    console.log("Error connectin to MongoDB: ", error);
  }
  
  let products;

  try {
    products = await getDocumentIdList(client, 'products');
    client.close();
  } catch (error) {
    console.log("Error getting product list:", error);
  }

  return {
    fallback: 'blocking',
    paths: products.map((product) => ({
      params: { productId: product._id.toString() },
    })),
  };
}
  
export async function getStaticProps(context) {
  
  const productId = context.params.productId;

  const client = await connectDatabase();
  const productIdObj = new ObjectId(productId);
  const selectedProduct = await getOneDocument(client, 'products', {_id : productIdObj } );
  client.close();

  return {
    props: {
      productData: {
        id: selectedProduct._id.toString(),
        title: selectedProduct.title,
        price: selectedProduct.price,
        image: selectedProduct.image,
        description: selectedProduct.description,
      },
    },
  };
}

export default ProductDetails;
