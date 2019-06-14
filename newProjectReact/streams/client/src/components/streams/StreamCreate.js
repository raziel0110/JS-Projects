import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput = ({ input, label, meta }) => {
    console.log(meta);
    return (
      <div>
        <label>{label}</label>
        <input {...input} className="form-control" autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError = meta => {
    if (meta.touched && meta.error) {
      return (
        <div className="alert alert-danger">
          <div>{meta.error}</div>
        </div>
      );
    }
  };

  onSubmit = formValues => {};
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div className="form-group">
          <Field
            name="title"
            component={this.renderInput}
            label="Enter title:"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description:"
          />
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title!";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description!";
  }
  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate: validate
})(StreamCreate);
