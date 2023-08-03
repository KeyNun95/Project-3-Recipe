import { Header, Segment, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function PageHeader({handleLogout}){
    return(
        <Segment>
            <Header as='h2' dividing floated="left">
                <Image circular src='/images/avatar/large/patrick.png' />
            </Header>
            <Header as='h2' floated="right">
                <Link to="" onClick={handleLogout}>
                    <Icon name='sign-out' />
                </Link>
            </Header>
        </Segment>
    )
}