import React, { useContext } from 'react';
import { UserContext } from '../../App';

const JobCard = ({ job }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const InputEvent = () => {

    }
    const handleClick = () => {
        alert('Your Response is recorded')
    }
    return (
        <>
            <div className="col-10 col-md-4 mx-auto">
                <div className="card">
                    <h3 style={{ fontWeight: 'bold' }} className="text-center">{job.jobName}</h3>
                    <div className="card-body">
                        <h5 className="card-title">{job.companyName}</h5>
                        <p style={{ height: '50px' }} className="card-text">{job.skills}</p>
                        <p>Post by JOB Hunter Team</p>
                        <div className="d-flex justify-content-between ">
                            {/* <div className="btn btn-primary">Apply Now</div> */}
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Apply Now
                            </button>
                        </div>
                        <div>

                            {
                                loggedInUser.email &&
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 style={{ fontWeight: 'bold' }} class="modal-title" id="exampleModalLabel">Job Application</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <form onSubmit="">
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                                                        <input name="fullName" onChange={InputEvent} required type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Name" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                                                        <input name="phone" onChange={InputEvent} required type="text" className="form-control" id="exampleFormControlInput1" placeholder="Phone Number" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                                        <input name="email" onChange={InputEvent} required type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your email" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Cover Letter</label>
                                                        <textarea name="message" onChange={InputEvent} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">Upload Resume</label>
                                                        <input name="email" onChange={InputEvent} required type="file" className="form-control" id="exampleFormControlInput1" placeholder="Your email" />
                                                    </div>
                                                    <div className="col-12">
                                                        <button className="btn btn-primary" type="submit">Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button onclick={handleClick} data-bs-dismiss="modal" type="button" class="btn btn-primary">Done</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>                               
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default JobCard;