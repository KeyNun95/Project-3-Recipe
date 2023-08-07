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

 //this hook changes url we are on
 import { useNavigate } from 'react-router-dom'

 //handleSignUpOrLogin is from the function in the app compopent. function name becomes a prop
export default function SignUpPage(){
    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
        passwordConf: ''
    });

    //this state handles file upload
    const [fileInput, setFileInput] = useState('');

    const [error, setError] = useState(''); //good to have error message

    const navigate = useNavigate();

    function handleChange(e){
        setState({ 
            ...state, //emptys previous value and
            [e.target.name]: e.target.value //update whatever key was written in
        })
    }

    function handleFileInput(e){
        setFileInput(e.target.files[0])
    }

    async function handleSubmit(e){
        e.preventDefault();

        //send file to server after changing data to formdata
        const formData = new FormData();
        //key for my req.file in this case is 'photo'
        formData.append('photo', fileInput);
        //the rest of th body
        formData.append('username', state.username)
        formData.append('email', state.email)
        formData.append('password', state.password)
        //we are grabbing the pieces of state that we want to send over and using them as the value

        try{
            //this makes the fetch request to server
            //calling the signup fetch function in our utils/userservice
            //and sends out state object
            const signUp= await userService.signup(formData)
            console.log(signUp)
            //navigate user to homepage after pressing submit to signup
            navigate('/');
// WHY THE FUCK DID THIS NOT WORK 
            // handleSignUpOrLogin(); 
//we are calling the prop in the very first function and setting the user
        }catch(err){
            console.log(err, 'error in handleSubmit');
            setError('Check your terminal and chrome console!')
        }
    };

    return(
        <Grid textAlign="center" style={{height: "100vh", backgroundColor:'#473939'}} verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 450, backgroundColor: '#ddad61'}}>
                <Header>
                    <h1>Recipe Bank</h1>
                </Header>
                <Form autoComplete="off" onSubmit={handleSubmit}>
                    <Segment style={{backgroundColor: '#ddad61'}} stacked>
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
                                onChange={handleFileInput}
                            />
                        </Form.Field>
                        <Button style={{backgroundColor:'red'}} type="submit" className="btn">
                            Signup
                        </Button>
                    </Segment>
                    {error ? <ErrorMessage error={error} /> : null}
                </Form>
            </Grid.Column>
        </Grid>
    );
}