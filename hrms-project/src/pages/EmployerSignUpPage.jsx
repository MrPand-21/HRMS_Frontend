import React from 'react';
import {Header, Button} from 'semantic-ui-react';
import {useParams} from 'react-router';
import {Formik, Form, useField} from 'formik';
import * as Yup from 'yup';
import {Link, useHistory} from 'react-router-dom';

export default function EmployerSignUpPage() {
  const history = useHistory();

  const TextField = ({label, ...props}) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
      <div>
        <div className='ui input'>
          <label
            className='labelForEmployerSignUp'
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
    <div className='employer-header'>
      <Header as='h2' color='pink'>
        Employer
      </Header>

      <Formik
        initialValues={{
          id: '',
        }}
        validationSchema={Yup.object({
          id: Yup.number().required('Required')
        })}
        onSubmit={(values, {setSubmitting}) => {
          let {id} = values;

          history.push('/employer/' + id);
        }}>
        <Form>
          <TextField
            label='Id'
            name='id'
            type='text'
            placeholder='1,2,3 etc...'
          />
          <br />

          <Button color='blue' inverted type='subxit'>
            Submit
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
