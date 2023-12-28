import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";
import HomePage from "./pages/HomePage";
import ViewProductPage from "./pages/ViewProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateProductPage />} />
          <Route path="/edit" element={<EditProductPage />} />
          <Route path="product/view/:productId" element={<ViewProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
