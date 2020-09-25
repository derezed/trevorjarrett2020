import React from "react";
import PropTypes from "prop-types";

import "normalize.css";
import "./index.css";

const Layout = ({ children }) => (
  <>
    <div className="max-w-screen-xl w-full h-full flex">
      <div className="w-full max-w-xs relative">
        <div className="w-40 h-40 ml-auto mr-auto">
          <img className="rounded-full shadow-circle border-2 border-royalBlue" src="https://avatars3.githubusercontent.com/u/3466483?s=460&u=6ccad09f09f771806a19bb77dd4718b1868496bb&v=4" alt="It's me; Trevor Jarrett"/>
        </div>
        <div className="bg-navyBlue w-1 h-screen ml-auto mr-auto absolute left-0 right-0 z-0"></div>
        <div className="m-10 w-56 ml-auto mr-auto relative">
          <div className="mt-10 pb-2 pt-2 text-center bg-royalBlue">
            <h1 className="text-ulthuanGrey">Trevor Jarrett</h1>
          </div>
          <ul className="mt-10 text-center">
            <li className="p-2 mb-5 bg-royalBlue">
              <a className="text-ulthuanGrey" href="#">Link</a>
            </li>
            <li className="p-2 mb-5 bg-royalBlue">
              <a className="text-ulthuanGrey" href="#">Link</a>
            </li>
            <li className="p-2 mb-5 bg-royalBlue">
              <a className="text-ulthuanGrey" href="#">Link</a>
            </li>
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
