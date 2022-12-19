import logo from "./sun.png";
import "./App.css";
import Profile from "./Profile.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={"App-logo"} alt="logo" />
        <p>
          <code>
            Welcome to my first app! Feel free to scroll down to learn a little
            more about me. 😁
          </code>
        </p>
      </header>
      <Profile
        firstName={"Matt"}
        lastName={"Stetzer"}
        email={"mdstetzer@gmail.com"}
        occupation={"Intel Representative"}
        intrests={
          "Fitness, Esports, Chess, Community Events, and spending quality time with loved ones."
        }
        bio={
          "In December of 2021 I had a seizure and underwent emergency brain surgery to identify and combat multiple growths in my brain and lungs. While being bedridden on antibiotics for 4 months afterwards, I had a lot of time to think about what i wanted in life now that I'd had a close scrape with death. I realized that the most important things in my life are family and the pursuit of greatness in the form of helping inspire people to achieve their best in all aspects of life."
        }
        quote={
          '"When we give cheerfully and accept gratefully, everyone is blessed." - Maya Angelou'
        }
      />
    </div>
  );
}

export default App;
