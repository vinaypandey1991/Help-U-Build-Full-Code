import React from 'react'
import StarRating from '../../components/StarRating/StarRating'

const vendor = [
{
    id: 1,
    Profile: "https://via.placeholder.com/60",
    Orders: "9465 orders",
    Name: "Abhinav Singh",
    Category: "Architecture",
    Language: ["English", "Hindi"],
    Exp: "3 Years",
    DurationPrice: "20/min"

},
{
    id: 2,
    Profile: "",
    Orders: "1002 orders",
    Name: "Shivam Singh",
    Category: "Architecture",
    Language: ["English", "Hindi"],
    Exp: "6 Years",
    DurationPrice: "20/min"

},
{
    id: 3,
    Profile: "",
    Orders: "9465 orders",
    Name: "Virat Singh",
    Category: "Architecture",
    Language: ["English", "Hindi"],
    Exp: "4 Years",
    DurationPrice: "20/min"

},
{
    id: 3,
    Profile: "",
    Orders: "9465 orders",
    Name: "Virat Singh",
    Category: "Architecture",
    Language: ["English", "Hindi"],
    Exp: "4 Years",
    DurationPrice: "20/min"

},
{
    id: 3,
    Profile: "",
    Orders: "9465 orders",
    Name: "Virat Singh",
    Category: "Architecture",
    Language: ["English", "Hindi"],
    Exp: "4 Years",
    DurationPrice: "20/min"

},
{
    id: 3,
    Profile: "",
    Orders: "9465 orders",
    Name: "Virat Singh",
    Category: "Architecture",
    Language: ["English", "Hindi"],
    Exp: "4 Years",
    DurationPrice: "20/min"

}


]


function TalkToArchitecture() {
    return (
        <>
            <div className='section section-one mx-5'>
                <div className='container-fluid px-5'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='top-filter-area bg-dark'>
                                1213
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section section-2 mx-5 mb-5'>
                <div className="container-fluid mt-5 px-5">
                    <div className='row'>
                        {vendor.map((item, index) => (
                            <div className='col-lg-4' key={index}>
                                <div className="card-custom d-flex align-items-center justify-content-between my-2">
                                    <div className="d-flex align-items-center">
                                        <div className='profile-image text-center'>
                                            <img
                                                src="https://via.placeholder.com/60"
                                                alt="Profile"
                                                className="profile-img me-4"
                                            />
                                            <StarRating rating={1} />
                                            {/* Orders */}
                                            <p className="text-small text-muted mb-1 me-4">{item.Orders}</p>

                                        </div>
                                        {/* Profile Image */}

                                        <div className='profile-content'>
                                            {/* Name */}
                                            <h5 className="mb-1">{item.Name}</h5>
                                            {/* Categories */}
                                            <p className="text-small text-muted mb-1">{item.Category}</p>
                                            {/* Languages */}
                                            <p className="text-small text-muted mb-1">{item.Language[1]}</p>
                                            {/* Experience */}
                                            <p className="text-small mb-0">{item.Exp}</p>
                                            {/* Rate */}
                                            <p className="mb-2">
                                                <strong>{item.DurationPrice}</strong>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-end contact-btn">
                                        {/* connect Button */}
                                        <div class="dropdown">
                                            <a class="btn btn-success dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Connect
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
                
            </div>
        </>
    )
}

export default TalkToArchitecture