import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Nvabar } from "./components/Navbar";
import { ProductDetails } from "./components/ProductDetails";
import { Products } from "./components/Products";


function App() {
  return (
    <div className="App">
       <Nvabar/>
       <Routes>
      
      <Route path="/" element={"hello"}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element={<ProductDetails/>}/>

       </Routes>
    </div>
  );
}

export default App;
