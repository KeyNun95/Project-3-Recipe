import { Card, Icon, Image } from "semantic-ui-react"

export default function RecipeCard({post, addLike, removeLike, user, isProfile}){
    const likedIndex = post.likes.findIndex(like => like.username === user.username);
    const likeColor = likedIndex > -1 ? 'red' : 'grey';
    const clickHandler = likedIndex > -1 ? () => removeLike(post.likes[likedIndex]._id) : () => addLike(post._id)
    console.log(post);
    return(
        <Card key={post._id}>
        {isProfile ? null : (
        <Card.Content textAlign="left">
            <Image
                floated="left"
                size="large"
                avatar 
                src={post.user.photoUrl ? post.user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"}
            />
            <Card.Header floated="right">{post.user.username}</Card.Header>
        </Card.Content>
        )}
        <Image src={`${post.photoUrl}`} wrapped ui={false}/>
        <Card.Content>
            <Card.Description>
                {post.recipeTitle}
            </Card.Description>
            <Card.Description>
                {post.ingredientList}
            </Card.Description>
            <Card.Description>
                {post.direction}
            </Card.Description>
        </Card.Content>
        <Card.Content extra textAlign={"right"}>
            <Icon name={"heart"} size="large" color={likeColor} onClick={clickHandler} />
            {post.likes.length} Likes
        </Card.Content>
        </Card>
    );
}