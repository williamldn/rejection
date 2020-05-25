import React from 'react'
import TabItem from './TabItem';
import List from './List';
import ListItem from './ListItem';
import Card from './Card';

const deleteIcon = (
	<svg className="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		<path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
		<path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd"/>
	</svg>
);

const answered = ({status}) => status;
const unanswered = ({status}) => !status;
const mapListItems = ({id, question, askee, status, timestamp}) => {
	const content = {
		title:question,
		subtitle:askee,
		supporting:timestamp,
		icons:[{value:deleteIcon}],
	}

	if (!status) {
		content.buttons = [
			{value:'acepted'},
			{value:'rejected'},
		]
	}
	
	console.log('id/2',id/2)
	return (
		<ListItem key={id/2}>
			<Card 
				key={id}
				content={content}
			/>
		</ListItem>
	);
}
const items = [answered, unanswered];

export default function TabBox(props) {

	function listItems(fnFilter, fnMap) {
		return (props.entries
			.filter(fnFilter)
			.map(fnMap) 
		);
	}

	const tabItems = items.map(test => {
		return (
			<TabItem>
				<List>
					{listItems(test, mapListItems)}
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