import {Formik, Form, useField, useFormik} from 'formik';
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router';
import JobService from '../services/JobService';
import JobPositionService from '../services/JobPositionService';
import CityService from '../services/CityService';
import * as Yup from 'yup';
import {
  Button,
  Dropdown,
  Input,
  TextArea,
  Card,
  Grid,
  Header,
} from 'semantic-ui-react';

export default function JobAddPage() {
  const InputField = ({label, ...props}) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
      <div>
        <div className='ui input'>
          <label
            className='labelForJobAddFields'
            style={{display: 'block'}}
            for={props.id || props.name}>
            {label}
            <br />
          </label>

          <input style={{display: 'block'}} {...field} {...props} />
        </div>
        <br />
        {meta.touched && meta.error ? (
          <div className='error'>
            <div class='ui pointing red basic label'>{meta.error}</div>
          </div>
        ) : null}
      </div>
    );
  };

  const CheckBox = ({children, ...props}) => {
    // React treats radios and checkbox inputs differently other input types, select, and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField({...props, type: 'checkbox'});
    return (
      <div>
        <div>

          <label className='checkbox-input'>
            <input type='checkbox' {...field} {...props} />
            {children}
          </label>

        </div>
        {meta.touched && meta.error ? (
          <Label basic color='red' pointing='left'>
            <div className='error'>{meta.error}</div>
          </Label>
        ) : null}
      </div>
    );
  };

  const SelectionFields = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
      <div>
        <div>


          <label className='labelForJobAddInutFields' for={props.id || props.name}>{label}</label>
          <select {...field} {...props} />


        </div>
        {meta.touched && meta.error ? (
          <div className='error'>
            <div class='ui pointing red basic label'>{meta.error}</div>
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <div>
      <Header
        as='h1'
        textAlign='center'
        color='pink'
        class='ui marginBottom'
        id='headerForJob'>
        Add Job
      </Header>
      <Formik
        initialValues={{
          empty_positions: '',
          maximum_salary: '',
          maximum_salary: '',
          description: '', // added for our checkbox
          deadline: '', // added for our select
        }}
        validationSchema={Yup.object({})}
        onSubmit={(values, {setSubmitting}) => {}}>
        <Form>
          <Grid stackable>
            <Grid.Row computer={2}>
              <Grid.Column computer={8}>
                <InputField
                  label='Empty Positions'
                  name='empty_positions'
                  type='number'
                  placeholder='1,2,3 etc...'
                />
              </Grid.Column>
              <Grid.Column computer={8}>
                <InputField
                  label='Deadline'
                  name='deadline'
                  type='text'
                  placeholder='2022-06-27, 2022-06-27T13:28:17.707Z etc...'
                  id='deadlineField'
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column computer={8}>
                <InputField
                  label='Salary(minimum) '
                  name='maximum_salary'
                  type='number'
                  placeholder='3500, 5000 etc...'
                />
              </Grid.Column>
              <Grid.Column computer={8}>
                <InputField
                  label='Salary(maximum) '
                  name='maximum_salary'
                  type='number'
                  placeholder='5000, 7500 etc...'
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column computer={16}>
                <InputField
                  label='Description'
                  name='description'
                  type='text'
                  placeholder='Looking for game developers, web dev. etc...'
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Button color='pink' inverted>
            Submit
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
