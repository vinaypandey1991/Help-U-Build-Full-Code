import React, { useState } from 'react'
import StarRating from '../../components/StarRating/StarRating'

const vendor = [
  {
    id: 1,
    Profile: "https://via.placeholder.com/60",
    Orders: "9465 orders",
    Name: "Abhinav Singh",
    Category: "Architect",
    Language: ["English", "Hindi"],
    Exp: "3 Years",
    DurationPrice: "20/min"

  },
  {
    id: 2,
    Profile: "https://via.placeholder.com/60",
    Orders: "1002 orders",
    Name: "Shivam Singh",
    Category: "Architect",
    Language: ["English", "Hindi"],
    Exp: "6 Years",
    DurationPrice: "20/min"

  },
  {
    id: 3,
    Profile: "https://via.placeholder.com/60",
    Orders: "9465 orders",
    Name: "Virat Singh",
    Category: "Architect",
    Language: ["English", "Hindi"],
    Exp: "4 Years",
    DurationPrice: "20/min"

  },
  {
    id: 3,
    Profile: "https://via.placeholder.com/60",
    Orders: "9465 orders",
    Name: "Virat Singh",
    Category: "Architect",
    Language: ["English", "Hindi"],
    Exp: "4 Years",
    DurationPrice: "20/min"

  },
  {
    id: 3,
    Profile: "https://via.placeholder.com/60",
    Orders: "9465 orders",
    Name: "Virat Singh",
    Category: "Architect",
    Language: ["English", "Hindi"],
    Exp: "4 Years",
    DurationPrice: "20/min"

  },
  {
    id: 3,
    Profile: "https://via.placeholder.com/60",
    Orders: "9465 orders",
    Name: "Virat Singh",
    Category: "Architect",
    Language: ["English", "Hindi"],
    Exp: "4 Years",
    DurationPrice: "20/min"

  }
]

function TalkToArchitect() {
  return (
    <>
    <div className='main-bg'>
      <div className='section architecture-section-one'>
        <div className='container-fluid architecture-section-p'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='top-filter-area'>
                <form>
                  <div className='top-bar'>
                    <div className='architectur-bar'>
                      <h3 className='architecture-heading'>Talk To Architect</h3>
                    </div>
                    <div className='architectur-bar'>
                      <div className="available-balance medium-device-balance"> Available balance: <main class="balance-avail"> ₹ 0 </main></div>
                    </div>
                    <div className='architectur-bar'>
                      <div className='recharge-btn'>
                        <a className="medium-device-recharge">Recharge</a>
                        <button className="filter_short-btn"><i class="fa fa-filter"></i> Filter </button>
                        <button type="button" class="btn filter-short-by" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fa fa-sort-amount-desc"></i> Sort by</button>
                        {/* filter-short-by modal popup */}
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Sort by</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                <div class="short_by_object">
                                  <input type="radio" name="shorting" autocomplete="off" class="form-check-input" id="short_0" value="" />
                                  <label class="lable_radio selected popularty-lable" for="short_0"> Popularity </label>
                                </div>
                                <div class="short_by_object"><input type="radio" name="shorting" autocomplete="off" class="form-check-input" id="short_2" value="sortByExperience_0" /><label class="lable_radio" for="short_2"> Experience  : Low to High </label></div>
                                <div class="short_by_object"><input type="radio" name="shorting" autocomplete="off" class="form-check-input" id="short_3" value="sortByOrder_1" /><label class="lable_radio" for="short_3"> Total orders : High to Low </label></div>
                                <div class="short_by_object"><input type="radio" name="shorting" autocomplete="off" class="form-check-input" id="short_4" value="sortByOrder_0" /><label class="lable_radio" for="short_4"> Total orders : Low to High </label></div>
                                <div class="short_by_object"><input type="radio" name="shorting" autocomplete="off" class="form-check-input" id="short_5" value="sortByPrice_1" /><label class="lable_radio" for="short_5"> Price : High to Low </label></div>
                                <div class="short_by_object"><input type="radio" name="shorting" autocomplete="off" class="form-check-input" id="short_6" value="sortByPrice_0" /><label class="lable_radio" for="short_6"> Price : Low to High </label></div>
                                <div class="short_by_object"><input type="radio" name="shorting" autocomplete="off" class="form-check-input" id="short_7" value="sortByRating_1" /><label class="lable_radio" for="short_7"> Rating : High to Low </label></div>
                              </div>

                            </div>
                          </div>
                        </div>
                        {/* enf of filter sort by*/}
                        <div className="form-search classsearhMbile">
                          <input name="searchText" type="search" autocomplete="off" id="searchAstroQuery" class="form-control customform-control postion_Rel ng-pristine ng-valid ng-touched" placeholder="Search..." /><i class="fa fa-search"></i></div>
                      </div>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section architecture-section-2 mb-5'>
        <div className="container-fluid architecture-section-p">
          <div className='row'>
            {vendor.map((item, index) => (
              <div className='col-12 col-md-6 col-lg-6 col-xl-4' key={index}>
                <div className="card-custom align-items-center justify-content-between my-2">
                  <div className="card-detail align-items-center">
                    <div style={{display:'flex'}}>
                      <div className='profile-image text-center'>
                        <img
                          src={item.Profile || 'https://via.placeholder.com/60'}
                          onError={(e) => e.target.src = 'https://via.placeholder.com/60'}
                          alt="Profile"
                          className="profile-img me-4"
                        />
                        <StarRating rating={1} />
                        <p className="text-small text-muted mb-1 me-4">{item.Orders}</p>
                      </div>
                      <div className='profile-content'>
                        <h5 className="mb-1"><a href='/architect-profile'>{item.Name}</a></h5>
                        <p className="text-small text-muted mb-1">{item.Category}</p>
                        <p className="text-small text-muted mb-1">{item.Language[1]}</p>
                        <p className="text-small mb-0">{item.Exp}</p>
                        <p className="mb-2">
                          <strong>{item.DurationPrice}</strong>
                        </p>
                      </div>
                      </div>
                      <div className="text-end contact-btn">
                        <div class="dropdown connect-btn">
                          <a class="btn dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Connect
                          </a>
                          <ul class="dropdown-menu connect-dropdown">
                            <li><a class="dropdown-item" href="#">Call</a></li>
                            <li><a class="dropdown-item" href="#">Chat</a></li>
                            <li><a class="dropdown-item" href="#">Video</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
            ))}


              </div>
        </div>

        </div>
        </div>
      </>
      )
}

      export default TalkToArchitect;