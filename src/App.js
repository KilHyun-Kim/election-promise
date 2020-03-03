import React, { Component } from "react";
import Router from "./Router";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;

// <Link to="/" />

// <map name="menuMap">
//   <Link to="/busan">
//     <area
//       id="area1"
//       shape="poly"
//       coords="358,441,352,434,373,421,381,428,386,427,390,416,425,391,430,401,411,430,385,438,373,432,367,445,354,446,353,446"
//     />
//   </Link>
//   <area
//     id="area2"
//     name="area2"
//     shape="poly"
//     coords="415,352,424,352,432,355,430,360,435,362,442,358,445,358,434,403,425,390,413,382,405,375,410,361"
//     href="https://google.com"
//     target="_blank"
//   />
//   <area
//     id="area3"
//     name="area3"
//     shape="poly"
//     coords="415,352,424,352,432,355,430,360,435,362,442,358,445,358,434,403,425,390,413,382,405,375,410,361"
//     href="https://google.com"
//     target="_blank"
//   />
//   <area
//     id="area3"
//     name="area3"
//     shape="poly"
//     coords="293,332,303,338,309,338,324,350,328,363,331,366,345,363,362,365,370,373,385,374,399,359,405,362,402,377,422,392,385,417,384,426,374,418,350,432,352,443,349,450,374,447,377,462,361,479,336,461,307,462,309,478,291,471,281,454,286,440,269,426,261,417,274,398,269,374,270,354,293,334"
//     href="https://google.com"
//     target="_blank"
//   />
// </map>
// <Route path="/" component={Basic} exact={true} />
// <Route path="/busan" component={Busan} exact={true} />
