import React, {useEffect, useState} from 'react';
import JobService from '../services/JobService';
import {Button, Checkbox, Segment, Table, Header, Icon} from 'semantic-ui-react';

export default function JobConfirmationPanel() {

  let selectedItems = [];

  const addToList = (id)=>{
    if (selectedItems.includes(id) == false) {
      selectedItems.push(id);
      console.log('a')
    }else{
      selectedItems.splice(selectedItems.indexOf(id),1)
    }
  }

  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    let jobService = new JobService();
    console.log(selectedItems)
    jobService
      .getUnapprovedJobs()
      .then((result) => {
        setJobs(result.data.data);
      })
      .catch();
  }, []);
  console.log(jobs + "a");
  return (
    <Segment.Group>
      <Segment color='orange' textAlign='center' padded='very'>
        <Header>Jobs Pending Approval <Icon name='history' /></Header>
      </Segment>
      <Segment.Group>
        <Segment textAlign='center'>
          <Table celled compact definition>
            <Table.Header fullWidth>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell >Company Name</Table.HeaderCell>
                <Table.HeaderCell>Job Position</Table.HeaderCell>
                <Table.HeaderCell>City</Table.HeaderCell>
                <Table.HeaderCell>Salary</Table.HeaderCell>
                <Table.HeaderCell>Work Place</Table.HeaderCell>
                <Table.HeaderCell>Work Time</Table.HeaderCell>
                <Table.HeaderCell>DeadLine</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {jobs.map((job) => (
                <Table.Row key={job.id}>
                  <Table.Cell collapsing>
                    <Checkbox toggle />
                  </Table.Cell>

                  <Table.Cell>
                    <Header>{job.companyName}</Header>
                  </Table.Cell>
                  <Table.Cell>{job.positionName}</Table.Cell>
                  <Table.Cell>{job.cityName}</Table.Cell>
                  <Table.Cell>
                    {job.minimumSalary + '-' + job.maximumSalary}
                  </Table.Cell>
                  <Table.Cell>{job.workPlaceName}</Table.Cell>
                  <Table.Cell>{job.workTimeName}</Table.Cell>
                  <Table.Cell>{job.deadLine}</Table.Cell>
                  <Table.Cell>{job.description}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>

            <Table.Footer fullWidth>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell colSpan='9'>
                  <Button
                    floated='right'
                    icon
                    labelPosition='left'
                    negative
                    size='small'>
                    <Icon name='delete' /> Decline
                  </Button>
                  <Button size='small' positive >Approve</Button>
                  <Button size='small' color="linkedin" >Approve All</Button>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Segment>
      </Segment.Group>
    </Segment.Group>
  );

  console.log()
}
