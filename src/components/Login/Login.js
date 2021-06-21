import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { auth, provider } from './firebase.config';
import { useHistory } from 'react-router-dom'

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let history = useHistory()
    const [isSignUp, setIsSignUp] = useState(false)
    const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleChange = (e) => {
        const { name, value } = e.target

        setUser((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }
    const SwitchMode = () => {
        setIsSignUp((Toggle) => !Toggle)
    }
    const handleGoogleSignIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setLoggedInUser(user);
                history.push('/')

            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);

            });
    }
    const handleCreateUser = () => {
        if (user.password === user.confirmPassword) {
            auth.createUserWithEmailAndPassword(user.email, user.password)
                .then((result) => {
                    result.user.updateProfile({
                        displayName: user.fullName
                    })
                    setLoggedInUser(result.user)
                    history.push('/postjob')
                })
                .catch((err) => alert(err.message))
        }
        else {
            alert("Password not matched")
        }

    }
    const handleSignIn = () => {
        auth.signInWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                const user = res.user;
                console.log('dasdadfasdfa',user);
                setLoggedInUser(user);

                history.push("/postjob")
            })
            .catch((err) => alert(err.message))

    }
    return (
        <>
            <div className="my-3">
                <h3 style={{ fontWeight: '600' }} className="text-center text-primary">{isSignUp ? 'Employer Register' : 'Employer Login'}</h3>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-10 mx-auto">
                        <form onSubmit={handleSubmit}>
                            {
                                isSignUp &&
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label"><strong>Full Name</strong></label>
                                    <input name="fullName" value={user.fullName} onChange={handleChange} required type="text" className="form-control" id="exampleFormControl" placeholder="Enter your Name" />
                                </div>
                            }
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label"><b>Email</b></label>
                                <input name="email" value={user.email} onChange={handleChange} required type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label bold"><b>Password</b></label>
                                <input name="password" value={user.password} onChange={handleChange} required type="password" className="form-control" id="e" placeholder="Password" />
                            </div>
                            {
                                isSignUp &&
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label"><b>Confirm Password</b></label>
                                    <input name="confirmPassword" value={user.confirmPassword} onChange={handleChange} required type="password" className="form-control" id="example" placeholder="Confirm Password" />
                                </div>
                            }

                            <div className="col-12 d-flex justify-content-between align-items-center ">
                                {
                                    isSignUp ?
                                        <button onClick={handleCreateUser} className="btn btn-primary" type="submit">Register</button> :
                                        <button onClick={handleSignIn} className="btn btn-success" type="submit">Login</button>
                                }
                                <Link onClick={SwitchMode} >{isSignUp ? 'Already have an account? sign In ' : "Don't have an account ? Register"}</Link>
                            </div>
                        </form>

                    </div>
                    <div className="mt-5">
                        <h4 style={{ fontWeight: '600' }} className="text-center text-primary">Job Seeker Login</h4>
                    </div>


                    <div className="my-2 text-center google-btn">
                        <button onClick={handleGoogleSignIn}> Sign In with Google</button>
                    </div>



                </div>
            </div>
        </>
    );
};

export default Login;