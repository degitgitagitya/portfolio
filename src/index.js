// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import createBrowserHistory from "history/createBrowserHistory";
// import App from "./components/App";
// import Jokes from "./components/Jokes";
// import Header from "./components/Header";
// import MusicMaster from "./projects/music-master";
// import "./index.css";

// ReactDOM.render(
//   <Router>
//     <Switch>
//       <Route exact path="/">
//         <App />
//       </Route>

//       {/* <Route
//           path="/music-master"
//           render={() => (
//             <Header>
//               <MusicMaster />
//             </Header>
//           )}
//         /> */}
//     </Switch>
//   </Router>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./components/App";
import Jokes from "./components/Jokes";
import Header from "./components/Header";
import MusicMaster from "./projects/music-master";
import "./index.css";

ReactDOM.render(
  <Router>
    <Header></Header>
    <Switch>
      <Route path="/jokes">
        <Jokes />
      </Route>
      <Route path="/music-master">
        <MusicMaster />
      </Route>
      <Route exact path="/">
        <App />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
