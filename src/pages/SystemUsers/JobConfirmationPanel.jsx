import React, {useEffect, useState} from 'react';
import JobService from '../../services/JobService';
import ActivationPanelService from '../../services/ActivationPanelService';
import {
  Button,
  Checkbox,
  Segment,
  Table,
  Header,
  Icon,
  Input,
} from 'semantic-ui-react';
import {useParams} from 'react-router-dom';

export default function JobConfirmationPanel() {

  let jobService = new JobService();
  let activationPanelService = new ActivationPanelService();
  let {systemUserId} = useParams();

  const [unapprovedJobs, setUnapprovedJobs] = useState([]);
  useEffect(() => {
    let jobService = new JobService();
    jobService
      .getUnapprovedJobs()
      .then((result) => {
        setUnapprovedJobs(result.data.data);
      })
      .catch();
  }, []);

  const [approvedJobs, setApprovedJobs] = useState([]);
  useEffect(() => {
    let jobService = new JobService();
    jobService
      .getApprovedJobs()
      .then((result) => {
        setApprovedJobs(result.data.data);
      })
      .catch();
  }, []);

  function handleOnClickApprove() {
    unapprovedJobs.forEach((job) => {
      if (document.getElementById(job.id.toString() + 'checkbox').checked) {
        let panelForJob = {};
        panelForJob.jobId = job.id;
        panelForJob.detail = document.getElementById('detailInput').value;
        panelForJob.systemUserId = systemUserId;
        activationPanelService.setApproved(panelForJob);
      }
    });
    window.location.reload();
  }
  function handleOnClickApproveAll() {
    unapprovedJobs.forEach((job) => {
      let panelForJob = {};
      panelForJob.jobId = job.id;
      panelForJob.detail = document.getElementById('detailInput').value;
      panelForJob.systemUserId = systemUserId;
      activationPanelService.setApproved(panelForJob);
    });
    window.location.reload();
  }
  function handleOnClickDelete() {
    unapprovedJobs.forEach((job) => {
      if (document.getElementById(job.id.toString() + 'checkbox').checked) {
        jobService.deleteJob(job.id);
      }
    });
    window.location.reload();
  }
  function handleOnClickUnapprove() {
    approvedJobs.forEach((job) => {
      if (document.getElementById(job.id.toString() + 'checkbox').checked) {
        let panelForJob = {};
        panelForJob.jobId = job.id;
        panelForJob.detail = document.getElementById('detailInput').value;
        panelForJob.systemUserId = systemUserId;
        activationPanelService.setUnapproved(panelForJob);
      }
    });
    window.location.reload();
  }
  

  return (
    <div>
      <Segment.Group>
        <Segment color='orange' textAlign='center' padded='very'>
          <Header>
            Jobs Pending Approval <Icon name='history' />
          </Header>
        </Segment>
        <Segment.Group>
          <Segment textAlign='center'>
            <Table celled compact definition>
              <Table.Header fullWidth>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell>Company Name</Table.HeaderCell>
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
                {unapprovedJobs.map((job) => (
                  <Table.Row key={job.id}>
                    <Table.Cell collapsing>
                      <Checkbox toggle id={job.id.toString() + 'checkbox'} />
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
                      size='small'
                      onClick={handleOnClickDelete}>
                      <Icon name='delete' /> Decline
                    </Button>
                    <Button
                      size='small'
                      positive
                      onClick={handleOnClickApprove}>
                      Approve
                    </Button>
                    <Button
                      size='small'
                      color='linkedin'
                      onClick={handleOnClickApproveAll}>
                      Approve All
                    </Button>
                    <Input
                      transparent
                      id='detailInput'
                      placeholder='Detail...'
                      icon='thumbtack'
                      iconPosition='left'
                    />
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </Segment>
        </Segment.Group>
      </Segment.Group>

      <Segment.Group>
        <Segment color='orange' textAlign='center' padded='very'>
          <Header>
          Approved Jobs<Icon name='check' />
          </Header>
        </Segment>
        <Segment.Group>
          <Segment textAlign='center'>
            <Table celled compact definition>
              <Table.Header fullWidth>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell>Company Name</Table.HeaderCell>
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
                {approvedJobs.map((job) => (
                  <Table.Row key={job.id}>
                    <Table.Cell collapsing>
                      <Checkbox toggle id={job.id.toString() + 'checkbox'} />
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
                      size='small'
                      onClick={handleOnClickDelete}>
                      <Icon name='delete' /> Delete
                    </Button>
                    <Button
                      size='small'
                      color="orange"
                      inverted
                      onClick={handleOnClickUnapprove}>
                      Unapprove
                    </Button>
                    <Input
                      transparent
                      id='detailInput'
                      placeholder='Detail...'
                      icon='thumbtack'
                      iconPosition='left'
                    />
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </Segment>
        </Segment.Group>
      </Segment.Group>
    </div>
  );
}
