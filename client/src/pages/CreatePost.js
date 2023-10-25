import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function CreatePost() {
  return (
    <div className="createPostPage">
      <Formik>
        <Form className="formContainer">
          <label>Title: </label>
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="title"
            placeholder="(Ex, Title...)"
          />
          <label>Post: </label>
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="title"
            placeholder="(Ex, Post...)"
          />
          <label>User`s Name: </label>
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="userName"
            placeholder="(Ex, Bob123...)"
          />

          <button type="submit">Create post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
