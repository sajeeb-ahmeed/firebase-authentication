import React from 'react';
import { Button, Form } from 'react-bootstrap';

const EmailPassAuth = () => {

    // email 
    const handleEmailBlur = (e) => {
        console.log(e.target.value);
    }
    // password 
    const handlePasswordBlur = e => {
        console.log(e.target.value);
    }
    // from submit 

    const formSubmitHandle = event => {
        console.log('form submited');
        event.preventDefault();
    }


    return (
        <div className='container row mx-auto'>


            <div className='col-12 '>
                <Form onSubmit={formSubmitHandle}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>



        </div>
    );
};

export default EmailPassAuth;