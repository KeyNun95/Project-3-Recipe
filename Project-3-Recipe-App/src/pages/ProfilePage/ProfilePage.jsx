import React, { useState, useEffect } from "react"
import ProfileBio from "../../components/ProfileBio/ProfileBio"
import { useParams } from "react-router-dom"
import { Grid } from "semantic-ui-react"
import PageHeader from "../../components/Header/Header"
import RecipeGallery from "../../components/RecipeGallery/RecipeGallery"
import userService from "../../utils/userService"

export default function ProfilePage({handleLogout}){
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    
    const { username } = useParams();
    console.log(username);

    async function getProfile(){
        try{
            const response = await userService.getProfile(username);
            console.log(response);
            setPosts(response.posts);
            setUser(response.user);
        }catch(err){
            setError('error loading ProfilePage')
            console.log(err, 'err')
        }
    }

    useEffect(() => {
        getProfile()
    }, [username]);

    return(
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <PageHeader handleLogout={handleLogout}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <ProfileBio user={user}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                <Grid.Column style={{ maxWidth: 750 }}>
                    <RecipeGallery posts={posts}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}