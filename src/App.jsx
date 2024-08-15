/**
 * The main App component that sets up the routing for the application.
 *
 * This component uses the `BrowserRouter` from `react-router-dom` to enable client-side routing.
 * It also uses the `AuthProvider` and `CitiesProvider` to provide authentication and cities data to the app.
 *
 * The routing is set up using the `Routes` and `Route` components from `react-router-dom`.
 */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';
import Login from './pages/Login';
import { CitiesProvider } from './contexts/CitiesContext';
import { AuthProvider } from './contexts/FakeAuthContext';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            {/* "index" mean Homepage is default route  */}
            <Route index element={<Homepage />} />{' '}
            <Route path='product' element={<Product />} />
            <Route path='pricing' element={<Pricing />} />
            <Route path='login' element={<Login />} />
            <Route
              path='app'
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              {/* Go to the CityList component ('cities' path) by default */}
              <Route index element={<Navigate replace to='cities' />} />
              {/* Default child route  */}
              <Route path='cities' element={<CityList />} />
              <Route path='cities/:id' element={<City />} />
              <Route path='countries' element={<CountryList />} />
              <Route path='form' element={<Form />} />
            </Route>
            {/*  This route matches any URL that doesn't match the previous routes: */}
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}
export default App;
