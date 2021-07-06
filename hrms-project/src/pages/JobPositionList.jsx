import React, {useEffect, useState} from 'react';
import {Table, Header} from 'semantic-ui-react';
import JobPositionService from '../services/JobPositionService';

export default function JobPositionList() {
  const [jobPositions, setJobPositions] = useState([]);
  useEffect(() => {
    let jobPositionService = new JobPositionService();

    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data))
      .catch();
  });

  return (
    <div>
      <Table celled padded inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Position Name</Table.HeaderCell>
            <Table.HeaderCell>Id of Position</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {jobPositions.map((jobPosition) => (
            <Table.Row key={jobPosition.id}>
              <Table.Cell>
                <Header as='h2' textAlign='center' className='ui white'>
                  {jobPosition.position_name}
                </Header>
              </Table.Cell>
              <Table.Cell singleLine textAlign='center'>
                {jobPosition.id}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
