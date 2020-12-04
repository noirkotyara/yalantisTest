import logo from './logo.svg';
import './App.css';
import { NavLink, Route, Router } from 'react-router-dom';
import EmployeesContainer from './Components/EmployeesContainer';

function App() {
  
  return (
    <div>
      <header className="App-header">
     <span><img src={logo} className="App-logo" alt="logo" /><NavLink to='/employees' className='navLink' activeClassName='activeNavLink'>
          EMPLOYEES
        </NavLink></span>
        

      </header>
      <div className='content'>
        {/* Click to the 'employees' to start */}
        <Route path='/employees' render={() => <EmployeesContainer />} />
      </div>
    </div>
  );
}

export default App;
