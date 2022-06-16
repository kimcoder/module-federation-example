import React from "react";

const Button = React.lazy(() => import("core/Button"));

const MainApplication = () => {
  return (
    <div>
      <section>
        <h1>MAIN PAGE</h1>
      </section>
      <section>
        <React.Suspense fallback="fallback">
          <Button>Button of ORDER</Button>
        </React.Suspense>
      </section>
    </div>
  );
};

export default MainApplication;
