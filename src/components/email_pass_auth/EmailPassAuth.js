import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import app from '../../firebase.init';
import GoogleGithubAuth from '../firebase_google_github_auth/GoogleGithubAuth';

const auth = getAuth(app)
const EmailPassAuth = () => {

    const [specialCharPass, setSpecialCharPass] = useState('')
    const [error, setError] = useState('')
    const [validated, setValidated] = useState(false);
    const [registered, setRegistered] = useState(false)
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    // name 
    const handleNameBlur = (e) => {
        setName(e.target.value);
    }
    // email 
    const handleNumberBlur = (e) => {
        setNumber(e.target.value);
    }
    // email 
    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    }
    // password 
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }
    // Confirm password 
    const handleConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value);
    }

    // registered 
    const handleRegistered = (event) => {
        setRegistered(event.target.checked)
    }

    // ..reset password 
    const resetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log('rest email sent ');
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    // from submit 

    const formSubmitHandle = event => {
        // Form validation 
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);


        //check pass validitaion
        if (!/(?=.*[!#$%&?@^ "])/.test(password)) {

            setSpecialCharPass('Please use a special character ');
            return;
        }

        if (registered) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 

                    const user = userCredential.user;
                    console.log(user);



                })
                .catch((error) => {
                    // const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorMessage);
                });
        }
        else {
            // create user 
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 

                    if (password === confirmPassword) {
                        const user = userCredential.user;
                        console.log(user);
                        setEmail('');
                        setPassword('')
                        updateUserInfo()
                    }
                    else {
                        console.log('same hoi ni ');
                    }
                })
                .catch((error) => {

                    const errorMessage = error.message;
                    setError(errorMessage);
                });

        }
        // update User info 
        console.log(number);
        const updateUserInfo = () => {
            updateProfile(auth.currentUser, {
                displayName: name, phoneNumber: number
            })
                .then(() => {
                    console.log('update name');
                })
                .catch(error => {
                    console.log(error.message);
                })
        }
        event.preventDefault();

    }


    return (
        <div className=' bg-dark py-5  mx-auto'>
            <div>
                <GoogleGithubAuth></GoogleGithubAuth>
            </div>

            <div className='mt-4 pb-5'>
                <h1 className='text-center text-info my-3'>

                    Please {registered ? 'Login !!' : ' Register !!'}
                </h1>
                <Form noValidate validated={validated} className='w-50 mx-auto text-light' onSubmit={formSubmitHandle}>
                    {
                        !registered && <>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Your Name</Form.Label>

                                <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter Name" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide Your Name
                                </Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Phone Number</Form.Label>

                                <Form.Control onBlur={handleNumberBlur} type="number" placeholder="Enter number" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide Your Number
                                </Form.Control.Feedback>

                            </Form.Group>
                        </>
                    }
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>

                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Email.
                        </Form.Control.Feedback>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>

                        {

                            registered ? <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required /> :
                                <>
                                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required /> <br />
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="Confirm  Password" required />
                                </>

                        }


                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Password.
                        </Form.Control.Feedback>

                        <p className='text-danger'>{specialCharPass} </p>
                        <p className='text-danger'>{error} </p>

                    </Form.Group>
                    <Form.Group className="mb-3 text-start" controlId="formBasicCheckbox">
                        {
                            registered ? <Form.Check className='text-primary fw-bold' onChange={handleRegistered} type="checkbox" label="Already Registered ?" /> : <Form.Check className='text-danger fw-bold' onChange={handleRegistered} type="checkbox" label=" Login ?" />
                        }

                    </Form.Group>


                    <Button className='btn btn-outline-info' variant="dark" type="submit">
                        {registered ? 'Login ' : 'Register'}
                    </Button>
                    <Button onClick={resetPassword} className=' ms-4  ' variant="link">Forget Password ?</Button>
                </Form>
                <span className='pb-4'>

                </span>
            </div>



        </div>
    );
};

export default EmailPassAuth;