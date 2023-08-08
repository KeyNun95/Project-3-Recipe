import { Header, Segment, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function PageHeader({user, handleLogout}){
    return(
        <Segment clearing style={{backgroundColor: '#ddad61'}}>
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
            <Header as='h1' textAlign="center" style={{color:"white"}}>
                Recipe Bank
            </Header>
            <Header as='h2' floated="right">
                <Link to="/">
                    <Icon name="home" style={{color:"white"}}></Icon>
                </Link>
                <Link to="" onClick={handleLogout}>
                    <Icon name="sign-out" style={{color:"white"}}></Icon>
                </Link>
            </Header>
        </Segment>
    )
}