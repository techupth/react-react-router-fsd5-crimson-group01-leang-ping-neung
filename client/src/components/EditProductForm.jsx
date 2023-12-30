import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProductForm() {
  const [newInputName, setNewInputName] = useState("");
  const [newInputImageUrl, setNewInputImageUrl] = useState("");
  const [newInputPrice, setNewInputPrice] = useState("");
  const [newInputDescription, setNewInputDescription] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  const getProductInfo = async () => {
    const data = await axios.get(
      `http://localhost:4001/products/${params.productId}`
    );
    const productInfo = data?.data?.data;

    setNewInputName(productInfo.name);
    setNewInputImageUrl(productInfo.image);
    setNewInputPrice(productInfo.price);
    setNewInputDescription(productInfo.description);
  };

  const handleUpdateProduct = async () => {
    try {
      const newProduct = {
        name: newInputName,
        image: newInputImageUrl,
        price: newInputPrice,
        description: newInputDescription,
      };
      await axios.put(
        `http://localhost:4001/products/${params.productId}`,
        newProduct
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateProduct();
  };

  useEffect(() => {
    try {
      getProductInfo();
    } catch (error) {}
  }, []);

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={newInputName}
            onChange={(event) => setNewInputName(event.target.value)}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={newInputImageUrl}
            onChange={(event) => setNewInputImageUrl(event.target.value)}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={newInputPrice}
            onChange={(event) => setNewInputPrice(event.target.value)}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={newInputDescription}
            onChange={(event) => setNewInputDescription(event.target.value)}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
