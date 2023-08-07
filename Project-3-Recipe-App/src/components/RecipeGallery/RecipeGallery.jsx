import { Card } from "semantic-ui-react"
import RecipeCard from "../RecipeCard/RecipeCard"

export default function RecipeGallery({posts, addLike, removeLike, user, itemsPerRow, isProfile}){
    const recipePosts = posts.map((post) => {
        return <RecipeCard post={post} key={post._id} isProfile={isProfile} addLike={addLike} removeLike={removeLike} user={user}/>
    })

    return(
        <Card.Group itemsPerRow={itemsPerRow}>
            {recipePosts}
        </Card.Group>
    )
}