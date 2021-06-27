import React from 'react';
import {Button, Header} from 'semantic-ui-react';

export default function ChoosingSignUpMethod() {
  return (
    <div>
      <Header as='h2' textAlign='center' class='ui white'>
        Sign Up As a ...
      </Header>
      <Button.Group widths='3'>
        <Button>Job Seeker</Button>
        <Button>Employer</Button>
        <Button>System User</Button>
      </Button.Group>
    </div>
  );
}