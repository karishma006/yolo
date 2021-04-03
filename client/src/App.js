import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import ActivityDetailsPage from './pages/ActivityDetails/ActivityDetails';
import ActivityReviewsPage from './pages/ActivityReviews/ActivityReviews';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/activities/:activityId' exact component={ActivityDetailsPage}/>
        <Route path='/activities/:activityId/reviews' component={ActivityReviewsPage}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;