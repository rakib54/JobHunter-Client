import React, { useState } from 'react';
import PackageCard from './PackageCard'
import Payment from '../Payment/Payment';

const data = [
    {
        id: 1,
        name: 'Basic',
        post: 10,
        Amount: 80
    },
    {
        id: 2,
        name: 'Standard',
        post: 30,
        Amount: 180
    }, {
        id: 3,
        name: 'Premium',
        post: 200,
        Amount: 280
    }
]
const EmployeePackage = ({ setPaymentSuccess }) => {
    const [payment, setPayment] = useState(false)

    return (
        <>
            <div className="my-5">
                <h3 style={{ fontWeight: 'bold' }} className="text-center">{payment ? 'Complete Your Payment' : 'Choose Your Package'}</h3>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        {
                            payment ?
                                <Payment setPaymentSuccess={setPaymentSuccess} />
                                :
                                <div className="row gy-4">
                                    {
                                        data.map((d) => <PackageCard setPayment={setPayment} key={d.id} d={d} />)
                                    }
                                </div>
                        }
                    </div>

                </div>
            </div>

        </>
    );
};

export default EmployeePackage;