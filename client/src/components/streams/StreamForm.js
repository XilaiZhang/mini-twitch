import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component{
    renderError({error, touched}){
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = (formProps) => {  
        //console.log(meta);
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error':''}`;
        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input 
                    // onChange={formProps.input.onChange} 
                    // value={formProps.input.value}
                    {...formProps.input}
                    autoComplete="off"
                />
                {this.renderError(formProps.meta)}
            </div>
        );
    }

    onSubmit = (formValues)=>{
        this.props.onSubmit(formValues);
    }

    render(){
        //console.log(this.props);
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues)=>{
    const errors = {};

    if(!formValues.title){
        errors.title = 'you must enter a title';
    }
    if(!formValues.description){
        errors.description = 'you must enter a description';
    }

    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm);