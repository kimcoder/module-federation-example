import React from "react";

const Button = React.lazy(() => import("core/Button"));

const ProductApplication = () => {
  return (
    <div>
      <section>
        <h1>PRODUCTS PAGE</h1>
      </section>
      <section>
        <React.Suspense fallback="fallback">
          <Button>Button of PRODUCTS</Button>
        </React.Suspense>
      </section>
    </div>
  );
};

export default ProductApplication;
