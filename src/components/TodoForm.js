import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import formValidationSchema from "../validations/formValidation";

const TodoForm = ({ onSubmit, initialValues, isEditing }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formValidationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ handleSubmit, handleChange, values }) => (
        <Form className="todo-form" onSubmit={handleSubmit}>
          <Field
            name="name"
            type="text"
            placeholder="Enter name"
            className="todo-input one-side-rounded"
            value={values.name}
            onChange={handleChange}
          />
          <ErrorMessage name="name" component="div" className="error" />

          <Field
            name="email"
            type="email"
            placeholder="Enter email"
            className="todo-input one-side-rounded"
            value={values.email}
            onChange={handleChange}
          />
          <ErrorMessage name="email" component="div" className="error" />

          <button className="add-btn" type="submit">
            {isEditing ? "Update" : "Add"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default TodoForm;
