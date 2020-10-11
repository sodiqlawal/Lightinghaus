import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../views/home";
// import LoadingBar from "react-redux-loading-bar";

const GuestRoutes = () => (
  <div>
    <h1>YOU ARE A GUEST</h1>
    <br />
    <p>
      you are seeing this page because you do not belong to any cooperative.
    </p>
  </div>
);

const CooperativeRoutes = () => {
  return (
      <Routes>
        {/* home */}
        <Route path="/" element={<Home />} />


      </Routes>
  );
};

const App = () => {
  return (
    <>
      {/* Do not remove this style. it can't work in a class */}
      {/* <LoadingBar
        showFastActions
        style={{ backgroundColor: "red", height: "2px", zIndex: 1000 }}
      /> */}

      <Routes>
        <Route path="/guest" element={<GuestRoutes />} />
        <Route path="/*" element={<CooperativeRoutes />} />
      </Routes>
    </>
  );
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppRoutes;
