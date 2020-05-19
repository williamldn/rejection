import React from 'react'

export default function ListItem(props) {
	return (
		<div className="list-item">
			<div className="list-item__content">
				<p><strong>Question: </strong>{props.question}?</p>
				<p><strong>Askee: </strong>{props.askee}</p>
				<p><strong>Status: </strong>{props.status}</p>
				<hr />
			</div>
		</div>
	)
}