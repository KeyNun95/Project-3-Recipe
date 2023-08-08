import React from 'react';
import { Button, Comment, Form } from 'semantic-ui-react';
import { useState } from "react";
import * as commentApi from "../../utils/commentApi"

export default function CommentForm({ post, user}){

    const [review, setReview] = useState({
        content: ''
    })
    
    function handleChange(e){
        setReview({
            ...review,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        const newComment = commentApi.create(post._id, review);
        console.log(newComment)
    }
    
    return(
        <Comment.Group style={{maxHeight: 120}}>
        <Comment>
          <Comment.Avatar as='a' src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} />
          <Comment.Content>
          <Comment.Author as='a'>{user.username}</Comment.Author>
            <Form reply onSubmit={handleSubmit}>
              <Form.TextArea
                style={{maxHeight: 50}}
                name="content"
                value={review.content}
                onChange={handleChange}
              />
              <Button type="submit" labelPosition='left'>Reply</Button>
            </Form>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    )
}