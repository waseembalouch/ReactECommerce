import React from "react";


const PageWrapper = ({ children }) => {
  return (
    <>
      <main role="main" className="container">
        <div>{children}</div>

        <div className="text-center">
          <p className="mt-5 mb-3 text-muted">© 2017-2022</p>
        </div>
      </main>
    </>
  );
};

export default PageWrapper;
