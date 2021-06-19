import React, {useEffect, useState} from 'react';
import {Table, Header} from 'semantic-ui-react';
import JobSeekerService from '../services/JobSeekerService';

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
      <Table celled padded color='gray' inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>images</Table.HeaderCell>
            <Table.HeaderCell singleLine>Name</Table.HeaderCell>
            <Table.HeaderCell>languages</Table.HeaderCell>
            <Table.HeaderCell>work experiences</Table.HeaderCell>
            <Table.HeaderCell>attended Schools</Table.HeaderCell>
            <Table.HeaderCell>email</Table.HeaderCell>
            <Table.HeaderCell>linkedin</Table.HeaderCell>
            <Table.HeaderCell>github</Table.HeaderCell>
            <Table.HeaderCell>info</Table.HeaderCell>
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
                        ' : level ' +
                        language.languageLevel.levelDescription
                    )}
              </Table.Cell>
              <Table.Cell>
                {jobseeker.workExperiences.length === 0
                  ? 'null'
                  : jobseeker.workExperiences.map(
                      (workExperience) =>
                        'Work place : ' +
                        workExperience.workPlaceName +
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
                        school.schoolName +
                        ' Department : ' +
                        school.departments.departmentName
                    )}
              </Table.Cell>
              <Table.Cell>{jobseeker.user.email}</Table.Cell>
              <Table.Cell singleLine>
                {jobseeker.linkedInAccount === null
                  ? 'null'
                  : jobseeker.linkedInAccount}
              </Table.Cell>
              <Table.Cell>
                {jobseeker.githubAccount === null
                  ? 'null'
                  : jobseeker.githubAccount}
              </Table.Cell>
              <Table.Cell>
                {jobseeker.info === null
                  ? 'nothing has been written'
                  : jobseeker.info}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
