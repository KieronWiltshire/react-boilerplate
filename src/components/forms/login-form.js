import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

/**
 * The unique form identifier
 */
const formId = 'LoginForm';

/**
 * A component used in rendering the form inputs.
 */
const FormField = ({ input, label, type, id, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <div>
      <input {...input} className={classnames('form-control', { 'is-invalid': (touched && error) })} type={type} id={id} />
      <div className="invalid-feedback">{error}</div>
    </div>
  </div>
);

/**
 * LoginForm component.
 */
const LoginForm = connect((state) => {
  return {
    // ...
  };
}, (dispatch) => {
  return {
    // ...
  };
})(class extends Component {

  /**
   * Retrieve the form identifier.
   *
   * @returns {string}
   */
  getFormId() {
    return formId;
  }

  /**
   * Render the {React} component.
   *
   * @returns {void}
   */
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div>
        <form id={this.getFormId()} onSubmit={handleSubmit} noValidate>
          <Field name="email" component={FormField} type="text" label="Email Address" id={this.getFormId() + "EmailInput"} />
          <Field name="password" component={FormField} type="password" label="Password" id={this.getFormId() + "PasswordInput"} />
          <div>
            <button className="btn btn-primary" type="submit" disabled={pristine || submitting}>Login</button>
            <Link to='/auth/register' className="">Register</Link>
          </div>
        </form>
      </div>
    );
  }
});

export default reduxForm({
  form: formId
})(LoginForm)
