import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

const Header = () => {
  return (
    <>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h2>
                <Link className="text-white">FABULOUS MERCH</Link>
              </h2>
            </div>

            <div className="col-8">
              <div className="menu-bottom d-flex align-items-center">
                <div></div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className="text-white" to="/">
                      HOME
                    </NavLink >
                    <NavLink className="text-white" to="/">
                      ABOUT US
                    </NavLink>
                    <NavLink className="text-white" to="/">
                      LOGIN
                    </NavLink>
                    <NavLink className="text-white" to="/">
                      CONTACT US
                    </NavLink>
                    <NavLink className="text-white" to="/">
                      ORDERS
                    </NavLink>
                    <NavLink className="text-white" to="/">
                      CART
                    </NavLink>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-5">
              <div class="input-group mb-3">
                <input type="text"
                  class="form-control"
                  placeholder="Search Product"
                  aria-label="Search Product"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text"
                  id="basic-addon2"><BsSearch /></span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header