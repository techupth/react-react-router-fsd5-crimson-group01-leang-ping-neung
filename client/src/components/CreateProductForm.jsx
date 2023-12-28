import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 1. สร้าง state ไว้รองรับค่า value
// 2. สร้าง ฟังก์ชันสำหรับ ปุ่ม submit
// 3. สร้างฟังก์ชันสำหรับ(18) ยิง API ดักให้ครบทั้งสำเร็จและ Error

function CreateProductForm() {
  const [inputName, setInputName] = useState("");
  const [inputImageUrl, setInputImageUrl] = useState("");
  const [inputPrice, setInputPrice] = useState(0);
  const [inputDescription, setInputDescription] = useState("");

  const navigate = useNavigate();

  const createProduct = async () => {
    try {
      const newProduct = {
        name: inputName,
        image: inputImageUrl,
        price: inputPrice,
        description: inputDescription,
      };
      await axios.post("http://localhost:4001/products", newProduct);
      navigate("/");
    } catch (error) {
      alert("Error", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createProduct();
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={inputName}
            onChange={(event) => setInputName(event.target.value)}
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
            value={inputImageUrl}
            onChange={(event) => setInputImageUrl(event.target.value)}
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
            value={inputPrice}
            onChange={(event) => setInputPrice(event.target.value)}
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
            value={inputDescription}
            onChange={(event) => setInputDescription(event.target.value)}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
