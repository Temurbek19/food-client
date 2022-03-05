import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Sidebar from './containers/Sidebar';

import HomePage from './pages/HomePage';
import HourPage from './pages/HourPage';
import BolakPage from './pages/BolakPage';
import MassagePage from './pages/MassagePage';
import AlertPage from './pages/AlertPage';
import SettingsPage from './pages/SettingsPage';
import OutPage from './pages/OutPage';

import './assets/main.scss';

function App() {
  return (
    <Router>
      <div className="block">
        <Sidebar/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/bolakPage" component={BolakPage}/>
          <Route exact path="/settingsPage" component={SettingsPage}/>
          <Route exact path="/hourPage" component={HourPage}/>
          <Route exact path="/massagePage" component={MassagePage}/>
          <Route exact path="/alertPage" component={AlertPage}/>
          <Route exact path="/outPage" component={OutPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
