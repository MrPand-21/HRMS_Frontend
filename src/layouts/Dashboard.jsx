import React from 'react'

import ChoosingSignInMethod from '../pages/ChoosingSignInMethod'
import ChoosingSignUpMethod from '../pages/ChoosingSignUpMethod'
import EmployerList from '../pages/Employers/EmployerList'
import JobList from '../pages/Jobs/JobList'
import JobPositionList from '../pages/JobPositionList'
import JobSeekerList from '../pages/JobSeekers/JobSeekerList'
import { Route } from 'react-router'
import EmployerSignUpPage from '../pages/Employers/EmployerSignUpPage'
import JobAddPage from '../pages/Employers/JobAddPage'
import SystemUserSignUpPage from '../pages/SystemUsers/SystemUserSignUpPage'
import JobConfirmationPanel from '../pages/SystemUsers/JobConfirmationPanel'
import JobSeekerSignUpPage from '../pages/JobSeekers/JobSeekerSignUpPage'
import MainPage from '../pages/MainPage'
import JobSeekerDetail from '../pages/JobSeekers/JobSeekerDetail'
import { ToastContainer } from "react-toastify";
import EmployerDetailPage from '../pages/Employers/EmployerDetailPage'
import JobDetailPage from '../pages/Jobs/JobDetailPage'

export default function Dashboard() {
    return (
        <div id="content-area">
            <ToastContainer position="bottom-right"/>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/home" component={MainPage} />
            <Route exact path="/jobs" component={JobList} />
            <Route exact path="/jobs/:jobId" component={JobDetailPage} />
            <Route path="/signIn" component={ChoosingSignInMethod} />
            <Route path="/signIn/Employer" component={JobList} />
            <Route path="/signup" component={ChoosingSignUpMethod} />
            <Route path="/signup/employer" component={EmployerSignUpPage} />
            <Route path="/signup/systemuser" component={SystemUserSignUpPage} />
            <Route path="/employer/:employerId" component={JobAddPage} />
            <Route path="/systemuser/:systemUserId" component={JobConfirmationPanel} />
            <Route path="/signup/jobseeker" component={JobSeekerSignUpPage} />
            <Route exact path="/employers" component={EmployerList} />
            <Route exact path="/employers/:employerId" component={EmployerDetailPage} />
            <Route exact path="/jobseekers" component={JobSeekerList} />
            <Route exact path="/jobseekers/:jobSeekerId" component={JobSeekerDetail} />
            <Route exact path="/jobpositions" component={JobPositionList} />
        </div>
    )
}
