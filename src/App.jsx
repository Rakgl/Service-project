import 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterComponent from './router/RouterComponent';
import './styles/main.scss';

const App = () => {
  return (
    <Router>
      <RouterComponent />
    </Router>
  );
};

export default App;