import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

import Homepage from "./Homepage";

const MainApp = styled.div``;

function App() {
    return (
        <Router>
            <MainApp>
                <Header />

                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/account/new" />
                    <Route exact path="/account" />
                    <Route exact path="/listing/new" />
                </Switch>

                <Navigation />
            </MainApp>
        </Router>
    );
}

export default App;
