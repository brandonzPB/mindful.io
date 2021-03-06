import  React from 'react';
import { HashRouter, BrowserRouter, Route, } from 'react-router-dom';
import UserContextProvider from './contexts/UserContext';

import Welcome from './components/Welcome';
import CreateUser from './components/CreateUser';
import Terms from './components/Terms';
import LogoutButton from './components/LogoutButton';
import Settings from './components/Settings';

import Dashboard from './components/dashboard/Dashboard';
import RecVideos from './components/dashboard/RecVideos';
import RecApps from './components/dashboard/RecApps';
import Timer from './components/dashboard/Timer';
import EntryForm from './components/dashboard/EntryForm';
import Info from './components/dashboard/Info';

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <UserContextProvider>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/info" component={Info} />
          
          <Route exact path="/videos" component={RecVideos} />
          <Route exact path="/apps" component={RecApps} />
          <Route exact path="/timer" component={Timer} />
          <Route exact path="/entry" component={EntryForm} />
        </UserContextProvider>
      </div>
    </HashRouter>
  );
}

export default App;
