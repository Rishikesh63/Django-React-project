import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  

  const buttonStyle = {
    position:'relative',
    top: '40px left 40px',
    backgroundColor: 'green',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  const buttonStyle1 = {
    position:'relative',
    top: '40px left 40px',
    backgroundColor: 'red',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  

  return (
    <div >
      <h1 >Welcome To The Home page</h1>
      <h2>If Wants To See Magic Then Refresh the page</h2>
      <Link to="/create">
        <button style={buttonStyle}>Go to Create Room</button>
      </Link>
      <Link to="/join">
        <button style={buttonStyle1}>Go to RoomJoinPage</button>
      </Link>
      <img
        src="https://source.unsplash.com/random/1400x450?sig=2"
        
      />
     
    </div>
  );
}

export default HomePage;
