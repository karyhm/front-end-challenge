import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Summary from './components/Summary/Summary';
import SidebarLeft from './components/Sidebar/SidebarLeft';

class App extends Component {
  render() {
    return (
      <div className="App">
				<Navbar />
				<Summary />
				<div className="row">
					<div className="col col-md-3">
						<SidebarLeft />
					</div>
					<div className="col md-auto">

					</div>
				</div>

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
      </div>
    );
  }
}

export default App;
