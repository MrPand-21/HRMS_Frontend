import React, { useEffect, useState } from 'react'
import EmployerService from '../services/EmployerService'
import {Table, Header} from 'semantic-ui-react';

export default function EmployerList() {

    const [employers, setEmployers] = useState([])
    useEffect(() => {
        let employerService = new EmployerService();

        employerService.getEmployers().then((result) => setEmployers(result.data.data)).catch();
    }, [])

    return (
        <div>
        <Table celled padded color="black" inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell singleLine>Company Name</Table.HeaderCell>
              <Table.HeaderCell>Website(-s)</Table.HeaderCell>
              <Table.HeaderCell>Phone Number</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Joined Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>

          {employers.map(employer => (

            <Table.Row key={employer.id} textAlign='center'>
              <Table.Cell>
                <Header as='h2' textAlign='center' className="ui white" id="white-employername" >
                  {employer.companyName}
                </Header>
              </Table.Cell>
              <Table.Cell singleLine>{employer.webSites}</Table.Cell>
              <Table.Cell singleLine>{employer.phone}</Table.Cell>
              <Table.Cell singleLine>{employer.user.email}</Table.Cell>
              <Table.Cell singleLine>{employer.user.createdDate}</Table.Cell>

            </Table.Row>
          ))}
          </Table.Body>
        </Table>
      </div>
    )
}
