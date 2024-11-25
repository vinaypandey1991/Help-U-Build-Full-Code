import React from 'react'
import { HiBadgeCheck } from "react-icons/hi";

function ArchitectProfile() {
    return (
        <>
            <div className='main-bg'>
                <section className='architecture-section-one'>
                    <div className='container-fluid architecture-section-p pt-3'>
                        <div className='row'>
                            {/* Breadcrumbhy */}
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="#">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Pradeepk's Profile
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className='container-fluid architecture-section-p rounded'>
                        <div className='row prfile-custom-card px-4 py-5 align-items-center'>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                                <div className='a-profile-image text-center'>
                                    <img src="https://images.squarespace-cdn.com/content/v1/5283f7e2e4b0d5038ab3f3aa/1481405911457-AIKUJTE5NY8FG2L33FL6/1a2a.jpg" alt="Profile Picture" className="text-center" /><br />
                                    <button className="btn profile-follow-btn mt-3">Follow us</button>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                                <div className='profile-info'>
                                    <h4 className=' fw-bold archi-profile-name'> Abhinav Singh <HiBadgeCheck /></h4>
                                    <p className="archi-cateogry">Architect</p>
                                    <p className='archi-Language'>English, Hindi</p>
                                    <p className='archi-experties'> Specialization</p>
                                    <p className='archi-exp'> Exp: 3 Years</p>
                                    <p className="fw-bold archi-duration-price">₹ 21/min</p>
                                    <p className="text-muted total-archi-duration">59K mins | 29K mins</p>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                                <div className='connect-area'>
                                    <button className="btn profile-call-btn"><i class="fa-solid fa-phone-volume"></i> Call</button>
                                    <button className="btn profile-chat-btn mt-3"><i class="fa-regular fa-comments"></i> Chat</button>
                                    <button className="btn profile-video-btn mt-3"><i class="fa-solid fa-video"></i> Video</button>
                                </div>
                            </div>
                            <div className='col-xl-12'>
                                <div className='about-architect'>
                                    <h3 className='about-title mb-4'>About me</h3>

                                    <p className='text-center'>Abhinav Singh is a distinguished architect known for his innovative approach and creative designs that blend modernity with functionality. With years of experience in the field, he has built a reputation for delivering high-quality architectural solutions that meet the unique needs of each client. His expertise spans residential, commercial, and public space design, making him a versatile professional who can handle projects of varying scales and complexities. Driven by a passion for design and a deep understanding of space utilization, Abhinav believes in creating environments that are not only aesthetically pleasing but also sustainable and practical. His designs incorporate the latest technological advancements while being mindful of environmental impacts. Whether it’s a luxurious residential building or a corporate office, he strives to provide innovative solutions that align with the clients' vision and requirements.</p>

                                </div>
                            </div>
                            <div className='col-lg-12 mt-4' >
                                <div className="gallery profile-about-gallery row">
                                    <div className="col-6 col-sm-4">
                                        <img src="https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2020/12/thumb_720_450_dreamstime_m_40894962.jpg" alt="Profile Picture" className="img-fluid rounded" />
                                    </div>
                                    <div className="col-6 col-sm-4">
                                        <img src="https://media.istockphoto.com/id/473849812/photo/female-architect.jpg?s=612x612&w=0&k=20&c=sn4gWawpyE_wPQyl7tURhnj6sIsmrGitbpuHDTOEnDc=" alt="Profile Picture" className="img-fluid rounded" />
                                    </div>
                                    <div className="col-6 col-sm-4">
                                        <img src="https://media.istockphoto.com/id/473849812/photo/female-architect.jpg?s=612x612&w=0&k=20&c=sn4gWawpyE_wPQyl7tURhnj6sIsmrGitbpuHDTOEnDc=" alt="Profile Picture" className="img-fluid rounded" />
                                    </div>
                                    <div className="col-6 col-sm-4">
                                        <img src="https://media.istockphoto.com/id/473849812/photo/female-architect.jpg?s=612x612&w=0&k=20&c=sn4gWawpyE_wPQyl7tURhnj6sIsmrGitbpuHDTOEnDc=" alt="Profile Picture" className="img-fluid rounded" />
                                    </div>
                                    <div className="col-6 col-sm-4">
                                        <img src="https://media.istockphoto.com/id/473849812/photo/female-architect.jpg?s=612x612&w=0&k=20&c=sn4gWawpyE_wPQyl7tURhnj6sIsmrGitbpuHDTOEnDc=" alt="Profile Picture" className="img-fluid rounded" />
                                    </div>
                                    <div className="col-6 col-sm-4">
                                        <img src="https://media.istockphoto.com/id/473849812/photo/female-architect.jpg?s=612x612&w=0&k=20&c=sn4gWawpyE_wPQyl7tURhnj6sIsmrGitbpuHDTOEnDc=" alt="Profile Picture" className="img-fluid rounded" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid architecture-section-p'>
                        <div className='row mt-4'>
                            <div className='col-lg-6'>
                                <div className="card prfile-custom-card  p-4 mb-4">
                                    <h5 className="mb-3">Rating &amp; Reviews</h5>
                                    <div className="d-flex align-items-center mb-3">
                                        <span className="rating-value me-3">4.99</span>
                                        <div>
                                            <span className="rating-star">★</span>
                                            <span className="rating-star">★</span>
                                            <span className="rating-star">★</span>
                                            <span className="rating-star">★</span>
                                            <span className="rating-star">★</span>
                                        </div>
                                    </div>
                                    <p className="mb-4">
                                        <small>
                                            <i className="bi bi-person" /> 14,380 total
                                        </small>
                                    </p>
                                    <div className="d-flex align-items-center mb-2">
                                        <span className="me-2">5</span>
                                        <div className="progress flex-grow-1">
                                            <div
                                                className="progress-bar rating-bar rating-bar-5"
                                                role="progressbar"
                                                style={{ width: "90%" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <span className="me-2">4</span>
                                        <div className="progress flex-grow-1">
                                            <div
                                                className="progress-bar rating-bar rating-bar-gray"
                                                role="progressbar"
                                                style={{ width: "5%" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <span className="me-2">3</span>
                                        <div className="progress flex-grow-1">
                                            <div
                                                className="progress-bar rating-bar rating-bar-gray"
                                                role="progressbar"
                                                style={{ width: "3%" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <span className="me-2">2</span>
                                        <div className="progress flex-grow-1">
                                            <div
                                                className="progress-bar rating-bar rating-bar-gray"
                                                role="progressbar"
                                                style={{ width: "1%" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className="me-2">1</span>
                                        <div className="progress flex-grow-1">
                                            <div
                                                className="progress-bar rating-bar rating-bar-gray"
                                                role="progressbar"
                                                style={{ width: "1%" }}
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='col-lg-6'>
                             <div className='review-title'>
                             <h5 className="mb-4 card bg-white p-3 rounded">User Reviews</h5>
                             </div>
                                <div className='user-review-area'>
                                    <div className="review-card">
                                        <div className="d-flex align-items-start">
                                            <img
                                                src="https://via.placeholder.com/50"
                                                alt="User Image"
                                                className="review-profile-image me-3"
                                            />
                                            <div>
                                                <h6 className="mb-1">Aman</h6>
                                                <div className="review-stars">★ ★ ★ ★ ★</div>
                                                <p className="mt-2 mb-0">Thank you so much mam</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="review-card">
                                        <div className="d-flex align-items-start">
                                            <img
                                                src="https://via.placeholder.com/50"
                                                alt="User Image"
                                                className="review-profile-image me-3"
                                            />
                                            <div>
                                                <h6 className="mb-1">Mahua</h6>
                                                <div className="review-stars">★ ★ ★ ★ ★</div>
                                                <p className="mt-2 mb-0">She is excellent</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="review-card">
                                        <div className="d-flex align-items-start">
                                            <img
                                                src="https://via.placeholder.com/50"
                                                alt="User Image"
                                                className="review-profile-image me-3"
                                            />
                                            <div>
                                                <h6 className="mb-1">Ss</h6>
                                                <div className="review-stars">★ ★ ★ ★ ★</div>
                                                <p className="mt-2 mb-0">
                                                    Lovely guidance, <span>😍</span> she is the best tarot reader I have
                                                    consulted with. Ma'am guidance provides strength. Loads of regards and
                                                    love <span>❤</span>
                                                </p>
                                                <div className="reply-box">
                                                    <p className="mb-0">
                                                        <strong>Abhirami</strong>: Thank you. God bless you. Welcome. God
                                                        give a lot of happiness in your life. Stay blessed
                                                        <span>😊</span> <span>❤</span> <span>🙏</span>
                                                    </p>
                                                    <span className="review-date">9 Nov 2024</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review-card">
                                        <div className="d-flex align-items-start">
                                            <img
                                                src="https://via.placeholder.com/50"
                                                alt="User Image"
                                                className="review-profile-image me-3"
                                            />
                                            <div>
                                                <h6 className="mb-1">Samriddhi</h6>
                                                <div className="review-stars">★ ★ ★ ★ ★</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}

export default ArchitectProfile;