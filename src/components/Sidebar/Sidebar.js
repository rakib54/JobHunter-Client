import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendar } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <>
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: '200vh' }}>
                <ul className="list-unstyled">
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