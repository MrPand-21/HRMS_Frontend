import React from 'react'
import ChoosingSignInMethod from '../pages/ChoosingSignInMethod'
import ChoosingSignUpMethod from '../pages/ChoosingSignUpMethod'
import EmployerList from '../pages/EmployerList'
import JobList from '../pages/JobList'
import JobPositionList from '../pages/JobPositionList'
import JobSeekerList from '../pages/JobSeekerList'
import { Route } from 'react-router'
import EmployerSignUpPage from '../pages/EmployerSignUpPage'
import JobAddPage from '../pages/JobAddPage'

export default function Dashboard() {
    return (
        <div id="content-area">
            <Route exact path="/" component={JobList}/>
            <Route exact path="/jobs" component={JobList}/>
            <Route path="/signIn" component={ChoosingSignInMethod}/>
            <Route path="/signIn/Employer" component={JobList}/>
            <Route path="/signUp" component={ChoosingSignUpMethod}/>
            <Route path="/signUp/Employer" component={EmployerSignUpPage}/>
            <Route path="/employer/:employerId" component={JobAddPage}/>
            <Route exact path="/employers" component={EmployerList}/>
            <Route exact path="/jobSeekers" component={JobSeekerList}/>
            <Route exact path="/jobPositions" component={JobPositionList}/>
            <Route exact path="/jobs" component={JobList}/>
        </div>
    )
}
