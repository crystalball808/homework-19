import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Main from './components/Main'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="*">
          {localStorage.getItem("signed") ? <Redirect to="/main" /> : <Redirect to="/sign-in" />}
        </Route>
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/main" component={Main} />
      </Router>
    </div>
  );
}

export default App;
