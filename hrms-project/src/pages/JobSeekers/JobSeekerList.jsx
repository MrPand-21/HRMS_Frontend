import React, {useEffect, useState} from 'react';
import {Table, Header, Button, Icon} from 'semantic-ui-react';
import JobSeekerService from '../../services/JobSeekerService';
import { Link } from 'react-router-dom';

export default function JobSeekerList() {
  const [jobSeekers, setJobSeekers] = useState([]);
  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getJobSeekers()
      .then((result) => setJobSeekers(result.data.data))
      .catch();
  }, []);

  return (
    <div>
      <Table celled padded inverted textAlign="center">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>images</Table.HeaderCell>
            <Table.HeaderCell singleLine>Name</Table.HeaderCell>
            <Table.HeaderCell>languages</Table.HeaderCell>
            <Table.HeaderCell>work experiences</Table.HeaderCell>
            <Table.HeaderCell>attended Schools</Table.HeaderCell>
            
            <Table.HeaderCell>description</Table.HeaderCell>
            <Table.HeaderCell>Other infos</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobSeekers.map((jobseeker) => (
            <Table.Row key={jobseeker.id} textAlign='center'>
              <Table.Cell>
                {jobseeker.images.imagePath == null ? (
                  <i className='huge icon'>
                    <i className='user  circle icon'></i>
                  </i>
                ) : (
                  <img src={jobseeker.images.imagePath} alt=''></img>
                )}
              </Table.Cell>
              <Table.Cell>
                <Header
                  as='h4'
                  textAlign='center'
                  className='ui white'
                  id='white-jobseeker'>
                  {jobseeker.firstName + ' ' + jobseeker.lastName}
                </Header>
              </Table.Cell>
              <Table.Cell>
                {jobseeker.languages.length === 0
                  ? 'null'
                  : jobseeker.languages.map(
                      (language) =>
                        language.languageName +
                        ' level : ' +
                        language.languageLevel.id
                    )}
              </Table.Cell>
              <Table.Cell>
                {!(!!jobseeker.workExperiences)
                  ? 'null'
                  : jobseeker.workExperiences.map(
                      (workExperience) =>
                        'Work place : ' +
                        workExperience.workplaceName +
                        ' Position : ' +
                        workExperience.jobPosition.position_name
                    )}
              </Table.Cell>
              <Table.Cell>
                {jobseeker.attendedSchools.length === 0
                  ? 'null'
                  : jobseeker.attendedSchools.map(
                      (school) =>
                        'School : ' +
                        school.school.schoolName +
                        ' Department : ' +
                        null
                    )}
              </Table.Cell>
             
              <Table.Cell>
                {jobseeker.info === null
                  ? 'nothing has been written'
                  : jobseeker.info}
              </Table.Cell>
              <Table.Cell>
                <Button animated color="red" basic inverted as={Link} to={`/jobseekers/${jobseeker.id}`}>
                  <Button.Content visible>Go to infos</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
