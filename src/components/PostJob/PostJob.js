import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import EmployeePackage from '../EmployeePackage/EmployeePackage';


const PostJob = () => {
    const [paymentSuccess, setPaymentSuccess] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const BookingData = {
            jobName: data.jobName,
            companyName: data.companyName,
            position: data.position,
            skills: data.skills,
        }
        console.log(BookingData);

        fetch(`http://localhost:4000/addJob`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(BookingData)
        })
            .then(res => res.json())
            .then(data => console.log(data))

            .catch(err => console.log(err))

    }
    
    return (
        <>

            {
                paymentSuccess ?
                    <div className="my-5">
                        <h3 style={{ fontWeight: "600" }} className="text-center">Post your job</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-10 mx-auto">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="">Job Name</label>
                                            <input className="form-control" defaultValue="" {...register("jobName")} placeholder="job name" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="">Company Name</label>
                                            <input className="form-control" defaultValue="" {...register("companyName")} placeholder="company name" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="">Position</label>
                                            <input className="form-control" defaultValue="" {...register("position")} placeholder="position" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="">Require Skills</label>
                                            <input className="form-control" {...register("skills", { required: true })} />
                                            {errors.exampleRequired && <span className="error">This field is required</span>}
                                        </div>

                                        <input className="btn btn-primary" type="submit" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    :
                    <EmployeePackage setPaymentSuccess={setPaymentSuccess} />
            }
        </>
    );
};

export default PostJob;