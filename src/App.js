
import React from "react";
import './App.css';
import Header from './components/Header'
import Dashboard from './components/Dashboard'
// import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <React.Fragment>
      <main className="container">
        <Header />
        <Dashboard />
      </main>
    </React.Fragment>
  );
}

export default App;