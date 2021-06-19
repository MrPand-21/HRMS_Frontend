import React from 'react';
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react'
import SlideBar from './SlideBar';

export default function Navi() {
  return (
    <div>
      <Menu vertical id="menu" inverted>
        <Menu.Item>
          <Input placeholder='Search...' />
        </Menu.Item>

        <Menu.Item>
          Home
          <Menu.Menu>
            <Menu.Item
              name='search'
              >
              Search
            </Menu.Item>
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
          <SlideBar/>
        </Menu.Item>
        <Menu.Item id="menu-blank">
          
        </Menu.Item>


      </Menu>
    </div>
  );
}
