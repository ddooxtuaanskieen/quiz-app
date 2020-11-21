import React from 'react';
import './App.css';
import Qna from './components/Qna';
import QnaProvider from './providers/QnaProvider';

function App() {
  return (
    <QnaProvider>
      <div className="App">
        <Qna></Qna>
      </div>
    </QnaProvider>
  );
}

export default App;
