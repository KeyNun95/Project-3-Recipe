import React from 'react';
import './LoginPage.css';
import { useState } from 'react'
import userService from '../../utils/userService';
import { Link, useNavigate } from 'react-router-dom'

import {
  Button,
  Form,
  Header,
  Grid,
  Image,
  Message,
  Segment,
  } from "semantic-ui-react"


export default function LoginPage({handleSignUpOrLogIn}){

  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  const [error, setError] = useState('')

  async function handleSubmit(e){
    e.preventDefault();
    try {
      const logIn = await userService.login(state)
      console.log(logIn)
      navigate('/') //navigate to homepage
      handleSignUpOrLogIn();
    }catch(err){
      console.log(err)
      setError('check terminal and console for logIn error')
    }
  }

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

    return (
      <Grid textAlign="center" style={{ height: "100vh", backgroundColor:'#473939' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450, backgroundColor: '#ddad61' }}>
          <Header>
            <h1>Recipe Bank</h1>
          </Header>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Segment style={{backgroundColor: '#ddad61'}} stacked>
              <Form.Input
                type="email"
                name="email"
                placeholder="email"
                value={state.email}
                onChange={handleChange}
                required
              />
              <Form.Input
                name="password"
                type="password"
                placeholder="password"
                value={state.password}
                onChange={handleChange}
                required
              />
              <Button style={{backgroundColor: 'red'}} type="submit" className="btn">
                Login
              </Button>
            </Segment>
            <Message>
              Don't have an account? <Link to="/signup">Sign up!</Link>
            </Message>
            {error ? <ErrorMessage error={error} /> : null}
          </Form>
        </Grid.Column>
      </Grid>
      );
}

