import AOS from "aos";
import { lazy, Suspense } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// CSS Component
import './App.css';

// UI Component Goes Here
const HomePage = lazy(() => import("./pages/index")); 

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 80,
            duration: 1000,
            once: true,
            easing: "ease",
    });
    AOS.refresh();
  }, []);
  return (
    <Router>
      <Suspense fallback={<p>Loading</p>}>
        <Switch>
          <Route
            path={'/'}
            exact
            component={HomePage}
            />
        </Switch>
      </Suspense>
    </Router>
  )
}
export default App;
