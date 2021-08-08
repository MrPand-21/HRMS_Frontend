import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
// import {  useHistory } from 'react-router';
import { Container, Header, Grid, Segment, List, Icon, Label, Card, Button, Divider } from 'semantic-ui-react';
import JobService from '../../services/JobService'
import EmployerService from '../../services/EmployerService'
import { Link } from 'react-router-dom';

export default function JobDetailPage() {
    const { jobId } = useParams()
    const [job, setJob] = useState({})
    const [employer, setEmployer] = useState({})

    useEffect(() => {
        let jobService = new JobService();
        jobService.getJobById(jobId).then((result) => setJob(result.data.data)).catch()
    }, [jobId])

    useEffect(() => {
        let employerService = new EmployerService();
        employerService.getEmployerById(job.employer?.id).then((result) => setEmployer(result.data.data))
    }, [job.employer?.id])
    console.log(employer)


    return (
        <Grid >
            <Grid.Row>
                <Grid.Column computer={11} mobile={16} tablet={16}>
                    <Segment.Group>
                        <Segment vertical color="blue" padded="very" secondary rounded="true" stacked>

                            <Header centered as="h1" dividing >
                                {job.jobPosition?.position_name}
                                <Header.Subheader >
                                    <Icon name="building" />{"Company Name : " + employer.companyName}
                                </Header.Subheader>
                            </Header>
                            <Grid>
                                <Grid.Column computer="5" mobile="16" tablet="4">
                                    <List>
                                        <List.Item className="marginBottom marginTopSmall">
                                            <List.Content>
                                                <List.Header>
                                                    <List.Icon name='users' />Number of empty positions
                                                </List.Header>
                                                <List.Description>
                                                    {job.empty_positions}
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>

                                        <List.Item className="marginBottomMedium">
                                            <List.Content>
                                                <List.Header>
                                                    <List.Icon name='money' />Min - Max salary
                                                </List.Header>
                                                <List.Description>
                                                    {job.minimumSalary} - {job.maximumSalary}
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>

                                        <List.Item className="marginBottomMedium">
                                            <List.Content>
                                                <List.Header>
                                                    <List.Icon name='hourglass half' />Deadline
                                                </List.Header>
                                                <List.Description>
                                                    {job.deadline}
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>

                                        <List.Item className="marginBottomMedium">
                                            <List.Content>
                                                <List.Header>
                                                    <List.Icon name='map marker alternate' />Location
                                                </List.Header>
                                                <List.Description>
                                                    {job.city?.cityName}
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>

                                        <List.Item className="marginBottomMedium">
                                            <List.Content>
                                                <List.Header>
                                                    <List.Icon name='suitcase' />Work Place
                                                </List.Header>
                                                <List.Description>
                                                    {job.workPlace?.workPlaceName}
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>

                                        <List.Item className="marginBottomMedium">
                                            <List.Content>
                                                <List.Header>
                                                    <List.Icon name='stopwatch' />Work Time
                                                </List.Header>
                                                <List.Description>
                                                    {job.workTime?.workTimeName}
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column computer="11" mobile="16" tablet="12">
                                    <Container textAlign='justified' className="marginTopSmall paddingRight">
                                        {job.description}
                                    </Container>
                                </Grid.Column>
                            </Grid>





                        </Segment>
                    </Segment.Group>


                </Grid.Column>
                <Grid.Column computer={5} mobile={16} tablet={16}>
                    <Segment.Group>
                        <Segment vertical color="teal" padded="very" secondary rounded="true" stacked>
                            <Label attached='top' color="teal" basic><Header color="teal" as="h3">CONTACT</Header></Label>


                            <Header as={"h3"}>
                                <Header.Content>
                                    {employer.companyName}
                                </Header.Content>
                                <Header.Subheader>
                                    {employer.user?.email}
                                </Header.Subheader>
                            </Header>

                            <Button animated as={Link} color="pink"  basic to={`/employers/${employer.id}`}>
                                <Button.Content visible>Go to infos</Button.Content>
                                <Button.Content hidden>
                                    <Icon name="id card outline" />
                                </Button.Content>
                            </Button>


                        </Segment>
                    </Segment.Group>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}