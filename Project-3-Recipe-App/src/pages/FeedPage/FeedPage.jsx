import RecipeGallery from "../../components/RecipeGallery/RecipeGallery"
import RecipeForm from "../../components/RecipeForm/RecipeForm"
import PageHeader from "../../components/Header/Header"
import { Grid } from "semantic-ui-react"

export default function FeedPage(){
    return(
    <Grid centered>
        <Grid.Row>
            <Grid.Column>
                <PageHeader />
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