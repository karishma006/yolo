import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path='/' exact component={HomePage}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;