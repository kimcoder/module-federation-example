import React from "react";

const Button = React.lazy(() => import("core/Button"));

const OrderApplication = () => {
  return (
    <div>
      <section>
        <h1>ORDER PAGE</h1>
      </section>
      <section>
        <React.Suspense fallback="fallback">
          <Button>Button of ORDER</Button>
        </React.Suspense>
      </section>
    </div>
  );
};

export default OrderApplication;
