import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewProductPage() {
  const [displayedProduct, setDisplayProduct] = useState([]);

  const params = useParams();

  const getProducts = async () => {
    const data = await axios.get(
      `http://localhost:4001/products/${params.productId}`
    );
    setDisplayProduct(data.data.data);
  };

  useEffect(() => {
    try {
      getProducts();
    } catch (error) {}
  }, []);

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{displayedProduct.name}</h2>
        <p>{displayedProduct.price} THB</p>
        <p>{displayedProduct.description}</p>
      </div>
      <button>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
