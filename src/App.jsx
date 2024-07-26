import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import Homepage from "./pages/Homepage"
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} /> {/* "index" mean Homepage is default route  */}
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<p>LIST OF CITIES</p>} /> {/* Default child route  */}
          <Route path="cities" element={<p>Cities</p>}></Route>
          <Route path="countries" element={<p>Countries</p>}></Route>
          <Route path="form" element={<p>Form</p>}></Route>
        </Route>
        {/*  This route matches any URL that doesn't match the previous routes: */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>)
}
export default App;