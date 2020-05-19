import React, {useState} from 'react';
import './App.css';
import QuestionBox from './QuestionBox';
import ScoreBox from './ScoreBox';
import TabBox from './TabBox';

function getEntries () {
	const entries = [];
	for (var i = localStorage.length - 1; i >= 0; i--) {
		entries.push(
			JSON.parse(localStorage.getItem(localStorage.key(i)))
		);
	}

	return entries;
}

function calculateStore (entries) {
	const entriesFilter = entries.filter(({status}) => status);
	const total = entriesFilter.reduce((prev, {status}) => {
		if (status === "rejected") {
			return prev + 10;
		} else {
			return prev + 1;
		}
		
	}, 0);
	return total;
}	

function App() {
	const [numEntries, setNumEntries] = useState(localStorage.length - 1);
	const handleChangeEntries = (numEntries) => {
		setNumEntries(numEntries);
	}
  	return (
	    <div className="App">
	        <h1 className='header'>Rejection!</h1>
	        <div className="scores-container">
	    	   	<ScoreBox  
					name="Store"
					value={calculateStore(getEntries())}
	    	   	/>
	    	   	<ScoreBox  
					name="Streak"
					value="5 days"
	    	   	/>			
	        </div>
	        <div className="question-container">
	    		<QuestionBox 
					onChangeNumEntries={handleChangeEntries}
	    		/>
	        </div>
			<div className="tab-container">
				<TabBox 
					entries={getEntries()}
					onChangeNumEntries={handleChangeEntries}
				/>
			</div>
	    </div>
  	);
}

export default App;
