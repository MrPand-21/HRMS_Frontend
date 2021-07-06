import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { Table, Header, Button, Icon, Input, Grid, Segment, Image, Label, Divider,Container } from 'semantic-ui-react';
import JobSeekerService from '../services/JobSeekerService'

export default function JobSeekerDetail() {

    const { jobSeekerId } = useParams()

    const history = useHistory();
    const [jobSeeker, setJobSeeker] = useState({})
    useEffect(() => {
        let jobSeekerService = new JobSeekerService();

        jobSeekerService.getJobSeekerById(jobSeekerId).then((result) => setJobSeeker(result.data.data)).catch()
    }, [])

    console.log(jobSeeker)

    return (
        <div>
            <Grid className="jobSeekerDetail">
                <Grid.Row>
                    <Grid.Column computer={16}>
                        <Segment.Group>
                            <Segment vertical color="grey" padded="very" secondary rounded stacked>
                                <Grid compact>
                                    <Grid.Row>
                                       
                                        <Grid.Column computer={16}>
                                            <Image src="https://react.semantic-ui.com/images/wireframe/square-image.png" size="normal" floated="left" verticalAlign='bottom' circular />
                                            <Grid compact>
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
                <Container text>
                <Grid.Row>
                        <Grid.Column computer={16}>
                            <Segment vertical  padded secondary rounded stacked>
                               <Input ></Input>
                            </Segment>
                        </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                <Grid.Column computer={16}>
                            <Segment vertical  padded secondary rounded stacked>
                               <Input ></Input>
                            </Segment>
                        </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                <Grid.Column computer={16}>
                            <Segment vertical  padded secondary rounded stacked>
                               <Input ></Input>
                            </Segment>
                        </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                <Grid.Column computer={16}>
                            <Segment vertical  padded secondary rounded stacked>
                               <Input ></Input>
                            </Segment>
                        </Grid.Column>
                </Grid.Row>
                <Grid.Row>

                </Grid.Row>

                </Container>
            </Grid>
        </div>
    )
}
