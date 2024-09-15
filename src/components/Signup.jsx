import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import './Signup.css'; 

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f0f2f5;
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, opacity 0.3s ease;
  border: 1px solid #ddd;
`;

const FormTitle = styled.h2`
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  box-sizing: border-box;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: #007bff;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: #0056b3;
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Error = styled.div`
  color: #dc3545;
  text-align: center;
  margin-bottom: 1rem;
`;

const Success = styled.div`
  color: #28a745;
  text-align: center;
  margin-bottom: 1rem;
`;

const Signup = () => {
  const [formdata, setFormdata] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showForm, setShowForm] = useState(true);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formdata.email || !formdata.password || !formdata.confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (formdata.password !== formdata.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Perform signup logic here
    console.log('Forms are submitted:', formdata);
    setError('');
    setSuccess('Signup successful!'); // Show success message
    // Optionally hide the form or navigate away
    setShowForm(false);
  };

  return (
    <Container>
      <CSSTransition
        in={showForm}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <FormWrapper>
          <FormTitle>Sign Up</FormTitle>
          <form onSubmit={handleSubmit}>
            <Input
              type='email'
              name='email'
              placeholder='Email'
              value={formdata.email}
              onChange={handleChange}
            />
            <Input
              type='password'
              name='password'
              placeholder='Password'
              value={formdata.password}
              onChange={handleChange}
            />
            <Input
              type='password'
              name='confirmPassword'
              placeholder='Confirm Password'
              value={formdata.confirmPassword}
              onChange={handleChange}
            />
            {error && <Error>{error}</Error>}
            {success && <Success>{success}</Success>}
            <Button type='submit'>Sign Up</Button>
          </form>
        </FormWrapper>
      </CSSTransition>
    </Container>
  );
};

export default Signup;