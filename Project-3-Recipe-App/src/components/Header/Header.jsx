import { Header, Segment, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function PageHeader({user, handleLogout}){
    return(
        <Segment>
            <Header as='h2' floated="left">
                <Link to={`/${user?.username}`}>
                <Image 
                    src={
                        user?.photoUrl
                            ? user.photoUrl
                            : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                        }
                        avatar
                ></Image>
                </Link>
            </Header>
            <Header as='h2' floated="right">
                <Link to="" onClick={handleLogout}>
                    <Icon name='sign-out' />
                </Link>
            </Header>
        </Segment>
    )
}