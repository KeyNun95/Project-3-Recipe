import { Card, Icon, Image } from "semantic-ui-react"
export default function RecipeCard({post}){
    const likedIndex = post.likes.findIndex(like => like.username === user.username);
    console.log(post);
    return(
        <Card>
        <Card.Content textAlign="left">
            <Image
                floated="left"
                size="large"
                avatar 
                src={post.user.photoUrl ? post.user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"}
            />
            <Card.Header floated="right">{post.user.username}</Card.Header>
        </Card.Content>
        <Image src={`${post.photoUrl}`} wrapped ui={false}/>
        <Card.Content>
            <Card.Description>
                {post.recipeTitle}
                {post.ingredientList}
                {post.direction}
            </Card.Description>
        </Card.Content>
        <Card.Content extra textAlign={"right"}>
            <Icon name={"heart"} size="large" color={"grey"}/>
        </Card.Content>
        </Card>
    );
}