import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faTaxi, faCommentDots, faList, faPlus } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <>
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4 font-link" style={{ height: '100vh' }}>
            <ul className="list-unstyled">
                
                   
                        <div>
                            <li>
                                <Link to="/dashboard" className="text-white">
                                    <FontAwesomeIcon icon={faGripHorizontal} /><span>Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/book" className="text-white" >
                                    <FontAwesomeIcon icon={faCalendar} /><span>Post Job</span>
                                </Link>
                            </li>
                            
                        </div>

                        <div>
                            <li>
                                <Link to="/orderList" className="text-white">
                                    <FontAwesomeIcon icon={faList} /><span>Job list</span>
                                </Link>
                            </li>
                                              
                            <li>
                                <Link to="/manage" className="text-white">
                                    <FontAwesomeIcon icon={faGripHorizontal} /><span>Manage Service</span>
                                </Link>
                            </li>
                        </div>
                

            </ul>
            <div>
                <Link className="text-white" to="/home">
                    <FontAwesomeIcon icon={faHome} /><span>Go home</span>
                </Link>
            </div>
        </div>    
        </>
    );
};

export default Sidebar;