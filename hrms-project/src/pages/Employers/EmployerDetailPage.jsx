import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Table, Header, Grid, Segment,Icon, Label, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import EmployerService from '../../services/EmployerService';

export default function EmployerDetailPage() {
    const { employerId } = useParams()
    // const history = useHistory();
    const [employer, setEmployer] = useState({})
    useEffect(() => {
        let employerService = new EmployerService();
        employerService.getEmployerById(employerId).then((result) => setEmployer(result.data.data)).catch()

    }, [employerId])

    return (
        <Grid >
            <Grid.Row>
                <Grid.Column computer={12}>
                    {employer.webSites?.length < 1 ? null :
                        <Grid.Row className="marginBottomMedium">
                            <Grid.Column computer={16}>
                                <Segment.Group>
                                    <Segment vertical color="pink" padded="very" secondary rounded="true" stacked>
                                        <Label attached='top' color="pink" basic><Header color="pink" as="h3">COMPANY</Header></Label>
                                        <Table basic="very" textAlign='center' striped>
                                            <Table.Header>
                                                <Table.Row>
                                                    <Table.HeaderCell ><Icon size="large" name="building outline"/>Company</Table.HeaderCell>
                                                    <Table.HeaderCell ><Icon name="desktop"/> Website</Table.HeaderCell>
                                                </Table.Row>
                                            </Table.Header>
                                            <Table.Body>
                                                <Table.Row>
                                                    <Table.Cell>
                                                        <Header as='h4' image>

                                                            <Header.Content>
                                                                {employer.companyName}
                                                                <Header.Subheader>{}</Header.Subheader>
                                                            </Header.Content>
                                                        </Header>
                                                    </Table.Cell>
                                                    <Table.Cell ><Header as="h4" color="pink">{employer.webSites}</Header></Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>
                                    </Segment>
                                </Segment.Group>
                            </Grid.Column>
                        </Grid.Row>
                    }

                    {employer.webSites?.length < 1 ? null :
                        <Grid.Row className="marginBottomMedium">
                            <Grid.Column computer={16}>
                                <Segment.Group>
                                    <Segment vertical color="pink" padded="very" secondary rounded="true" stacked>
                                        <Label attached='top' color="pink" basic><Header color="pink" as="h3">OFFERS</Header></Label>
                                        <Table basic="very" textAlign='center' striped>
                                            <Table.Header>
                                                <Table.Row>
                                                    <Table.HeaderCell ><Icon size="large" name="building outline"/>BETA</Table.HeaderCell>
                                                    <Table.HeaderCell ><Icon name="desktop"/> BETA</Table.HeaderCell>
                                                </Table.Row>
                                            </Table.Header>
                                            <Table.Body>
                                                <Table.Row>
                                                    <Table.Cell>
                                                        <Header as='h4' image>

                                                            <Header.Content>
                                                                BETA
                                                                <Header.Subheader>BETA</Header.Subheader>
                                                            </Header.Content>
                                                        </Header>
                                                    </Table.Cell>
                                                    <Table.Cell ><Header as="h4" color="pink">BETA</Header></Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>
                                    </Segment>
                                </Segment.Group>
                            </Grid.Column>
                        </Grid.Row>
                    }

                </Grid.Column>
                <Grid.Column computer={4}>
                    <Segment.Group>
                        <Segment vertical color="pink" padded="very" secondary rounded="true" stacked>
                            <Label attached='top' color="pink" basic><Header color="pink" as="h3">CONTACT</Header></Label>
                            <Header as="h4">{employer.user?.email}</Header>
                            <Divider horizontal>
                                <div class='ui pointing red basic label'>Email</div>
                            </Divider>
                            <Header as="h4">{employer.phone}</Header>
                            <Divider horizontal>
                                <div class='ui pointing green basic label'>Phone Number</div>
                            </Divider>
                            
                        </Segment>
                    </Segment.Group>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}