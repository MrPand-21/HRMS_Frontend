import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
// import {  useHistory } from 'react-router';
import { Table, Header, Grid, Segment, Image, Card, Label, Divider } from 'semantic-ui-react';
import JobSeekerService from '../../services/JobSeekerService'

export default function JobSeekerDetail() {

    const { jobSeekerId } = useParams()
    // const history = useHistory();
    const [jobSeeker, setJobSeeker] = useState({})
    useEffect(() => {
        let jobSeekerService = new JobSeekerService();
        jobSeekerService.getJobSeekerById(jobSeekerId).then((result) => setJobSeeker(result.data.data)).catch()

    }, [jobSeekerId])


    return (
        <Grid className="jobSeekerDetail">
            <Grid.Row >
                <Grid.Column computer={16}>
                    <Segment.Group>
                        <Segment vertical color="red" padded="very" secondary rounded="true" stacked>
                            <Grid compact="true">
                                <Grid.Row>
                                    <Grid.Column computer={16}>
                                        <Image src="https://react.semantic-ui.com/images/wireframe/square-image.png" size="normal" floated="left" verticalAlign='bottom' circular />
                                        <Grid compact="true">
                                            <Grid.Row>
                                                <Grid.Column computer={16}>
                                                    <Header as="h1" floated="left" content={jobSeeker.firstName + " " + jobSeeker.lastName} subheader={jobSeeker.user?.email} dividing />
                                                </Grid.Column>
                                            </Grid.Row>
                                            <Grid.Row >
                                                <Grid.Column computer={6} textAlign="justified">
                                                    {!!jobSeeker.info ? <p className="left floated">{jobSeeker.info}</p> : <p className="left floated">There is no informaiton about {jobSeeker.firstName + " " + jobSeeker.lastName}...</p>}
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                    </Segment.Group>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column computer={12}>
                    {jobSeeker.attendedSchools?.length === 0 ? null :
                        <Grid.Row className="marginBottomMedium">
                            <Grid.Column computer={16} >
                                <Segment.Group>
                                    <Segment vertical color="red" padded="very" secondary rounded="true" stacked>
                                        <Label attached='top' basic color="red" ><Header color="red" as="h3">EDUCATION</Header></Label>
                                        <Card.Group centered itsPerRow={6}>
                                            {jobSeeker.attendedSchools?.map((school) =>

                                                <Card key={school.id} color="pink">
                                                    <Card.Content>
                                                        <Card.Header>{school.school.schoolName}</Card.Header>
                                                        <Card.Meta>{school.dateOfStarting} - {school.dateOfGraduation}</Card.Meta>
                                                        <Card.Description>

                                                        </Card.Description>
                                                    </Card.Content>
                                                </Card>
                                            )}
                                        </Card.Group>
                                    </Segment>
                                </Segment.Group>
                            </Grid.Column>
                        </Grid.Row>
                    }
                    {jobSeeker.languages?.length === 0 ? null :
                        <Grid.Row className="marginBottomMedium">
                            <Grid.Column computer={16}>
                                <Segment.Group>
                                    <Segment vertical color="red" padded="very" secondary rounded="true" stacked>
                                        <Label attached='top' color="red" basic><Header color="red" as="h3">FOREIGN LANGUAGE</Header></Label>
                                        <Table basic="very" textAlign='center' striped>
                                            <Table.Header>
                                                <Table.Row>
                                                    <Table.HeaderCell >Language Name</Table.HeaderCell>
                                                    <Table.HeaderCell>Level</Table.HeaderCell>
                                                </Table.Row>
                                            </Table.Header>
                                            <Table.Body>
                                                {jobSeeker.languages?.map((language) =>
                                                    <Table.Row key={language.id}>
                                                        <Table.Cell>
                                                            <Header as='h4' image>

                                                                <Header.Content>
                                                                    {language.languageName}
                                                                    <Header.Subheader>{language.languageLevel.levelDescription}</Header.Subheader>
                                                                </Header.Content>
                                                            </Header>
                                                        </Table.Cell>
                                                        <Table.Cell >{language.languageLevel.id}</Table.Cell>
                                                    </Table.Row>
                                                )}
                                            </Table.Body>
                                        </Table>
                                    </Segment>
                                </Segment.Group>
                            </Grid.Column>
                        </Grid.Row>
                    }
                    {jobSeeker.workExperiences?.length === 0 ? null :
                        <Grid.Row className="marginBottomMedium">
                            <Grid.Column computer={16} >
                                <Segment.Group>
                                    <Segment vertical color="red" padded="very" secondary rounded="true" stacked>
                                        <Label attached='top' color="red" basic><Header color="red" as="h3">WORK EXPERIENCE</Header></Label>
                                        <Card.Group centered itsPerRow={6}>
                                            {jobSeeker.workExperiences?.map((experience) =>
                                                <Card key={experience.id} color="pink">
                                                    <Card.Content>
                                                        <Card.Header>{experience.workplaceName}</Card.Header>
                                                        <Card.Meta>{experience.startingDate} - {experience.quitDate}</Card.Meta>
                                                        <Card.Description>
                                                            {experience.jobPosition.position_name}
                                                        </Card.Description>
                                                    </Card.Content>
                                                </Card>
                                            )}
                                        </Card.Group>
                                    </Segment>
                                </Segment.Group>
                            </Grid.Column>
                        </Grid.Row>
                    }
                </Grid.Column>
                <Grid.Column computer={4}>
                    <Segment.Group>
                        <Segment vertical color="red" padded="very" secondary rounded="true" stacked>
                            <Label attached='top' color="red" basic><Header color="red" as="h3">CONTACT</Header></Label>
                            <Header as="h4">{jobSeeker.user?.email}</Header>
                            <Divider horizontal>
                                <div class='ui pointing red basic label'>Email</div>
                            </Divider>
                            <Header as="h4">{jobSeeker.linkedInAccount}</Header>
                            <Divider horizontal>
                                <div class='ui pointing teal basic label'>LinkedIn</div>
                            </Divider>
                            <Header as="h4">{jobSeeker.githubAccount}</Header>
                            <Divider horizontal>
                                <div class='ui pointing black basic label'>Github</div>
                            </Divider>
                        </Segment>
                    </Segment.Group>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
