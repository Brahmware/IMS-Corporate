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
// import Navbar from "./containers/common/navbar";

// UI Component Goes Here
import LoadingPage from "./pagegroups/loading-page";
import { Redirect } from "react-router-dom";
const HomePage = lazy(() => import("./pagegroups/home"));
const BusinessPage = lazy(() => import("./pagegroups/business"));
const CollaboratorsPage = lazy(() => import("./pagegroups/collaborators"));
const CommercialPage = lazy(() => import("./pagegroups/commercial"));
const MediaNetworkPage = lazy(() => import("./pagegroups/medianetwork"));
const EducationTeachingPage = lazy(() => import("./pagegroups/educationandteaching"));
const PartnersPage = lazy(() => import("./pagegroups/partners"));
const JoinPage = lazy(() => import("./pagegroups/join"));
const PrivacyPolicyPage = lazy(() => import("./pagegroups/privacy-policy"));


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
            <Suspense fallback={<LoadingPage />}>
                <Switch>
                    <Route
                        path={'/'}
                        exact
                        component={HomePage}
                    />
                    <Route
                        path={'/business'}
                        component={BusinessPage}
                    />
                    <Route
                        path={'/media_network'}
                        component={MediaNetworkPage}
                    />
                    <Route
                        path={'/education_and_teaching'}
                        component={EducationTeachingPage}
                    />
                    <Route
                        path={'/collaborators'}
                        component={CollaboratorsPage}
                    />
                    <Route
                        path={'/partners'}
                        component={PartnersPage}
                    />
                    <Route
                        path={'/commercial'}
                        component={CommercialPage}
                    />
                    <Route
                        path={'/privacy_policy'}
                        component={PrivacyPolicyPage}
                    />
                    <Route
                        path={'/join'}
                        exact
                        component={JoinPage}
                    />
                    <Route path={'/*'}>
                        <Redirect to={'/'} />
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    )
}
export default App;