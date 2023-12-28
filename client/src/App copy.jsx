import "./App.css";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ViewProductPage from "./pages/ViewProductPage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";



function App() {
  
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProductData = async () => {
    try {
      const response = await axios.get("http://localhost:4001/products");
      setProductData(response.data.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching product data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

    return (
      <>
        <div className="App">App Page</div>;
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/view" element={<ViewProductPage />} />
            <Route path="/product/create" element={<CreateProductPage />} />
            <Route path="/product/edit" element={<EditProductPage />} />
            
          </Routes>
        </Router>
       
      </>
    );
}

export default App;
