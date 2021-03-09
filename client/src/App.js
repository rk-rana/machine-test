import './App.css';
import EnrollStudent from '../src/components/enrollStudent'
import Home from '../src/components/home'
import editStudent from './components/editStudent'
import showStudent from './components/showStudent'


import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      
        <Route exact path="/enroll" component={EnrollStudent} />
        <Route exact path="/" component = {Home}/>
        <Route exact path="/editStudent" component = {editStudent}/> 
        <Route exact path="/showStudent" component = {showStudent}/> 
        
        
    </Router>
    

  );
}

export default App;
