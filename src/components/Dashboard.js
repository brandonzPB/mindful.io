import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Link, Route, Redirect } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useContext(UserContext);

  const [infoState, setInfoState] = useState({ open: true });

  if (!user.accessToken) {
    return (
      <Route exact path="/dashboard">
        <Redirect to="/" />
      </Route>
    )
  }

  const showInfo = () => {
    setInfoState({
      ...infoState,
      open: true
    });
  }

  const hideInfo = () => {
    setInfoState({
      ...infoState,
      open: false
    });
  }

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-top-text">
        {
          user.entries > 0
            ? `Welcome back, ${user.firstName} :)`
            : `Welcome ${user.firstName} :)`
        }
      </h1>
      <h1 className="dashboard-top-text-info">
        {
          user.entries > 0
            ? `You've completed ${user.entries} mindfulness entries so far. Keep up the good work!`
            : ``
        }
      </h1>

      {
        infoState.open
          ? <div className="info-container">
            <button className="info-btn" onClick={hideInfo}>Hide Info</button>
            
            <span className="dashboard-text">
              <a 
                href="https://www.mindful.org/meditation/mindfulness-getting-started/" 
                target="_blank" rel="noreferrer">
                  What is mindfulness?
              </a>
            </span>
            
            <span className="dashboard-text">
              <a href="https://positivepsychology.com/benefits-of-mindfulness/" target="_blank" rel="noreferrer">What are all the benefits of mindfulness?</a>
            </span>
            <span className="dashboard-text">
              <a href="https://greatergood.berkeley.edu/article/item/five_ways_mindfulness_meditation_is_good_for_your_health" target="_blank" rel="noreferrer">
                More research-based benefits of mindfulness
              </a>
            </span>

            <span className="dashboard-text">
              <a href="https://www.helpguide.org/harvard/benefits-of-mindfulness.htm#:~:text=Mindfulness%20improves%20physical%20health.&text=Mindfulness%20can%3A%20help%20relieve%20stress,sleep%2C%20and%20alleviate%20gastrointestinal%20difficulties."
                target="_blank" rel="noreferrer">
                  A more thorough explanation and guide to mindfulness: its benefits, techniques, and exercises
              </a>
            </span>

            
            <span className="dashboard-text">Why meditate?</span>
            <span className="dashboard-text">
              Basically, it's the same reason someone exercises or follows a healthy diet.
              Instead of getting physically stronger or feeling healthier,
              you gain more control and awareness over your own life. Over time, you become more peaceful,
              regardless of what is going on around you and in your body. Like anything worthwhile and long-lasting,
              it may take a bit of time for you to initially see results.
              But all it takes for you to achieve true peace is to sit quietly for however much time you can dedicate in a given day.
              Who wouldn't want that?
            </span>
          </div>
          : <div className="info-btn-container">
            <button className="info-btn" onClick={showInfo}>Show info</button>
          </div>
      }

      <span className="dashboard-header">Guided Meditation Links</span>
      <Link to="/videos">
        <p className="dashboard-text-link">
          View Recommended Videos
        </p>
      </Link>

      <Link to="/apps">
        <p className="dashboard-text-link">
          View Recommended Apps
        </p>
      </Link>

      <span className="dashboard-header">Don't want a guided meditation today?</span>
      <Link to="/timer">
        <p className="dashboard-text-link">
          Go to Meditation Timer
        </p>
      </Link>
      
      <span className="dashboard-header">Already meditated? Answer a question to...</span>
      <Link to="/entry">
        <p className="dashboard-text-link">
          Boost your Mindfulness
        </p>
      </Link>
    </div>
  );
}

export default Dashboard;
