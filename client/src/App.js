import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
      </Switch>
    </BrowserRouter>
  );
};

export default App;