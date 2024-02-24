

import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loading from './pages/Loading';

const HomePage = React.lazy(() => import('./pages/Home'));
const Layout = React.lazy(() => import('./components/Layout'));
const NotFoundPage = React.lazy(() => import('./pages/NotFound'));
const ShopPage = React.lazy(() => import('./pages/Shop'));
const ProductsPage = React.lazy(() => import('./pages/Products'));
const ProductPage = React.lazy(() => import('./pages/Product'));

const App = () => (
  <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="products" element={<ProductsPage />}>
            <Route path=":id" element={<ProductPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </Suspense>
);

export default App;
