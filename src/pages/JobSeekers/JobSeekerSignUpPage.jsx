import React from 'react';
import {Header, Button} from 'semantic-ui-react';
import {Formik, Form, useField} from 'formik';
import * as Yup from 'yup';
import {useHistory} from 'react-router-dom';

export default function EmployerSignUpPage() {
  const history = useHistory();

  const TextField = ({label, ...props}) => {
    
    const [field, meta] = useField(props);
    return (
      <div>
        <div className='ui input'>
          <label
            className='labelForSystemUserSignUp'
            for={props.id || props.name}>
            {label}{' '}
          </label>

          <input type='text' {...field} {...props} />
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

  return (
    <div className='jobSeeker-header'>
      <Header as='h2' color='red'>
        Job Seeker
      </Header>

      <Formik
        initialValues={{
          id: '',
        }}
        validationSchema={Yup.object({
          id: Yup.number().required('Required')
        })}
        onSubmit={(values) => {
          history.push('/jobseeker/' + values.id);
        }}>
        <Form>
          <TextField
            label='Id'
            name='id'
            id="id"
            type='text'
            placeholder='1,2,3 etc...'
          />
          <br />

          <Button color='blue' inverted type='submit'>
            Submit
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
