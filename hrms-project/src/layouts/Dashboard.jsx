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
import SystemUserSignUpPage from '../pages/SystemUserSignUpPage'
import JobConfirmationPanel from '../pages/JobConfirmationPanel'
import JobSeekerSignUpPage from '../pages/JobSeekerSignUpPage'
import MainPage from '../pages/MainPage'
import JobSeekerDetail from '../pages/JobSeekerDetail'
import { ToastContainer } from "react-toastify";

export default function Dashboard() {
    return (
        <div id="content-area">
            <ToastContainer position="bottom-right"/>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/home" component={MainPage} />
            <Route exact path="/jobs" component={JobList} />
            <Route path="/signIn" component={ChoosingSignInMethod} />
            <Route path="/signIn/Employer" component={JobList} />
            <Route path="/signup" component={ChoosingSignUpMethod} />
            <Route path="/signup/employer" component={EmployerSignUpPage} />
            <Route path="/signup/systemuser" component={SystemUserSignUpPage} />
            <Route path="/employer/:employerId" component={JobAddPage} />
            <Route path="/systemuser/:systemUserId" component={JobConfirmationPanel} />
            <Route path="/signup/jobseeker" component={JobSeekerSignUpPage} />
            <Route exact path="/employers" component={EmployerList} />
            <Route exact path="/jobseekers" component={JobSeekerList} />
            <Route exact path="/jobseekers/:jobSeekerId" component={JobSeekerDetail} />
            <Route exact path="/jobpositions" component={JobPositionList} />
        </div>
    )
}
