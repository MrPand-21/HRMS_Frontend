import React, { useState } from 'react';
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import {Link} from 'react-router-dom';

export default function Navi() {
  


  const [isAuthenticated, setIsAuthanticated] = useState(false)

  function handleSignOut(params) {
    setIsAuthanticated(false)
  }

  function handleSignIn(params) {
    setIsAuthanticated(true)
  }


  return (
    <div >
      
      <Menu size='large' vertical inverted >
        <Menu.Item >
          <Input placeholder='Search...' />
        </Menu.Item>

        <Menu.Item >
          <Link to='/' >Home</Link>
          <Menu.Menu>
            <Menu.Item
              name='jobs'
              >
              <Link to='/jobs' >Jobs</Link>
            </Menu.Item>
            <Menu.Item
              name='jobSeekers'
              >
              <Link to='/jobseekers' >Job Seekers</Link>
            </Menu.Item>
            <Menu.Item
              name='employers'
              >
              <Link to='/employers' >Employers</Link>
            </Menu.Item>
            <Menu.Item
              name='jobPositions'
              >
              <Link to='/jobpositions' >Job Positions</Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item
          name='browse'
          >
          <Icon name='grid layout' />
          Browse
        </Menu.Item>
        <Menu.Item
          name='messages'
          >
          Messages
        </Menu.Item>
        <Dropdown item text='More'>
          <Dropdown.Menu >
            <Dropdown.Item icon='edit' text='Edit Profile' />
            <Dropdown.Item icon='globe' text='Choose Language' />
            <Dropdown.Item icon='settings' text='Account Settings' />
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item >
          {isAuthenticated ? <SignedIn signedOut={handleSignOut}/> : <SignedOut signedIn={handleSignIn}/>}
        </Menu.Item>


      </Menu>
    </div>
  );
}
