import React from 'react';
import job from '../../images/package.jpg'

const PackageCard = ({ d, setPayment }) => {
    return (
        <>
            <div className="col-10 col-md-4 mx-auto">
                <div className="card">
                    <img style={{ height: 280 }} className="card-img-top" src={job} alt="" />
                    <div className="card-body">
                        <h3 style={{ fontWeight: 'bold' }} className="text-center">{d.name}</h3>
                        <h5 className="card-title"><span className="text-danger">{d.post}</span> Job Posts</h5>
                        <div className="d-flex justify-content-between ">
                            <h4 style={{ fontWeight: 'bold' }}>$ {d.Amount}</h4>
                            <div onClick={() => setPayment(true)} className="btn btn-danger">Buy Now</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default PackageCard;