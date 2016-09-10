import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BarraPesquisa from './BarraPesquisa';

class App extends Component {
  render() {
    return (
		<div className="navbar">
			<h1>To-Do-list</h1>
				
				<nav>
					<BarraPesquisa />
				</nav>
			
			
		</div>
    );
  }
}

export default App;
