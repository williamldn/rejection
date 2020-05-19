import React from 'react'
import TabItem from './TabItem';
import List from './List';
import ListItem from './ListItem';


const answered = ({status}) => status;
const unanswered = ({status}) => !status;
const mapListItems = ({id, question, askee, status}) => {
	return (
		<ListItem 
			key={id}
			question={question}
			askee={askee}
			status={status}
		/>
	);
}
const items = [answered, unanswered];

export default function TabBox(props) {

	function listItem(fnFilter, fnMap) {
		return (props.entries
			.filter(fnFilter)
			.map(fnMap) 
		);
	}

	const tabItems = items.map(test => {
		return (
			<TabItem>
				<List>
					{listItem(test, mapListItems)}
				</List>
			</TabItem>
		);
	});
	return (
		<div className="tab-box">
			{tabItems}
		</div>
	)
}