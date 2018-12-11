import React, { Component } from 'react';

import { Header } from './shared/Header';
import { RentalList } from './components/rental/RentalList';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<div className="container">
					<div className="container">
						<RentalList />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
