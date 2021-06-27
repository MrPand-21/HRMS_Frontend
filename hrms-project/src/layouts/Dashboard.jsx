import React from 'react'
import ChoosingSignInMethod from '../pages/ChoosingSignInMethod'
import ChoosingSignUpMethod from '../pages/ChoosingSignUpMethod'
import EmployerList from '../pages/EmployerList'
import JobList from '../pages/JobList'
import JobPositionList from '../pages/JobPositionList'
import JobSeekerList from '../pages/JobSeekerList'
import SignInModal from '../pages/SignInPage'
import { Route } from 'react-router'

export default function Dashboard() {
    return (
        <div id="content-area">
            <Route exact path="/" component={JobList}/>
            <Route exact path="/jobs" component={JobList}/>
            <Route path="/signIn" component={ChoosingSignInMethod}/>
            <Route path="/signUp" component={ChoosingSignUpMethod}/>
        </div>
    )
}
