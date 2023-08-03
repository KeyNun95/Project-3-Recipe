import RecipeGallery from "../../components/RecipeGallery/RecipeGallery"
import RecipeForm from "../../components/RecipeForm/RecipeForm"
import PageHeader from "../../components/Header/Header"
import { Grid } from "semantic-ui-react"

export default function FeedPage({handleLogout}){
    return(
    <Grid centered>
        <Grid.Row>
            <Grid.Column>
                <PageHeader handleLogout={handleLogout}/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column style={{ maxWidth: 450 }}>
                <RecipeForm />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column style={{ maxWidth: 450 }}>
                <RecipeGallery />
            </Grid.Column>
        </Grid.Row>
    </Grid>
    )
}