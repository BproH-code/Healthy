
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import './Signin.css'; 

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

const Signin = () => {
  const [showForm, setShowForm] = useState(true);
  
  // Define the validation schema using yup
  const schema = yup.object().shape({
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  // Setup react-hook-form with yup validation
  const { register, handleSubmit, formState: { errors }, setError, setSuccess } = useForm({
    resolver: yupResolver(schema),
  });

  // Form submit handler
  const onSubmit = (data) => {
    // i wiil perform-signin-logic
    console.log('Form submitted:', data);
    setError('');
    setSuccess('Sign-in successful!'); // Show success message
    
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
          <FormTitle>Sign In</FormTitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type='email'
              placeholder='Email'
              {...register('email')}
            />
            {errors.email && <Error>{errors.email.message}</Error>}
            <Input
              type='password'
              placeholder='Password'
              {...register('password')}
            />
            {errors.password && <Error>{errors.password.message}</Error>}
            <Button type='submit'>Sign In</Button>
          </form>
        </FormWrapper>
      </CSSTransition>
    </Container>
  );
};

export default Signin;