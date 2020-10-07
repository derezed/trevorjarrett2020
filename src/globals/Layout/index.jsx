import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import {
  FaTwitter,
  FaTwitterSquare,
  FaEnvelope,
  FaEnvelopeOpen,
  FaInstagram,
  FaInstagramSquare,
  FaGithub,
  FaGithubSquare
} from "react-icons/fa";

import "normalize.css";
import "./index.css";

const Layout = ({ children }) => (
  <>
    <div className="max-w-screen-xl w-full h-full flex flex-col desktop:flex-row desktop:justify-between">
      <div className="w-full max-w-xs relative overflow-hidden mr-auto ml-auto">
        <div className="w-40 h-40 ml-auto mr-auto mb-2">
          <Link to="/">
            <img className="rounded-full" src="https://avatars3.githubusercontent.com/u/3466483?s=460&u=6ccad09f09f771806a19bb77dd4718b1868496bb&v=4" alt="It's me; Trevor Jarrett"/>
          </Link>
        </div>
        <div className="bg-navyBlue w-1 h-full ml-auto mr-auto absolute left-0 right-0 z-0"></div>
        <div className="w-56 ml-auto mr-auto relative">
          <div className="text-center bg-royalBlue mt-10">
            <h1 className="text-ulthuanGrey inline text-4xl">Trevor Jarrett</h1>
          </div>
          <ul className="mt-10 text-center">
            <li className="p-2 mb-5 bg-royalBlue inline desktop:block">
              <Link to="blog" className="text-ulthuanGrey border-b-2 border-solid border-ulthuanGrey hover:border-navyBlue" href="#">Blog</Link>
            </li>
          </ul>

          <ul className="mt-10 text-center flex justify-between bg-royalBlue desktop:block">
            <li className="p-2 mb-5 bg-royalBlue">
              <Link to="mailto:&#116;&#114;&#101;&#118;&#111;&#114;&#064;&#116;&#114;&#101;&#118;&#111;&#114;&#106;&#097;&#114;&#114;&#101;&#116;&#116;&#046;&#099;&#111;&#109;" target="_blank" rel="noopener noreferrer">
                <FaEnvelope
                  className="icon-hover-inactive mr-auto ml-auto"
                  size="2em"
                />
                <FaEnvelopeOpen
                  className="icon-hover-active mr-auto ml-auto"
                  size="2em"
                />
              </Link>
            </li>
            <li className="p-2 mb-5 bg-royalBlue">
              <a href="https://github.com/derezed" target="_blank" rel="noopener noreferrer">
                <FaGithub
                  className="icon-hover-inactive mr-auto ml-auto"
                  size="2em"
                />
                <FaGithubSquare
                  className="icon-hover-active mr-auto ml-auto"
                  size="2em"
                />
              </a>
            </li>
            <li className="p-2 mb-5 bg-royalBlue">
              <a href="https://twitter.com/SnackAttackTJ" target="_blank" rel="noopener noreferrer">
                <FaTwitter
                  className="icon-hover-inactive mr-auto ml-auto"
                  size="2em"
                />
                <FaTwitterSquare
                  className="icon-hover-active mr-auto ml-auto"
                  size="2em"
                />
              </a>
            </li>
            <li className="p-2 mb-5 bg-royalBlue">
              <a href="https://www.instagram.com/txrev1991/" target="_blank" rel="noopener noreferrer">
                <FaInstagram
                  className="icon-hover-inactive mr-auto ml-auto"
                  size="2em"
                />
                <FaInstagramSquare
                  className="icon-hover-active mr-auto ml-auto"
                  size="2em"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full max-w-3xl mt-8 desktop:mt-2 relative overflow-hidden">
        <div className="right-content relative">
          {children}
        </div>
      </div>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
