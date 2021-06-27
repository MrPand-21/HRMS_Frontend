import React, { useState, useParams } from 'react';
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

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
          Home
          <Menu.Menu>
            <Menu.Item
              name='add'
              >
              Add
            </Menu.Item>
            <Menu.Item
              name='about'
              >
              Remove
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
