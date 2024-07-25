import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import Homepage from "./pages/Homepage"
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        {/*  This route matches any URL that doesn't match the previous routes: */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>)
}
export default App;