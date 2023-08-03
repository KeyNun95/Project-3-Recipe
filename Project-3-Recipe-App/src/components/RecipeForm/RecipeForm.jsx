import { useState } from "react";
import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";

export default function RecipeForm(){
//STEP 2: set up useState for the form
    const [state, setState] = useState({
        recipeTitle: '',
        ingredientList: '',
        direction: '',
    })
//STEP 4: since we have a file set up useState for file input
    const [selectedFile, setSelectedFile] = useState('')
//STEP 3: write function that handles change in the form
    function handleChange(e){
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
//STEP 5: write function that handles change in form for file
    function handleFileInput(e){
        setSelectedFile(e.target.files[0])
    }

    function handleSubmit(e){
    }
//STEP 1: set up UI
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