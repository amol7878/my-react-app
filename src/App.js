import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import MyComponentClass from './components/MyComponentClass';
import MyFr from './components/MyFr';
import MyCr from './components/MyCr';
import ComponentJSX from './components/ComponentJXS';
import Greet from './components/Greet';
import JsxR from './components/JsxR';
import PropRF from './components/PropRF';
import PropC from './components/PropC';
import Message from './components/Message';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import Greet4 from './components/Greet4';
import Pract from './components/PractCr';
import EventBind from './components/EventBind';
import ParentC from './components/ParentC';
import ParentPr from './components/ParentPr';
import PractPr from './components/PractPr';
import UserGreeting from './components/UserGreeting';
import Namelist from './components/Nameslist';
import Namelist2 from './components/Namelist2';
import Namelist3 from './components/Pract1C';
import Stylesheet from './components/Stylesheet';
import Inline from './components/InlineStyle';
import './components/appStyle.css'
import style from './components/appStyle.module.css'
import MyStyleR from './components/MyStyleR';
import InlineR from './components/InlineR'
import styleT from './components/MyStyleR.module.css'
function App() {
  return (
    <div className="App">
      <h1 className='five'>Amol</h1>
      <h1 className={styleT.eight}>Amol</h1>
<InlineR/>
      <MyStyleR nm="six" />

      {/* <h1 className='red'>Hello</h1>
      <h1 className={style.green}>Hello</h1>
      <Inline/> */}
      {/* <Stylesheet name="two"/> */}
      {/* <Namelist3></Namelist3> */}
      {/* <Namelist2></Namelist2> */}
      {/* <Namelist></Namelist> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <PractPr></PractPr> */}
      {/* <ParentPr></ParentPr> */}
      {/* <ParentC></ParentC>       */}
      {/* <EventBind></EventBind> */}
      {/* <Greet4 name="Amol" lastName="Shinde"></Greet4> */}
      {/* <Counter2></Counter2> */}
      {/* <Counter></Counter> */}
      {/* <Message></Message> */}
      {/* <MyComponent/>
      <MyComponentClass/>
      <MyFr/>
      <MyCr/>
       <ComponentJSX/>
      <Greet name="chinmay" lastName="Deshpande"></Greet>
      <Greet name="Shirish" lastName="'Dani"></Greet>
      <Greet name="Ram" lastName="Joshi"></Greet>
      <JsxR/>
      <PropRF name="chinmay" lastName="deshpande">
       <p>This Is The Children Element</p>
      </PropRF>
      <PropRF name="Sarika" lastName="Pansare"></PropRF>
      <PropRF name="Amol"  lastName="Shinde"></PropRF>
      <PropC firtsName="Poorva" lastName="vyas"></PropC> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React In Minskole
          
        </a>
      </header> */}
    </div>
  );
}

export default App;
