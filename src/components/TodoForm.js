import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import formValidationSchema from "../validations/formValidation";

const TodoForm = ({ onSubmit, onCancel, initialValues = { name: "", email: "" }, isEditing }) => {
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
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

          <div className="button-group">
            <button className="add-btn" type="submit">
              {isEditing ? "Update" : "Add"}
            </button>
            {isEditing && (
              <button 
                className="cancel-btn" 
                type="button" 
                onClick={onCancel}
              >
                Cancel
              </button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default TodoForm;
