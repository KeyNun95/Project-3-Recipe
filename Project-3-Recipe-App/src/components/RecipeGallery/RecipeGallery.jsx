import { Card } from "semantic-ui-react"
import RecipeCard from "../RecipeCard/RecipeCard"

export default function RecipeGallery({posts, addLike, removeLike, user}){
    const recipePosts = posts.map((post) => {
        return <RecipeCard post={post} key={post._id} addLike={addLike} removeLike={removeLike} user={user}/>
    })

    return(
        <Card.Group itemsPerRow={1}>
            {recipePosts}
        </Card.Group>
    )
}