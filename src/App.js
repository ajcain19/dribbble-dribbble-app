// import logo from "./logo.svg";
import "./App.scss";
// import Button from "./lib/components/Button";
import Hero from "./lib/components/Hero";
import Callout from "./lib/components/Callout";
import Footer from "./lib/components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero heading="My Name is Jean Jean" blurb="And I Am DANCE!" />
        <Callout
          heading="This is a Callout"
          blurb="It has an easy to override visual style, and is appropriately subdued."
          url="www.yahoo.com"
          linkDescription="This is a link"
        />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <Footer />
    </div>
  );
}

export default App;
