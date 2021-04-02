import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import ActivityDetailsPage from './pages/ActivityDetails/ActivityDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/activities' component={ActivityDetailsPage}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;