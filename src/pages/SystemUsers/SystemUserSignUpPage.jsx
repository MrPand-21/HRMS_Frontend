import React from 'react';
import {Header, Button} from 'semantic-ui-react';
import {Formik, Form, useField} from 'formik';
import * as Yup from 'yup';
import {useHistory} from 'react-router-dom';

export default function SystemUserSignUpPage() {
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
      <Header as='h2' color='orange'>
        System User
      </Header>

      <Formik
        initialValues={{
          id: '',
        }}
        validationSchema={Yup.object({
          id: Yup.number().required('Required')
        })}
        onSubmit={(values) => {

          history.push('/systemuser/' + values.id);
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
