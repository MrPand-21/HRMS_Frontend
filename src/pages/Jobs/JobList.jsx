import React, {useEffect, useState} from 'react';
import {Table, Header, Button, Icon} from 'semantic-ui-react';
import JobService from '../../services/JobService';
import { Link } from 'react-router-dom';

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    let jobService = new JobService();

    jobService
      .getApprovedJobs()
      .then((result) => setJobs(result.data.data))
      .catch();
  }, []);

  

  return (
    <div>
      <Table celled padded inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Postion</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Number of Empty Position</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Created date</Table.HeaderCell>
            <Table.HeaderCell>Deadline</Table.HeaderCell>
            <Table.HeaderCell>Other infos</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobs.map((job) => (
            <Table.Row key={job.id} textAlign='center'>
              <Table.Cell>
                <Header as='h2' inverted>
                  {job.positionName}
                </Header>
              </Table.Cell>
              <Table.Cell singleLine>{job.companyName}</Table.Cell>
              <Table.Cell>
                {job.number_of_empty_positions == null
                  ? '0'
                  : job.number_of_empty_positions}
              </Table.Cell>
              <Table.Cell singleLine>{job.cityName}</Table.Cell>
              <Table.Cell>{job.createdDate}</Table.Cell>
              <Table.Cell>{job.deadLine}</Table.Cell>
              <Table.Cell>
                <Button animated primary  basic inverted as={Link} to={`/jobs/${job.id}`}>
                  <Button.Content  visible>Go to Detail<Icon name="right arrow" /></Button.Content>
                  <Button.Content hidden>
                    <Icon name="file alternate" />
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
