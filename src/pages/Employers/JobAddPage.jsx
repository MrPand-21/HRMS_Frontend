import {Formik, Form, useField} from 'formik';
import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router';
import JobService from '../../services/JobService';
import JobPositionService from '../../services/JobPositionService';
import CityService from '../../services/CityService';
import WorkPlaceService from '../../services/WorkPlaceService';
import WorkTimeService from '../../services/WorkTimeService';
import * as Yup from 'yup';
import {
  Button,
  Dropdown,
  Grid,
  Header,
  Label,
  Checkbox,
} from 'semantic-ui-react';

export default function JobAddPage() {
  let {employerId} = useParams();

  let jobService = new JobService();
  const history = useHistory();

  const [workTimes, setWorkTimes] = useState([]);
  const [workPlaces, setWorkPlaces] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let workPlaceService = new WorkPlaceService();
    let workTimeService = new WorkTimeService();
    let cityService = new CityService();
    let jobPositionService = new JobPositionService();

    workPlaceService
      .getWorkPlaces()
      .then((result) => setWorkPlaces(result.data.data));

    workTimeService
      .getWorkTimes()
      .then((result) => setWorkTimes(result.data.data));

    cityService
      .getCities()
      .then((result) => setCities(result.data.data))
      .catch();
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data))
      .catch();
  }, []);

  const workTimeOptions = workTimes.map((workTime, index) => ({
    key: index,
    text: workTime.workTimeName,
    value: workTime.id,
  }));

  const WorkPlaceOptions = workPlaces.map((workPlace, index) => ({
    key: index,
    text: workPlace.workPlaceName,
    value: workPlace.id,
  }));

  const CityOptions = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id,
  }));

  const JobPositionOptions = jobPositions.map((jobPosition, index) => ({
    key: index,
    text: jobPosition.position_name,
    value: jobPosition.id,
  }));

  const InputField = ({label, ...props}) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
      <div>
        <div className='ui input'>
          <label className='labelForJobAddFields' for={props.id || props.name}>
            {label}
            <br />
          </label>

          <input {...field} {...props} />
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

  const TrueFalse = ({children, ...props}) => {
    // React treats radios and checkbox inputs differently other input types, select, and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField({...props, type: 'checkbox'});
    return (
      <div>
        <Checkbox {...field} {...props} />

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
        <label for={props.id || props.name}>{label}</label>
        <Dropdown fluid clearable item search selection {...field} {...props} />

        {meta.touched && meta.error ? (
          <div class='ui pointing red basic label'>{meta.error}</div>
        ) : null}
      </div>
    );
  };

  const handleChangeSemantic = (prop, value, fieldName) => {
    prop.setFieldValue(fieldName, value);
  };

  const handleOnSubmit = (values) => {
    values.employerId = employerId;
    values.createdDate = new Date();
    jobService.addJob(values);
    alert("Job added. After system user's confirmation, it will be listed.");
    history.push('/');
  };
  return (
    <div className='marginTop '>
      <Header
        as='h1'
        textAlign='center'
        color='pink'
        className='ui marginBottom'
        id='headerForJob'>
        Add Job
      </Header>
      <Formik
        initialValues={{
          numberOfEmptyPositions: '',
          maximumSalary: '',
          minimumSalary: '',
          description: '',
          deadline: '',
          cityId: '',
          jobPositionId: '',
          workTimeId: '',
          workPlaceId: '',
          agreeCheckBox: ''
        }}
        validationSchema={Yup.object({
          numberOfEmptyPositions: Yup.string().required(
            'You have to indicate the number of empty positions!'
          ),
          minimumSalary: Yup.number()
            .min(0, 'Salary can not be less than 0!')
            .required('You have to indicate the minimum salary of job!'),
          maximumSalary: Yup.number()
            .min(0, 'Salary can not be less than 0!')
            .required('You have to indicate the maximum salary of job!'),
          description: Yup.string().required('You have to add description!'),
          deadline: Yup.date()
            .required('Deadline of the job is required!')
            .min(new Date(), 'deadline must be in the future'),
          workTimeId: Yup.string().required('Work Time must be chosen'),
          cityId: Yup.string().required('City must be chosen!'),
          workPlaceId: Yup.string().required('Work Time must be chosen!'),
          jobPositionId: Yup.string().required('Job Position must be chosen!'),
          agreeCheckBox: Yup.boolean()
             .required('Required')
             .oneOf([true], 'You must accept the terms and conditions.'),
        })}
        onSubmit={(values) => {
          handleOnSubmit(values);
        }}>
        {(formikprops) => (
          <Form onSubmit={formikprops.handleSubmit}>
            <Grid stackable>
              <Grid.Row computer={2}>
                <Grid.Column computer={8}>
                  <InputField
                    label='Empty Positions'
                    name='numberOfEmptyPositions'
                    type='number'
                    placeholder='1,2,3 etc...'
                  />
                </Grid.Column>
                <Grid.Column computer={8} >
                  <div className='marginLeft'>
                    <InputField
                      label='Description'
                      name='description'
                      size='massive'
                      type='text'
                      placeholder='Looking for game developers, web dev. etc...'
                      value={formikprops.values.description}
                    />
                  </div>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column computer={8}>
                  <InputField
                    label='Salary(minimum) '
                    name='minimumSalary'
                    type='number'
                    placeholder='3500, 5000 etc...'
                  />
                </Grid.Column>

                <Grid.Column computer={8}>
                  <InputField
                    label='Salary(maximum) '
                    name='maximumSalary'
                    type='number'
                    placeholder='5000, 7500 etc...'
                  />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row computer={1}>
                <Grid.Column computer={8}>
                  <SelectionFields
                    id='jobPositionId'
                    name='jobPositionId'
                    label='Job Position'
                    options={JobPositionOptions}
                    placeholder='C# dev, Java Uzmanı etc.'
                    onChange={(event, data) =>
                      handleChangeSemantic(
                        formikprops,
                        data.value,
                        'jobPositionId'
                      )
                    }
                  />
                </Grid.Column>
                <Grid.Column computer={8}>
                  <SelectionFields
                    id='cityId'
                    name='cityId'
                    label='City'
                    placeholder='City'
                    onChange={(event, data) =>
                      handleChangeSemantic(formikprops, data.value, 'cityId')
                    }
                    value={formikprops.values.cityId}
                    item
                    options={CityOptions}
                  />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row computer={5}>
                <Grid.Column computer={8}>
                  <SelectionFields
                    id='workTimeId'
                    name='workTimeId'
                    label='Work Time'
                    options={workTimeOptions}
                    placeholder='part-time / full-time'
                    value={formikprops.values.workTimeid}
                    onChange={(event, data) =>
                      handleChangeSemantic(
                        formikprops,
                        data.value,
                        'workTimeId'
                      )
                    }
                  />
                </Grid.Column>
                <Grid.Column computer={8}>
                  <SelectionFields
                    id='workPlaceId'
                    name='workPlaceId'
                    label='Work Place'
                    options={WorkPlaceOptions}
                    placeholder='At the workplace / remote work'
                    value={formikprops.values.workPlaceId}
                    onChange={(event, data) =>
                      handleChangeSemantic(
                        formikprops,
                        data.value,
                        'workPlaceId'
                      )
                    }
                  />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={1}>
                <Grid.Column computer={16}>
                  <InputField
                    style={{width: '100%'}}
                    label='Deadline'
                    name='deadline'
                    type='date'
                    placeholder='2022-06-27, 2022-06-27T13:28:17.707Z etc...'
                    id='deadline'
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid.Row columns={1}>
              <Grid.Column>
                <TrueFalse
                  label='I agree to the terms and conditions'
                  name='agreeCheckBox'
                  id='agreeCheckBox'
                />
              </Grid.Column>
            </Grid.Row>

            <br />

            <Button
              color='pink'
              icon='add'
              inverted
              content='Add'
              labelPosition='right'
              type='submit'
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
