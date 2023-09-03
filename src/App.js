// import logo from "./logo.svg";
// import Button from "./lib/components/Button";
import "./App.scss";
import Hero from "./lib/components/Hero";
import Button from "./lib/components/Button";
import Callout from "./lib/components/Callout";
import Footer from "./lib/components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dribbble App - Design System</h1>
      </header>
      <main className="App-main">
        <div className="container">
          <h2>Button</h2>
          <p>
            Callouts combine panels and alerts into one generic container
            component. You can put any kind of content inside.
          </p>
          <Button label="This is a Button" />
          <hr className="hr" />
          <h2>Callout</h2>
          <p>
            Callouts combine panels and alerts into one generic container
            component. You can put any kind of content inside.
          </p>
          <Callout
            heading="This is a Callout"
            blurb="It has an easy to override visual style, and is appropriately subdued."
            url="www.yahoo.com"
            linkDescription="This is a link"
          />
          <hr className="hr" />
          <h2>Hero</h2>
          <p>
            Set the stage on your homepage with heroes that feature clear calls
            to action.
          </p>
          <Hero
            heading="This is a Hero"
            blurb="This is a simple blurb paragraph. The tinted background container expands depending on the amount of text placed within the Hero component."
          />
          <hr className="hr" />
          <h2>Footer</h2>
          <p>
            Attach a footer to the bottom of the viewport when page content is
            short.
          </p>
          <Footer label="This is a Footer" />
        </div>
      </main>
    </div>
  );
}

export default App;
