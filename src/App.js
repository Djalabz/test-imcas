import './App.css';
import Lists from './components/Lists'
import Feedback from './components/Feedback'
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';



function App() {
  
return (
  <Router>
    <div className="App">
      <Switch>
      <Route path='/' exact component={Lists}/>
      <Route path='/feedback/:id' component={Feedback}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
