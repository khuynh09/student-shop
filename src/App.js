import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Post from "./components/Post";
import Homepage from "./Homepage";

const MainApp = styled.div``;

function App() {
    return (
        <Router>
            <MainApp>
                <div style={{ marginBottom: "80px", marginTop:"80px" }}>
                    <Header />

                    <Switch>
                        <Route exact path="/" component={Homepage}/>
                        <Route exact path="/account/new" />
                        <Route exact path="/account" />
                        <Route exact path="/listing" component={Post} />
                        <Route exact path="/listing/new" />
                    </Switch>

                    <Navigation />
                </div>
            </MainApp>
        </Router>
    );
}

export default App;
