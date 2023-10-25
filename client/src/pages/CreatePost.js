import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function CreatePost() {
  const initialValues = {
    title: "",
    postText: "",
    userName: "",
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("You must input a Title!"),
    postText: Yup.string().required(),
    userName: Yup.string().min(3).max(15).required(),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Title: </label>
          <ErrorMessage name="title" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="title"
            placeholder="(Ex, Title...)"
          />
          <label>Post: </label>
          <ErrorMessage name="posttext" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="postText"
            placeholder="(Ex, Post...)"
          />
          <label>User`s Name: </label>
          <ErrorMessage name="userName" component="span" />
          <Field
            autoComplete="off"
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
