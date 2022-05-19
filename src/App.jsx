import AOS from "aos";
import { lazy, Suspense } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// CSS Component
import "aos/dist/aos.css";
import "./assets/css/plugins/animate.css";
import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";
import './assets/scss/style.scss';
import PrivacyPolicyPage from "./pagegroups/privacy-policy";
// import Navbar from "./containers/common/navbar";

// UI Component Goes Here
const HomePage = lazy(() => import("./pagegroups/home"));
const BusinessPage = lazy(() => import("./pagegroups/business"));
const CollaboratorsPage = lazy(() => import("./pagegroups/collaborators"));
const CommercialPage = lazy(() => import("./pagegroups/commercial"));
const MediaNetworkPage = lazy(() => import("./pagegroups/medianetwork"));
const EducationTeachingPage = lazy(() => import("./pagegroups/educationandteaching"));
const PartnersPage = lazy(() => import("./pagegroups/partners"));


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
          <Route
            path={'/business'}
            exact
            component={BusinessPage}
          />
          <Route
            path={'/media_network'}
            exact
            component={MediaNetworkPage}
          />
          <Route
            path={'/education_and_teaching'}
            exact
            component={EducationTeachingPage}
          />
          <Route
            path={'/collaborators'}
            exact
            component={CollaboratorsPage}   
          />
          <Route
            path={'/partners'}
            exact
            component={PartnersPage}   
          />
          <Route
            path={'/commercial'}
            exact
            component={CommercialPage}   
          />
          <Route
            path={'/privacy_policy'}
            exact
            component={PrivacyPolicyPage}   
          />

        </Switch>
      </Suspense>
    </Router>
  )
}
export default App;