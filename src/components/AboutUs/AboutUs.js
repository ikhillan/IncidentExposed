import React from 'react';
import './AboutUs.css';
import ishan from './ishan.JPG';
import debarshi from './debarshi.jpg';
import soham from './soham.JPG';
import yash from './yash.jpg'
import bitcamp2 from './bitcamp2.jpg'

// This function creates the contents of the About Us page, which consists of our personal contact information, GitHub repository, and images of the team
function AboutUs() {
  return (
    <div>
      <h1 style={{ color: 'black', fontSize: '50px', textAlign: 'center', textDecoration: 'underline', margin: '40px' }}>About Us</h1>
      <img src={bitcamp2} alt="Bitcamp 2023 Winners of Best Accessibility Hack" style={{ marginLeft: '170px', marginTop: '-10px', width: '1100px', height: '740px', borderRadius: '40px' }} />


      {/* Sets up a container for all of the team's information */}
      <div className="about-us-container">


        {/* Soham Chawathe's information */}
        <div className="team-member">
          <img src={soham} alt="Soham Chawathe" style={{ width: '418px', height: '557px', borderRadius: '40px', marginRight: '175px' }} />
          <div className="information">
            <h2 style={{ marginLeft: '0px' }}>Soham Chawathe</h2>
            <h4 style={{ marginLeft: '70px' }}>Web Scraping</h4>
            <p style={{ marginLeft: '0px' }}>LinkedIn: <a href="https://linkedin.com/in/sohamchaw/">linkedin.com/in/sohamchaw</a></p>
            <p style={{ marginLeft: '0px' }}>GitHub: <a href="https://github.com/sohamchaw">github.com/sohamchaw</a></p>
            <p style={{ marginLeft: '0px' }}>Email: smchawat@terpmail.umd.edu</p>
          </div>
        </div>

        {/* Debarshi Dey's information */}
        <div className="team-member">
          <div className="information">
            <h3>Debarshi Dey</h3>
            <h4 style={{ marginLeft: '15px' }}>Map Generation</h4>
            <p>LinkedIn: <a href="https://linkedin.com/in/debarshi-dey-b35215199/">linkedin.com/in/debarshi-dey-b35215199</a></p>
            <p>GitHub: <a href="https://github.com/DebarshiDey">github.com/DebarshiDey</a></p>
            <p>Email: ddey23@terpmail.umd.edu</p>
          </div>
          <img src={debarshi} alt="Debarshi Dey" style={{ width: '418px', height: '557px', borderRadius: '40px' }} class='debs' />
        </div>

        {/* Yash Sakharkar's information */}
        <div className="team-member">
          <img src={yash} alt="Yash Sakharkar" style={{ width: '418px', height: '557px', borderRadius: '40px', marginRight: '175px' }} />
          <div className="information">
            <h2>Yash Sakharkar</h2>
            <h4 style={{ marginRight: '50px' }}>Data Frame Engineer</h4>
            <p>LinkedIn: <a href="https://linkedin.com/in/yashsakharkar/">linkedin.com/in/yashsakharkar</a></p>
            <p>GitHub: <a href="https://github.com/ysakharkar">github.com/ysakharkar</a></p>
            <p>Email: ysakhark@terpmail.umd.edu</p>
          </div>
        </div>

        {/* Ishan Khillan's information */}
        <div className="team-member">
          <div className="information">
            <h3>Ishan Khillan</h3>
            <h4 style={{ marginLeft: '-15px' }}>Front-End Developer</h4>
            <p>LinkedIn: <a href="https://linkedin.com/in/ishankhillan/">linkedin.com/in/ishankhillan</a></p>
            <p>GitHub: <a href="https://github.com/ikhillan">github.com/ikhillan</a></p>
            <p>Email: ikhillan@terpmail.umd.edu</p>
          </div>
          <img src={ishan} alt="Ishan Khillan" style={{ width: '418px', height: '557px', borderRadius: '40px' }} />
        </div>

      </div>

      {/* Our GitHub repository which consists of the frontend and backend code for this website and our map project */}
      <div className='repo'>
        <p>
          GitHub Repository: <a href="https://github.com/DebarshiDey/IncidentExposed">github.com/DebarshiDey/IncidentExposed</a>
        </p>
      </div>

    </div>

  );
}

export default AboutUs;
