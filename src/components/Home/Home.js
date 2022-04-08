import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='text-center py-5 bg-dark'>
            <h1 className='text-info'>Welcome , <br /> This is home page ....</h1> <br /> <br />

            <h3 className='text-success '>Ramadan Mubarak </h3> <br /> <br />
            <Link className='btn btn-outline-info my-4' to={`/login`}>Login Page </Link>
            <h6 className='mt-5 text-info pb-5 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  <br /> Ad, dolorum repellat autem voluptatibus optio suscipit maxime sunt illo <br /> sint beatae velit neque,<br /> laboriosam qui deleniti earum blanditiis repudiandae perspiciatis! <br /> Enim architecto quibusdam consequatur sit, excepturi expedita sunt fugiat qui <br /> nesciunt aut, rerum mollitia esse nulla praesentium fuga natus alias. <br />Pariatur recusandae suscipit debitis id? Omnis praesentium facilis a,<br /> dolor laborum nemo exercitationem harum enim impedit numquam vitae qui aliquam quisquam hic <br /> accusamus eveniet veniam, aliquid, illum quidem amet iure <br /> officiis alias similique atque! Accusantium, doloribus sunt.<br /> Repellendus rerum adipisci incidunt quam dignissimos accusamus consequatur, <br /> quaerat error sunt totam itaque quibusdam?</h6>



            <div className='pb-5'>
                <p className='pb-5'>Thanks </p>
            </div>
        </div>
    );
};

export default Home;