import React, {useEffect, useState} from 'react';
import {Table, Header, Rating} from 'semantic-ui-react';
import JobService from '../services/JobService';

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    let jobService = new JobService();

    jobService
      .getJobs()
      .then((result) => setJobs(result.data.data), [])
      .catch();
  }, []);

  return (
    <div>
      <Table celled padded color='grey' inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Postion</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Number of Empty Position</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Created date</Table.HeaderCell>
            <Table.HeaderCell>Deadline</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobs.map((job) => (
            <Table.Row key={job.id} textAlign='center'>
              <Table.Cell>
                <Header as='h2' textAlign='center' class='ui white'>
                  {job.positionName}
                </Header>
              </Table.Cell>
              <Table.Cell singleLine>{job.companyName}</Table.Cell>
              <Table.Cell>
                {job.numberOfEmptyPositions == null
                  ? '0'
                  : job.numberOfEmptyPositions}
              </Table.Cell>
              <Table.Cell singleLine>{job.cityName}</Table.Cell>
              <Table.Cell>{job.createdDate}</Table.Cell>
              <Table.Cell>{job.deadLine}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
