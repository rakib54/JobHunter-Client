import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const Job = () => {
    const [jobs, setJobs] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('http://localhost:4000/jobdetails?search='+search)
        .then(res => res.json())
        .then(data => {
            setJobs(data)
        })
    }, [search])

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    return (
        <>
            <div className="my-5">
                <h1 style={{color:'rgb(26, 23, 23)'}} className="text-center">Find Your Job's</h1>
                <div className="col-md-3 col-3 mx-auto mt-3">
                <input onBlur={handleSearch} className="form-control" type="text" placeholder="search job" />
                </div>
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