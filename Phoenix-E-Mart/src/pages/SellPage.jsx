
// require sell.css

import React from 'react';

const SellPage = () => {
  return (
    <div>
      <head>
        <link rel="icon" type="image/x-icon" href="/images/logo.png" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Log in</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link rel="stylesheet" href="/CSS/sell.css" />
        <link rel="stylesheet" href="/CSS/navbar.css" />
      </head>
        <div className="maincont" style={{ height: '600px' }}>
          <div></div>

          <div className="row">
            <div className="colm-form" >
              <div className="form-container" >
                <div>
                  <p style={{ fontSize: '30px' }}> Choose your category</p>
                  <hr />
                </div>

                <div className="colone" style={{marginTop:'30px'}}>
                  {/* Electronics Category */}
                  <div className="dropdown show">
                    <a
                      className="btn btn-secondary dropdown-toggle"
                      href="/productdetails"
                      role="button"
                      id="dropdownMenuLink1"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Electronics
                    </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="/productdetails/Electronics">
                            TVs, Video - Audio
                        </a>
                            <a className="dropdown-item" href="/productdetails/Electronics">Kitchen & Other Appliances</a>
                            <a className="dropdown-item" href="/productdetails/Electronics">Computers & Laptops</a>
                            <a className="dropdown-item" href="/productdetails/Electronics">Cameras & Lenses</a>
                            <a className="dropdown-item" href="/productdetails/Electronics">Games & Entertainment</a>
                            <a className="dropdown-item" href="/productdetails/Electronics">Fridges</a>
                            <a className="dropdown-item" href="/productdetails/Electronics">Computer Accessories</a>
                            <a className="dropdown-item" href="/productdetails/Electronics">Hard Disks, Printers & Monitors</a>
                            <a className="dropdown-item" href="/productdetails/Electronics">ACs</a>
                            <a className="dropdown-item" href="/productdetails/Electronics">Washing Machines</a>
                
                        {/* Add other items as needed */}
                        </div>
                  </div>

                  {/* Mobiles Category */}
                  <div className="dropdown show">
                    <a
                      className="btn btn-secondary dropdown-toggle"
                      href="/productdetails"
                      role="button"
                      id="dropdownMenuLink2"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Mobiles
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item" href="/productdetails/Mobile">
                        Mobile Phones
                      </a>
                      <a className="dropdown-item" href="/productdetails/Mobile">Accessories</a>
                      <a className="dropdown-item" href="/productdetails/Mobile">Tablets</a>
                      {/* Add other items as needed */}
                    </div>
                  </div>

                  {/* Furniture Category */}
                  <div className="dropdown show">
                    <a
                      className="btn btn-secondary dropdown-toggle"
                      href="/productdetails"
                      role="button"
                      id="dropdownMenuLink3"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Furniture
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item" href="/productdetails/Furniture">
                        Sofa & Dining
                      </a>
                      <a className="dropdown-item" href="/productdetails/Furniture">Beds & Wardrobes</a>
                      <a className="dropdown-item" href="/productdetails/Furniture">Home Decor & Garden</a>
                      <a className="dropdown-item" href="/productdetails/Furniture">Kids Furniture</a>
                      <a className="dropdown-item" href="/productdetails/Furniture">Other Household Items</a>
                      {/* Add other items as needed */}
                    </div>
                  </div>
                </div>
                
                <div className="coltwo">
                  {/* Fashion Category */}
                  <div className="dropdown show">
                    <a
                      className="btn btn-secondary dropdown-toggle"
                      href="/productdetails"
                      role="button"
                      id="dropdownMenuLink4"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Fashion
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item" href="/productdetails/Fashion">
                        Men
                      </a>
                      <a className="dropdown-item" href="/productdetails/Fashion">
                        Women
                      </a>
                      <a className="dropdown-item" href="/productdetails/Fashion">
                        Kids
                      </a>
                      {/* Add other items as needed */}
                    </div>
                  </div>

                  {/* Automobiles Category */}
                  <div className="dropdown show">
                    <a
                      className="btn btn-secondary dropdown-toggle"
                      href="/productdetails"
                      role="button"
                      id="dropdownMenuLink5"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Automobiles
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item" href="/productdetails/Automobiles">
                        Commercial Vehicles
                      </a>
                      <a className="dropdown-item" href="/productdetails/Automobiles">
                        Cars
                      </a>
                      <a className="dropdown-item" href="/productdetails/Automobiles">
                        Bikes
                      </a>
                      {/* Add other items as needed */}
                    </div>
                  </div>

                  {/* Hardware tools Category */}
                  <div className="dropdown show">
                    <a
                      className="btn btn-secondary dropdown-toggle"
                      href="/productdetails"
                      role="button"
                      id="dropdownMenuLink6"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Hardware tools
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item" href="/productdetails/Hardware">
                        Electrical
                      </a>
                      <a className="dropdown-item" href="/productdetails/Hardware">
                        Non-Electrical
                      </a>
                      {/* Add other items as needed */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

  );
};

export default SellPage;
