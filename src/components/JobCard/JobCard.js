import React from 'react';

const JobCard = ({ job }) => {
    return (
        <>
            <div className="col-10 col-md-4 mx-auto">
                <div className="card">
                    <h3 className="text-center">{job.jobName}</h3>
                    <div className="card-body">
                        <h5 className="card-title">{job.companyName}</h5>
                        <p style={{height:'50px'}} className="card-text">{job.skills}</p>
                        <p>Post by JOB Hunter Team</p>
                        <div className="d-flex justify-content-between ">
                            <div className="btn btn-primary">Apply Now</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default JobCard;