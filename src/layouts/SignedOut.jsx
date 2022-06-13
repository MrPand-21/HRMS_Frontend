import React from 'react';
// import { useState } from 'react';
import {Button} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'

export default function SignedOutSignedOut(params) {

    // const [signUpOrIn, setSignUpOrIn] = useState()



  return (
    <div>
      <Button.Group  >
        <Button inverted color="blue" as={NavLink} to={"/signUp"}>Sign Up</Button>
        <Button.Or />
        <Button as={NavLink} to={"/signIn"} inverted color="teal" >Sign In</Button>
      </Button.Group>
    </div>
  );
}
