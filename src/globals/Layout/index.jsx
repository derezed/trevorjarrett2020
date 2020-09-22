import React from "react";
import PropTypes from "prop-types";

import "normalize.css";
import "./index.css";

const Layout = ({ children }) => (
  <>
    <div className="max-w-screen-xl w-full h-full flex">
      <div className="w-full max-w-xs relative">
        <div className="bg-black w-40 h-40 ml-auto mr-auto"></div>
        <div className="bg-black w-1 h-screen ml-auto mr-auto absolute left-0 right-0 z-0"></div>
        <div className="m-20 w-40 ml-auto mr-auto relative">
          <ul className="text-center">
            <li className="p-2 bg-yellow-100 mb-5">Link</li>
            <li className="p-2 bg-yellow-100 mb-5">Link</li>
            <li className="p-2 bg-yellow-100">Link</li>
          </ul>
        </div>
      </div>
      <div className="w-full">
        <p>Right</p>
        {children}
      </div>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
