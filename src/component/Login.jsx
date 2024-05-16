import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
`;

const FormTitle = styled.h2`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
`;

const Login = () => {

    const [signInData, setSignInData] = useState({ username: '', password: '' });
    const [signUpData, setSignUpData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  
    const handleSignInChange = (e) => {
      setSignInData({ ...signInData, [e.target.name]: e.target.value });
    };
  
    const handleSignUpChange = (e) => {
      setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    };
  
    const handleSignInSubmit = (e) => {
      e.preventDefault();
      console.log('Sign In Data:', signInData);
    };
  
    const handleSignUpSubmit = (e) => {
      e.preventDefault();
      console.log('Sign Up Data:', signUpData);
    };
  return (
    <>
    
    <Container>
      <FormContainer>
        <FormTitle>Sign In</FormTitle>
        <Form onSubmit={handleSignInSubmit}>
          <FormInput type="text" name="username" placeholder="Username" value={signInData.username} onChange={handleSignInChange} />
          <FormInput type="password" name="password" placeholder="Password" value={signInData.password} onChange={handleSignInChange} />
          <FormButton type="submit">Sign In</FormButton>
        </Form>
        <FormTitle>Sign Up</FormTitle>
        <Form onSubmit={handleSignUpSubmit}>
          <FormInput type="text" name="name" placeholder="Name" value={signUpData.name} onChange={handleSignUpChange} />
          <FormInput type="email" name="email" placeholder="Email" value={signUpData.email} onChange={handleSignUpChange} />
          <FormInput type="password" name="password" placeholder="Password" value={signUpData.password} onChange={handleSignUpChange} />
          <FormInput type="password" name="confirmPassword" placeholder="Confirm Password" value={signUpData.confirmPassword} onChange={handleSignUpChange} />
          <FormButton type="submit">Sign Up</FormButton>
        </Form>
      </FormContainer>
    </Container>
    
    
    
    </>
  )
}

export default Login