import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages//about/about.jsx";
import Jobs from "./pages//jobs/jobs.jsx";
import Landing from "./pages/landing/landing.jsx";
import NavBar from "./components/navbar/navbar";
import MockJobs from "./assets/mockjobs";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <NavBar />

//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/jobs">
//             <Jobs jobs={[{ company: "Amazon", title: "Frontend Developer", salary: "$25000-$35000", description: "fsdf sdfsdgsg sefsef! dsfsdfs rsgrdgs sdfsdfsdf" }, { company: "Netflix", title: "DevOps Engineer", salary: "$55000-$75000",  description: "fsdf sdfsdgsg sefsef! dsfsdfs rsgrdgs sdfsdfsdf" }]} />
//           </Route>
//           <Route path="/">
//             <Landing />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/jobs">
            <Jobs jobs={MockJobs()} />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
