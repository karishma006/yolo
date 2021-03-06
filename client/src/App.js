import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import ActivityDetailsPage from './pages/ActivityDetails/ActivityDetails';
import ActivityReviewsPage from './pages/ActivityReviews/ActivityReviews';
import UserBucketPage from './pages/UserBucket/UserBucket';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/activities/:activityId' exact component={ActivityDetailsPage}/>
        <Route path='/activities/:activityId/reviews' component={ActivityReviewsPage}/>
        <Route path='/mybucket' component={UserBucketPage}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;