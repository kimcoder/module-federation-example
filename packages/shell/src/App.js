import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

const Tabs = React.lazy(() => import("core/Tabs"));
const Main = React.lazy(() => import("main/MainApplication"));

const App = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={"Loading"}>
        <Tabs>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/order">Order</Link>
        </Tabs>
      </React.Suspense>
      <React.Suspense fallback={"Loading"}>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/products" element={<Products />} /> */}
          {/* <Route path="/order" element={<Order />} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
