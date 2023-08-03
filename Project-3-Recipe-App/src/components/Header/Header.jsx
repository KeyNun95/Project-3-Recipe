import { Header, Segment, Image, Icon } from "semantic-ui-react";

export default function PageHeader(){
    return(
        <Segment>
            <Header as='h2' dividing icon>
                <Image circular src='/images/avatar/large/patrick.png' />
                <Icon name='sign-out'/>
            </Header>
        </Segment>
    )
}