import React, { useState, useEffect } from "react"
import ProfileBio from "../../components/ProfileBio/ProfileBio"
import { useParams } from "react-router-dom"
import { Grid } from "semantic-ui-react"
import PageHeader from "../../components/Header/Header"
import RecipeGallery from "../../components/RecipeGallery/RecipeGallery"
import userService from "../../utils/userService"
import * as likeApi from "../../utils/likeApi"

export default function ProfilePage({user, handleLogout}){
    const [posts, setPosts] = useState([]);
    const [userUser, setUserUser] = useState({});
    const [error, setError] = useState("");
    
    const { username } = useParams();
    console.log(username);

    async function addLike(postId){
        try{
            const response = await likeApi.create(postId);
            getProfile();
        }catch(err){
            setError('error creating like')
            console.log(err, 'error')
        }
    }

    async function removeLike(likeId){
        try{
            const response = await likeApi.removeLike(likeId);
            getProfile();
        }catch(err){
            setError('error deleting like')
            console.log(err, 'error')
        }
    }


    async function getProfile(){
        try{
            const response = await userService.getProfile(username);
            console.log(response);
            setPosts(response.posts);
            setUserUser(response.user);
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
                    <PageHeader handleLogout={handleLogout} user={user}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <ProfileBio user={userUser}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                <Grid.Column style={{ maxWidth: 750 }}>
                    <RecipeGallery posts={posts} user={user} addLike={addLike} removeLike={removeLike} itemsPerRow={3} isProfile={true}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}