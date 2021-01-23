import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          Guest List
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/add'>
                Add
              </Link>
            </li>
          </ul>
          {/* <button className='btn btn-success my-2 my-sm-0' type='submit'>
            Add
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
