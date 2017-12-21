import React, { Component } from 'react';
import logo from './logo.gif';
import './App.css';
import CodeEditor from './containers/CodeEditor';
import { PropTypes } from 'prop-types';

class App extends Component {

  render() {
    const { hasParseResult } = this.props;
    return (
      <div className={`App ${hasParseResult && 'with-result'}`}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{!hasParseResult && 'Bienvenido a '}Lexxer</h1>
        </header>
        <p className="App-intro">
          Aplicación generadora basada en gramáticas ANTLR4
        </p>
        <div className="code-editor-container">
          <CodeEditor></CodeEditor>
        </div>
        
        <div className="Footer">
        </div>
      </div>
    );
  }
}

App.propTypes = {
  hasParseResult: PropTypes.bool,
}

export default App;
