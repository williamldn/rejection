import React from 'react'


function date (timestamp) {
	return (new Date(parseInt(timestamp))).toLocaleString();
}

export default function ListItem(props) {
	return (
		<div className="list-item">
			{props.children}		
		</div>
	)
}