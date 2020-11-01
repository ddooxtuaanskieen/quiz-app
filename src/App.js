import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import QnaProvider from './providers/QnaProvider'
import Qna from './components/Qna'
import Result from './components/Result'
import './App.css'

let result = () => <Result></Result>
let quiz = () => <QnaProvider>
  <div className="App">
    <Qna></Qna>
  </div>
</QnaProvider>

function App() {
  return (
    <Router>
      <Route path="/" exact component={quiz} />
      <Route path="/result" component={result} />
    </Router>

  );
}

export default App;
