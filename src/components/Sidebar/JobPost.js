import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

const JobPost = () => {
    const [jobData, setJobData] = useState([])

    useEffect(() => {
        fetch('https://secret-dawn-37725.herokuapp.com/jobs')
            .then(res => res.json())
            .then(data => {
                setJobData(data)
            })
    }, [])
    const handleClick = () => {
        alert('Job Posts successfully')
    }
    return (
        <section>
            <div className="container-fluid row font-link">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 d-flex justify-content-center p-5">

                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th className="text-secondary" scope="col">Title</th>
                                <th className="text-secondary" scope="col">Position</th>
                                <th className="text-secondary" scope="col">Company</th>
                                <th className="text-secondary" scope="col">Approval</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                jobData.map(job =>
                                    <tr key={job._id}>

                                        <td className="text-color">{job.jobName}</td>
                                        <td>{job.position}</td>
                                        <td>{job.companyName}</td>
                                        <td><button onClick={handleClick} className="btn btn-success btn-sm">approval</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        </section>
    );
};

export default JobPost;