import React from 'react'
import EmployerList from '../pages/EmployerList'
import JobList from '../pages/JobList'
import JobPositionList from '../pages/JobPositionList'
import JobSeekerList from '../pages/JobSeekerList'
import SlideBar from './SlideBar'

export default function Dashboard() {
    return (
        <div id="content-area">
            <SlideBar/>
            <JobList/>
        </div>
    )
}
