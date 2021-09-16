
import './App.css';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import FullName from './Components/Profile/FullName';
import Address from './Components/Profile/Address';
import Cv from './Components/Profile/Cv';

function App() {
  return (
    <div className="App">
     <ProfilePhoto />
     <hr />
     <FullName />
     <hr />
     <Address />
     <hr />
     <Cv />
    </div>
  );
}

export default App;
