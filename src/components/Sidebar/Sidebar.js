import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendar, faGripHorizontal, faList } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <>
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4 font-link" style={{ height: '100vh' }}>
                <ul className="list-unstyled">
                    {/* <li>
                        <Link to="/dashboard" className="text-white">
                            <FontAwesomeIcon icon={faGripHorizontal} /><span>Dashboard</span>
                        </Link>
                    </li> */}
                    <li>
                        <Link to="/post" className="text-white" >
                            <FontAwesomeIcon icon={faCalendar} /><span>Post Job</span>
                        </Link>
                    </li>
                </ul>
                <div>
                    <Link className="text-white" to="/">
                        <FontAwesomeIcon icon={faHome} /><span>Go home</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Sidebar;