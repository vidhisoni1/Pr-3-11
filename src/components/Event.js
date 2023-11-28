import React, { useState } from 'react'

const Event = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userInfo, setUserInfo] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleInfo = () => {
      setUserInfo(`Name: ${name}, Email: ${email}`);
    };
  
    return (
      <center>
        <h1>INFORMATION ! </h1>
  
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" id="name" value={name} onChange={handleNameChange} />
  
        <br /><br />
  
        <label htmlFor="email">Email:</label>
        <br />
        <input type="text" id="email" value={email} onChange={handleEmailChange} />
  
        <br /><br />
  
        <button onClick={handleInfo}>submit</button>
        <br /><br />
        <h2>User Details:</h2>
        <div>{userInfo && userInfo}</div>
      </center>
    );
  };

export default Event