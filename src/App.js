import logo from './logo.svg';
import './App.css';

import Nav from './Header/Navbar';

import Home from './Home/Home';

import { Datamenu } from './Menu/Datamenu';
import { Dataabout } from './About/Dataabout';
import Gallary from './Gallary/Gallary';
import Team from './Team/Team';
import { Contact } from './Contact/Contact';
import S_team from './S_team/S_team';

import { Foot } from './Footer/Footer';


function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Dataabout />
      <Datamenu />
      <Gallary />
      <Team />
      <Contact />
      <S_team />
      <Foot />
    </div>
  );
}

export default App;
