import { Card } from "semantic-ui-react"
import RecipeCard from "../RecipeCard/RecipeCard"

export default function RecipeGallery({posts}){
    const recipePosts = posts.map((post) => {
        return <RecipeCard post={post} key={post._id}/>
    })

    return(
        <Card.Group itemsPerRow={1}>
            {recipePosts}
        </Card.Group>
    )
}