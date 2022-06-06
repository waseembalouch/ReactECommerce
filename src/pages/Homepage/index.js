import React from "react";

const Homepage = () => {
  return (
    <>
      <main role="main" className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="sticky-top">
              <ul className="list-group">
                <li className="list-group-item cursor-pointer active">
                  All Categories
                </li>
                <li className="list-group-item cursor-pointer">Fruits</li>
                <li className="list-group-item cursor-pointer">Bread</li>
              </ul>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/600x400/000/fff"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Milk</h4>
                    <h6 className="card-text">$12.00</h6>
                  </div>
                  <div className="card-footer">
                    <div className="row no-gutters">
                      <div className="col-3">
                        <button className="btn btn-secondary" type="button">
                          +
                        </button>
                      </div>
                      <div className="col-6 text-center items-count">
                        1 in cart
                      </div>
                      <div className="col-3">
                        <button className="btn btn-secondary" type="button">
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/600x400/000/fff"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Milk</h4>
                    <h6 className="card-text">$12.00</h6>
                  </div>
                  <div className="card-footer">
                    <div className="row no-gutters">
                      <div className="col-3">
                        <button className="btn btn-secondary" type="button">
                          +
                        </button>
                      </div>
                      <div className="col-6 text-center items-count">
                        1 in cart
                      </div>
                      <div className="col-3">
                        <button className="btn btn-secondary" type="button">
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/600x400/000/fff"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Milk</h4>
                    <h6 className="card-text">$12.00</h6>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-info" type="button">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Homepage;
