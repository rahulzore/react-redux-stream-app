import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {

    renderError = ({error, touched}) => {
        if(error && touched){
            return (
            <div className="ui error message">
            <div className="header">{error}</div>
            </div>
        )
        }
    }

    renderField = ({input, label, meta}) => {
        const className = `field ${meta.touched && meta.error? 'error': ''}`
        return (
            <div className={className}>
            <label>{label}</label>
            <input {...input} autoComplete="off"/>
            <div>{this.renderError(meta)}</div>
            </div>
        )
    }

    onSubmit = (formValues) => {
        console.log(formValues)
    }

    render() {
        return (

            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderField} label="Enter Title here" />
                <Field name="description" component={this.renderField} label="Enter Description here"/>
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {}

    if(!formValues.title){
        errors.title = 'You must enter a title'
    }

    if(!formValues.description){
        errors.description = 'You must enter a description'
    }

    return errors;
}

export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);