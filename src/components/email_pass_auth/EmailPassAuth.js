import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import app from '../../firebase.init';

const auth = getAuth(app)
const EmailPassAuth = () => {

    const [specialCharPass, setSpecialCharPass] = useState('')
    const [validated, setValidated] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    // email 
    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    }
    // password 
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
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

        event.preventDefault();

        if (!/(?=.*[!#$%&?@^ "])/.test(password)) {

            return setSpecialCharPass('Please use a special character ')
        }
        // create user 
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage);
            });

    }


    return (
        <div className='  mx-auto'>


            <div className='mt-4'>
                <h1 className='text-center text-info my-3'>Please Register</h1>
                <Form noValidate validated={validated} className='w-50 mx-auto' onSubmit={formSubmitHandle}>
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
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Password.
                        </Form.Control.Feedback>

                        <p className='text-danger'>{specialCharPass} </p>

                    </Form.Group>

                    <Button className='btn btn-outline-info' variant="dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>



        </div>
    );
};

export default EmailPassAuth;