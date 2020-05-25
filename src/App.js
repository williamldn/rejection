import React, {useState} from 'react';
import './App.css';
import QuestionBox from './QuestionBox';
import ScoreBox from './ScoreBox';
import TabBox from './TabBox';
import {getEntries, calculateStore, remRepeatingItems, countConsecItems} from './utils';

const srcEntries = localStorage;

const rejStreakTest = function rejectionStreakDaysTest(item, index, items) {
	const DAY = 86400000;
	const prev = items[index - 1];
	const {date, status} = item;
	if (status === 'rejected') {
    	if (!index) {
    		return 0;
    	}
    	else if (date === prev.date - DAY) {
    		return 1;
    	}
   	 	else {
   	 		return -1;
   	 	}
  	} else {
  		return -1;
  	}
}

const filterStreak = function filterEntryToDateAndStatus (source, index) {
	let {id, status} = JSON.parse(source.getItem(source.key(index)));
	let date = Date.parse((new Date(parseInt(id))).toLocaleDateString());
    return {date, status};
}



const filterEntries = (source, index) => {
 	return JSON.parse(source.getItem(source.key(index)));
} 
const fnSortEntries = (a, b) => b.id - a.id;
const fnSortStreak = (a, b) => b.date - a.date;

// generate an array with the date of the entries that were rejected
let rejEntries = getEntries(
						srcEntries, 
						filterEntries, 
						fnSortEntries
					)
					.filter(({status}) => {
						return status === "rejected";
					})
					.map(({id}) => {
						return Date.parse(
									(new Date(parseInt(id)))
									.toLocaleDateString());
					});
console.log("rejEntries", rejEntries);
// remove repeating elements
rejEntries = remRepeatingItems(rejEntries);

function testStreak (item, i, items) {
	const DAY = 86400000;
	const prev = items[i - 1];
	if (i === 0) {
			return true;
		} else if (item === prev + DAY) {
			return true
		} else {
			return false
	} 
}



function App() {
	const [numEntries, setNumEntries] = useState(localStorage.length - 1);
	const [streakDay, setStreakDay] = useState(0);
	const [lastStreakDay, setLastStreakDay] = useState(0);
	const handleChangeEntries = (numEntries) => {
		setNumEntries(numEntries);
	}
  	return (
	    <div className="App">
	        <h1 className='header'>Rejection!</h1>
	        <div className="scores-container">
	    	   	<ScoreBox  
					name="Store"
					value={calculateStore(getEntries(srcEntries, filterEntries))}
	    	   	/>
	    	   	<ScoreBox  
					name="Streak"
					value={countConsecItems(getEntries(
							srcEntries,
							filterStreak,
							fnSortStreak
						),
						rejStreakTest 
					)}
	    	   	/>			
	        </div>
	        <div className="question-container">
	    		<QuestionBox 
					onChangeNumEntries={handleChangeEntries}
	    		/>
	        </div>
			<div className="tab-container">
				<TabBox 
					entries={getEntries(srcEntries, filterEntries, fnSortEntries)}
					onChangeNumEntries={handleChangeEntries}
				/>
			</div>
	    </div>
  	);
}

export default App;
