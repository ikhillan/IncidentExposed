import React, { useState } from 'react';
import bitcamp from './bitcamp.jpg';

function ContactUs() {

  // Creates the function to submit your contact information and comments
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Form submitted:', { firstName, lastName, email, comments });

    setFirstName('');
    setLastName('');
    setEmail('');
    setComments('');

  };

  return (

    <div>

      <div style={{ position: 'relative' }}>
        <img src={bitcamp} alt="Bitcamp 2023 Winners of Best Accessibility Hack" style={{ marginLeft: '170px', marginTop: '20px', width: '1100px', height: '700px', borderRadius: '40px' }} />

        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
          <h1 style={{ color: 'red', fontSize: '100px', fontWeight: '900' }}> Contact Us! </h1>
        </div>
      </div>


      {/* Handles taking in user input for the Contact Us part of the page */}
      <div>

        <form onSubmit={handleSubmit}>

          <div style={{ marginTop: '20px' }}>
            <label htmlFor="firstName" style={{ fontSize: '30px', marginLeft: '525px' }}>First Name: </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={{ width: '200px', height: '80px', fontSize: '18px', textAlign: 'center' }}
            />
          </div>

          <div style={{ marginTop: '40px' }}>
            <label htmlFor="lastName" style={{ fontSize: '30px', marginLeft: '525px' }}>Last Name: </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={{ width: '200px', height: '80px', fontSize: '18px', textAlign: 'center' }}
            />
          </div>

          <div style={{ marginTop: '40px' }}>
            <label htmlFor="email" style={{ fontSize: '30px', marginLeft: '525px' }}>Email: </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '300px', height: '80px', fontSize: '18px', textAlign: 'center' }}
            />
          </div>

          <div style={{ marginTop: '40px' }}>
            <h1 style={{ textAlign: 'center', fontSize: '25px', marginBottom: '20px' }}> Feel free to leave any questions, comments, or concerns below! </h1>
            <label htmlFor="comments" style={{ fontSize: '30px', marginLeft: '230px' }}></label>
            <textarea
              id="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              style={{ width: '1000px', height: '400px', fontSize: '18px', textAlign: 'left' }}
            ></textarea>
          </div>

          <button type="submit" style={{ borderColor: 'transparent', background: 'lavender', color: 'black', borderRadius: '20px', width: '200px', height: '80px', marginTop: '40px', marginBottom: '20px', fontSize: '30px', marginLeft: '620px', transition: 'background-color 0.3s, color 0.2s', }}

            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#3acbf7';
              e.target.style.color = 'white';
            }}

            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'lavender';
              e.target.style.color = 'black';
            }}>

            Submit

          </button>

        </form>

      </div>

    </div>
  );
}

export default ContactUs;
