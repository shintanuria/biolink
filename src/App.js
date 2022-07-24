import './App.css';
import Profile from './assets/pp.jpeg';
import Github from './assets/github-logo.png';
import Instgram from './assets/instagram-logo.png';
import Facebook from './assets/facebook-logo.png';


function App() {
  return (
    <div className="App">
        <header className='head'>
          <div className='profile'>
            <img src={Profile} alt="shinta cantik"  />
          </div>
          <h1><a href="https://www.instagram.com/shintanuria_41/">@shintanuria_41</a></h1>
        </header>
        <main>
          <ul>
            <li>
              <img src={Facebook} alt="github" width="30px" />
              <a href="/" alt="facebook">shinta_na</a>
            </li>
            <li>
              <img src={Instgram} alt="github" width="30px" />
              <a href="https://www.instagram.com/shintanuria_41/" alt="instagram">shintanuria_41</a>
            </li>
            <li>
              <img src={Github} alt="github" width="30px" />
              <a href="https://github.com/shintanuria/" alt="github">shintanuria</a>
            </li>
          </ul>
        </main>
    </div>
  );
}

export default App;
