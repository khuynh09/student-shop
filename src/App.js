import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import CreateListing from "./components/CreateListing";
import Post from "./components/Post";
import Homepage from "./Homepage";
import Account from "./components/Account";
import Messages from "./components/Messages";
import Chat from "./components/Chat";
import New from "./components/New";

const MainApp = styled.div``;

function App() {
    return (
        <Router>
            <MainApp>
                <div style={{ marginBottom: "80px", marginTop: "80px" }}>
                    <Header />

                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route exact path="/account/new" />
                        <Route exact path="/account" component={Account} />
                        <Route exact path="/listing/:postId" component={Post} />
                        <Route
                            exact
                            path="/listing/new"
                            component={CreateListing}
                        />
                        <Route path="/messages" exact component={Messages} />
                        <Route path="/chat" exact component={Chat} />
                        <Route path="/new-chat" exaxt component={New} />
                    </Switch>

                    <Navigation />
                </div>
            </MainApp>
        </Router>
    );
}

export default App;
