import './App.css';
import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';
import {Grid} from 'semantic-ui-react';
import Footer from './layouts/Footer';



function App() {
  return (
    <div className='App jobSeekerDetail'>
        <Grid >
          <Grid.Row computer={16} >
            <Grid.Column computer={3} id="menu">
              <Navi />
            </Grid.Column>
            <Grid.Column computer={13} >
              <Dashboard />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Footer/>
    </div>
  );
}

export default App;
