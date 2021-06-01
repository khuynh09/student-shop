import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Messages from "./components/Messages";
import Chat from "./components/Chat";
import New from "./components/New";


const MainApp = styled.div``;

function App() {
   
    return (
        <Router>
            <MainApp>
                <Header />

                <Switch>
                    <Route exact path="/" />
                    <Route exact path="/account/new" />
                    <Route exact path="/account" />
                    <Route exact path="/listing/new" />
                    <Route path='/messages' exact component={Messages}/>
                    <Route path='/chat' exact component={Chat}/>
                    <Route path='/new-chat' exaxt component={New}/>
                </Switch>

                <Navigation />
            </MainApp>
        </Router>
    );
}

export default App;
