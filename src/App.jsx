import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import Homepage from "./pages/Homepage"
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout"
import CityList from "./components/CityList";

const BASE_URL = 'http://localhost:9000'

function App() {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true)
        const res = await fetch(`${BASE_URL}/cities`)
        const data = await res.json()
        setCities(data)
      } catch {
        alert('There was an error loading data...')

      } finally {
        setIsLoading(false)
      }
    }
    fetchCities()
  }, [])

  return (
    <BrowserRouter>
      <Routes>

        <Route index element={<Homepage />} /> {/* "index" mean Homepage is default route  */}
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="app" element={<AppLayout />}>

          <Route index element={<CityList cities={cities} isLoading={isLoading} />} /> {/* Default child route  */}
          <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
          <Route path="countries" element={<p>Countries</p>} />
          <Route path="form" element={<p>Form</p>} />

        </Route>
        {/*  This route matches any URL that doesn't match the previous routes: */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>)
}
export default App;