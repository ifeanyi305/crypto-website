/* eslint-disable */
import React from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { BsGear } from 'react-icons/bs';

const Navbar = () => (
  <div className="header">
    <img className="autoimg" src="./image/logo.png" alt="crypto logo" />
    <h1 className="title">Crypto Trade-off</h1>
    <div className="btn-con">
      <button><FaMicrophone /></button>
      <button><BsGear /></button>
    </div>
  </div>
);

export default Navbar;
