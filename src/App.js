import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Post from "./components/Post";
import Account from "./components/Account";
import Messages from "./components/Messages";
import Chat from "./components/Chat";
import New from "./components/New";

const MainApp = styled.div``;

function App() {
   
    return (
        <Router>
            <MainApp>
                <div style={{ marginBottom: "80px" }}>
                    <Header />

                    <Switch>
                        <Route exact path="/" />
                        <Route exact path="/account/new" />
                        <Route exact path="/account" component={Account} />
                        <Route exact path="/listing" component={Post} />
                        <Route exact path="/listing/new" />
                        <Route path='/messages' exact component={Messages}/>
                        <Route path='/chat' exact component={Chat}/>
                        <Route path='/new-chat' exaxt component={New}/>
                    </Switch>

                    <Navigation />
                </div>
            </MainApp>
        </Router>
    );
}

export default App;
