import React from "react";
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <Helmet>
          <meta property="fb:app_id" content="277341966096239" />
          <html prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# game: http://ogp.me/ns/game#"></html>
          <meta property="og:type" content="game.achievement" />
          <meta property="og:title" content="Free Spins!" />
          <meta property="og:description" content="I just won Free Spins! Come join the adventure in LuckyLand Slots, where you can win real cash prizes!" />
          <meta property="og:image" content="https://play.luckylandslots.com/loader/facebook/assets/freespins.png" />
          <meta property="og:image:width" content="480" />
          <meta property="og:image:height" content="248" />
        </Helmet>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}

export default AppRouter;