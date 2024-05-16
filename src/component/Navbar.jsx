import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  padding: 10px 20px; /* Adjust padding as needed */
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Input = styled.input`
  height: 20px;
  width: 300px;
  margin: 0 auto; /* Center the input */
  padding: 5px; /* Adjust padding as needed */

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  height: 30px;
  background-color: #007bff; /* Blue color, change as needed */
  color: white;
  border: none;
  padding: 0 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Navbar = () => {
  return (
    <Container>
      <TopBar>
        <Input type='text' placeholder='Search' />
        <Button>Sign In</Button>
      </TopBar>
      
    </Container>
  );
};

export default Navbar;
