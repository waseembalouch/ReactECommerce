import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOutUserStart } from "../../redux/User/user.actions";
import { selectCartItemsCount } from "./../../redux/Cart/cart.selectors";


const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state)
});

const Header = (props) => {
  const dispatch = useDispatch();
  const { currentUser, totalNumCartItems } = useSelector(mapState);
  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <div className="container">
        <Link to="/" href="#" className="navbar-brand">
          MyShop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/cart">
                Cart
                <span className="badge badge-warning badge-pill">{totalNumCartItems}</span>
              </Link>
            </li>
            {!currentUser && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/registration">
                    Registration
                  </Link>
                </li>
              </>
            )}
          </ul>

          {currentUser && (
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle cursor-pointer"
                  id="dropdown01"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Umair
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  <Link className="dropdown-item" to="/dashboard">
                    Dashboard
                  </Link>
                  <a className="dropdown-item">My Orders</a>

                  <Link className="dropdown-item" to="/manageproduct">
                    Manage Products
                  </Link>

                  <a className="dropdown-item">Manage Orders</a>
                  <a className="dropdown-item" onClick={() => signOut()}>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
