import React, { useState } from 'react';


const PostJob = () => {
    const [data, setData] = useState({
        jobName: "",
        companyName: "",
        position: "",
        skills: ""
    })

    const InputEvent = (e) => {
        const { name, value } = e.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault()
        alert("Your Response is recorded")

        fetch(`http://localhost:4000/addJob`, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(setData)
        })
        .then(res => res.json())
        .then(job => console.log(job))
        
        setData({
            jobName: "",
            companyName: "",
            position: "",
            skills: ""
        })

    }

    return (
        <>
           <div className="my-5">
                <h3 style={{fontWeight:"600"}} className="text-center">Post your job</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form onSubmit={formSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Job Name</label>
                                    <input name="jobName" value={data.jobName} onChange={InputEvent} required type="text" className="form-control" id="exampleFormControlInput1" placeholder="Job name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Company Name</label>
                                    <input name="companyName" value={data.companyName} onChange={InputEvent} required type="text" className="form-control" id="exampleFormControlInput1" placeholder="Company" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Position</label>
                                    <input name="position" value={data.position} onChange={InputEvent} required type="text" autoComplete="off" className="form-control" id="exampleFormControlInput1" placeholder="Position" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Require skill</label>
                                    <textarea name="skills" value={data.skills} onChange={InputEvent} className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary" type="submit">Post a job</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default PostJob;