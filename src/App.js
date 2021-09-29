import { Btn } from "./components/Btn";
import "./style/style.css";
import "material-design-icons/iconfont/material-icons.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Nav } from "./components/Nav";
import { ExperiencePage } from "./pages/ExperiencePage";
import { ProjectsPage } from "./pages/ProjectsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="flex row start" id="app" style={{ flexWrap: "nowrap" }}>
        <div className="fixed-nav">
          <Nav />
        </div>

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/experience">
            <ExperiencePage />
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
