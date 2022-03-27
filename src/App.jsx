import AOS from "aos";
import { lazy, Suspense } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// CSS Component
import "aos/dist/aos.css";
import "./assets/css/plugins/animate.css";
import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";
import './App.scss';

// UI Component Goes Here
const HomePage = lazy(() => import("./pagegroups/home")); 

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