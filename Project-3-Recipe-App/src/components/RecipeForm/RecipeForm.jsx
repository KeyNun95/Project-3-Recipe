import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";

export default function RecipeForm(){
    const [state, setState] = useState({
        recipeTitle: '',
        ingredientList: '',
        direction: '',
    })

    return(
        <Segment>
            <Form autoComplete="off" onSubmit={handleSubmit}>
                <Form.Input
                    className="form-control"
                    name="recipeTitle"
                    value={state.recipeTitle}
                    placeholder="What are you cooking?"
                    onChange={handleChange}
                    required
                />
                <Form.Input
                    className="form-control"
                    name="ingredientList"
                    value={state.ingredientList}
                    placeholder="Ingredient"
                    onChange={handleChange}
                    required
                />
                <Form.Input
                    className="form-control"
                    name="direction"
                    value={state.direction}
                    placeholder="How to cook?"
                    onChange={handleChange}
                    required
                />
                <Form.Input
                    className="form-control"
                    type="file"
                    name="photo"
                    placeholder="upload image"
                    onChange={handleFileInput}
                />
                <Button type="submit" className="btn">
                    Add Recipe
                </Button>
            </Form>
        </Segment>
    );
}