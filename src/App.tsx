import React from 'react'
import './App.css'

// Components
import Header from './Containers/Header/Header.container'
import Grid from './Containers/Grid/Grid.container'

const App: React.FC = () => (
	<div className="App">
		<Header />
		<Grid />
	</div>
)

export default App
