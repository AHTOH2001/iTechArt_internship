import React from 'react';
import './App.css';
import HomePage from './components/pages/homepage/homepage.component'
import {Route} from 'react-router-dom'

const TopicsList = () => (<div><h1>Topics list</h1></div>)
const TopicDetail = (props) => (<div><h1>Topics detail {props.match.params.topicId}</h1></div>)

function App() {
    return (
        <div className="App">
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/topics' component={TopicsList}/>
            <Route exact path='/topics/:topicId' component={TopicDetail}/>
        </div>
    );
}

export default App;
