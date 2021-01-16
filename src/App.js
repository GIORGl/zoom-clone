import './App.css';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import Chat from './Components/Chat/Chat';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
            {/* <Route path='/' exact component={Header} /> */}
        <Route path='/' exact component={Body} />
        <Route path='/chat'  component={Chat} />
        </Switch>
       </Router>
    
    </div>
  );
}

export default App;
