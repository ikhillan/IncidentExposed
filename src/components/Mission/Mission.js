import React, { useState } from 'react';
import './Mission.css';
import expansion from './expansion.jpg'
import graph from './graph.jpg'
import time from './time.jpg'

function Mission() {
  
  const [hoveredBox, setHoveredBox] = useState(null);

  const handleBoxHover = (boxIndex) => {
    setHoveredBox(boxIndex);
  };

  return (
    <div>
      <h1 style={{ fontStyle: 'italic', textAlign: 'center', margin: '40px', textDecoration: 'underline', fontSize: '40px' }}>Incident Exposed: Protecting Fellow Students</h1>
      <p><h1 style={{ textAlign: 'center', marginTop: '-10px', fontSize: '30px' }}>Hover over our 5 mission pillars to learn more!</h1></p>

      <div className="container1">
        <div className="circle">
          1
        </div>

        <div className="circle">
          2
        </div>

        <div className="circle">
          3
        </div>
      </div>

      <div className="container1">
        <div
          className={`box ${hoveredBox === 0 ? 'hovered' : ''}`}
          onMouseEnter={() => handleBoxHover(0)}
          onMouseLeave={() => handleBoxHover(null)}
        >
          <p>{hoveredBox === 0 ? 'Provides information about activity in the area' : 'Keep Students Safe'}</p>
        </div>

        <div
          className={`box ${hoveredBox === 1 ? 'hovered' : ''}`}
          onMouseEnter={() => handleBoxHover(1)}
          onMouseLeave={() => handleBoxHover(null)}
        >
          <p>{hoveredBox === 1 ? 'Make sure students know locations where they should be cautious' : 'Raise Awareness'}</p>
        </div>

        <div
          className={`box ${hoveredBox === 2 ? 'hovered' : ''}`}
          onMouseEnter={() => handleBoxHover(2)}
          onMouseLeave={() => handleBoxHover(null)}
        >
          <p>{hoveredBox === 2 ? 'Help the UMPD optimize patrol routes and problem areas around campus' : 'Boost Security'}</p>
        </div>
      </div>

      <div className='container2'>
        <div className="circle" style={{ marginRight: '400px' }}>
          4
        </div>

        <div className="circle">
          5
        </div>
      </div>

      <div className="container2">
        <div
          className={`box ${hoveredBox === 3 ? 'hovered' : ''}`}
          style={{ marginRight: '200px' }}
          onMouseEnter={() => handleBoxHover(3)}
          onMouseLeave={() => handleBoxHover(null)}
        >
          <p>{hoveredBox === 3 ? 'Too many College Park incidents to email students consistently' : 'Facilitate Communication'}</p>
        </div>

        <div
          className={`box ${hoveredBox === 4 ? 'hovered' : ''}`}
          onMouseEnter={() => handleBoxHover(4)}
          onMouseLeave={() => handleBoxHover(null)}
        >
          <p>{hoveredBox === 4 ? 'Provides a visual representation to aid in understanding' : 'Accessibility'}</p>
        </div>
      </div>

      <h1 style={{textAlign: 'center', marginTop: '40px', marginBottom: '10px', textDecoration: 'underline', fontSize: '40px' }}>Plans For The Future</h1>

      <div className="expansion-container">
        <img src={expansion} alt="University library" className="outlined-image" style = {{width: '500px', margin: '30px'}}></img>
        <div className="info-container">
          <h1>Expansion</h1>
          <p>Move towards other campuses and generate similar statistics to include the entirety of the nation</p>
        </div>
      </div>

      <div className="graph-container">
        <img src={graph} alt="Different types of graphs" className="outlined-image" style = {{width: '500px', margin: '30px'}}></img>
        <div className="info-container">
          <h1>Specific Information</h1>
          <p>Provide better information about the incident using analytical graphs and charts</p>
        </div>
      </div>

      <div className="real-time-container">
        <img src={time} alt="Time clock" className="outlined-image" style = {{width: '500px', height: '450px', margin: '30px'}}></img>
        <div className="info-container">
          <h1>Real-Time Update</h1>
          <p>Increase speed and automation of updates to create alerts the moment an incident is reported</p>
        </div>
      </div>

      </div>
  );
}

export default Mission;