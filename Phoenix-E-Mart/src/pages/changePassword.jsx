import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
const ChangePasswordForm = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const authSlice = useSelector((state) => state.auth);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'oldPassword') {
      setOldPassword(value);
    } else if (name === 'newPassword') {
      setNewPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = async(e) => {
    
    e.preventDefault();
    
    let body1={
        uname:authSlice.user.uname,
        old_password: oldPassword,
        new_password: newPassword
      }
    
    let response=await fetch(`${`http://localhost:8000`}/changePass`,
      {
        method:'POST',
        headers: {
          "Content-Type": "application/json",
        }
      })
      let result=await response.json();
      result = result.users.filter((i)=> i.uname==authSlice.user.uname)
      const temp = result[0]
      if (temp.password==oldPassword){
        let response=await fetch(`${import.meta.env.VITE_API_URL}/updatePass`,
        {
        method:'GET',
        headers: {
          "Content-Type": "application/json",
        body: {username: temp.uname, newPass : newPassword}
        }
      })
        setSuccessMessage('Password Changed')
        setErrorMessage("")
      }
      else {
        setErrorMessage("Invalid")
        setSuccessMessage('')

      }
      
  }

  return (
    <div style={{display:'container', height:'650px', paddingTop:'47px', paddingLeft:'40%'}}>
    <h1 style={{paddingBottom:'30px'}}>Change password</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="oldPassword">
        <Form.Label style={{ marginLeft:'20px'}}>Old Password</Form.Label>
        <Form.Control
          type="password"
          name="oldPassword"
          value={oldPassword}
          onChange={handleChange}
          style={{width:'360px', marginLeft:'20px'}}
          required
        />
      </Form.Group>
      <br/>
      <Form.Group controlId="newPassword">
        <Form.Label  style={{ marginLeft:'20px'}}>New Password</Form.Label>
        <Form.Control
          type="password"
          name="newPassword"
          value={newPassword}
          onChange={handleChange}
          style={{width:'360px', marginLeft:'20px'}}
          required
        />
      </Form.Group>
      <br/>
      <Form.Group controlId="confirmPassword">
        <Form.Label  style={{ marginLeft:'20px'}}>Confirm New Password</Form.Label>
        <Form.Control
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
          style={{width:'360px', marginLeft:'20px'}}
        />
      </Form.Group>

      {errorMessage && <Alert variant="danger" style={{width:'300px', marginTop:'10px',  marginLeft:'20px'}}>{errorMessage}</Alert>}
      {successMessage && <Alert variant="success"  style={{width:'300px', marginTop:'10px',  marginLeft:'20px'}}>{successMessage}</Alert>}
      <br/>
      <Button variant="primary" type="submit" style={{border:'1px solid black', backgroundColor:'#d857ff', marginLeft:'20px'}}>
        Change Password
      </Button>
    </Form>
    </div>
  );
};

export default ChangePasswordForm;
