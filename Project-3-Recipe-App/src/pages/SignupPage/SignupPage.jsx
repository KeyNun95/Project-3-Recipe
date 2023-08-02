import { useState } from "react"
import userService from "../../utils/userService"; //we want to call the signup function to make the post request to server
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    Message,
    Segment,
    } from "semantic-ui-react";

export default function SignUpPage(){
    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
        passwordConf: ''
    });

    const [error, setError] = useState(''); //good to have error message

    function handleChange(e){
        setState({ 
            ...state, //emptys previous value and
            [e.target.name]: e.target.value //update whatever key was written in
        })
    }

    async function handleSubmit(e){
        e.preventDefault();
        try{
            //this makes the fetch request to server
            //calling the signup fetch function in our utils/userservice
            //and sends out state object
            const signUp= await userService.signup(state)
            console.log(signUp)
        }catch(err){
            console.log(err, 'error in handleSubmit');
            setError('Check your terminal and chrome console!')
        }
    }

    return(
        <Grid textAlign="center" style={{height: "100vh"}} verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 450}}>
                <Header>
                </Header>
                <Form autoComplete="off" onSubmit={handleSubmit}>
                    <Segment stacked>
                        <Form.Input
                            name="username"
                            placeholder="username"
                            value={state.username}
                            onChange={handleChange}
                            required
                        />
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
                        <Form.Input
                            name="passwordConf"
                            type="password"
                            placeholder="Confirm password"
                            value={state.passwordConf}
                            onChange={handleChange}
                            required
                        />
                        <Form.Field>
                            <Form.Input
                                type="file"
                                name="photo"
                                placeholder="upload image"
                            />
                        </Form.Field>
                        <Button type="submit" className="btn">
                            Signup
                        </Button>
                    </Segment>
                    {error ? <ErrorMessage error={error} /> : null}
                </Form>
            </Grid.Column>
        </Grid>
    );
}