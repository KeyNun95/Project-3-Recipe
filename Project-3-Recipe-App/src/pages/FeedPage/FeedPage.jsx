import { useState } from "react";
import RecipeGallery from "../../components/RecipeGallery/RecipeGallery"
import RecipeForm from "../../components/RecipeForm/RecipeForm"
import PageHeader from "../../components/Header/Header"
import { Grid } from "semantic-ui-react"
//this will import all function from 
import * as postApi from "../../utils/postApi"

export default function FeedPage({handleLogout}){
    //STEP 8:
    //the reason we are setting posts state is because we can pass that data to the postpage where it will be rendered
    const [posts, setPosts] = useState([]) //array of objects containing likes as well
    const [error, setError] = useState("");
    //everytime we update state, we will first make an http request to server
    //to perform the change/CRUD operation
    //(C)RUD-create the recipe
    //this is calling the handleSubmit function in the recipeForm
    //it gets a response from the server and then state is updated
    async function handleAddPost(data){
        try{
            const responseData = await postApi.creata(data)
            console.log(responseData, 'response from server in handleAddpost')
            setPosts([responseData.data, ...posts]);
        }catch(err){
            console.log(err, 'err in handleAddPost Feedpage')
            setError('Error creating a post! please try again')
        }
    }

    return(
    <Grid centered>
        <Grid.Row>
            <Grid.Column>
                <PageHeader handleLogout={handleLogout}/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column style={{ maxWidth: 450 }}>
                <RecipeForm handleAddPost={handleAddPost}/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column style={{ maxWidth: 450 }}>
                <RecipeGallery />
            </Grid.Column>
        </Grid.Row>
    </Grid>
    )
}