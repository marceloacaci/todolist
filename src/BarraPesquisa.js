import React, { Component } from 'react';
import './BarraPesquisa.css';

class BarraPesquisa extends Component {
  render() {
    return (
		<div className="pesquisa">
			<form>
			<input type="text" name="Pesquisa" />
			</form>
			
		</div>
    );
  }
}

export default BarraPesquisa;
