import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const Job = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/jobdetails')
        .then(res => res.json())
        .then(data => {
            setJobs(data)
        })
    }, [])
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Find Your Job's</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                           {
                               jobs.map((job) => <JobCard job={job} key={job._id} />)
                           }

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Job;