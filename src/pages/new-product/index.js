
import { useRouter } from 'next/router';

import NewProductForm from '../../components/products/NewProductForm';

function NewProductPage() {
    const router = useRouter();

    async function addProductHandler(enteredProductData) {
      
      const response = await fetch('/api/new-product', {
        method: 'POST',
        body: JSON.stringify(enteredProductData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();

      console.log(data);

      router.push('/');
    }
    
    return <NewProductForm onAddProduct={addProductHandler} />
  }

export default NewProductPage;