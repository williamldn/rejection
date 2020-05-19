import React from 'react';
import InputItem from './InputItem';
import StatusBox from './StatusBox';
export default class QuestionBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			questionStatus: null, // null , acepted o rejected
			content: {
				question: '',
				askee: '',
			},
			error: null,
		}

		this.handleValueChange = this.handleValueChange.bind(this);
		this.handleQuestionStatus = this.handleQuestionStatus
														.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}

	handleValueChange (event) {
		const content = Object.assign({} ,this.state.content);
		if (event.target.name === "question") {
			content.question = event.target.value;
		} else {
			content.askee = event.target.value;
		}
		this.setState({content});
	}

	handleQuestionStatus (target) {
		let questionStatus = this.state.questionStatus;
		questionStatus = questionStatus === target ? null : target;
		this.setState({
			questionStatus,
		});
	}

	handleSave (event) {
		const content = Object.assign({} ,this.state.content);
		let questionStatus = this.state.questionStatus;
		if (content.question && content.askee) {
			
			let date = Date.now().toString();
			localStorage.setItem(date, JSON.stringify({
				id: date,
				timestamp: date,
				question: content.question,
				askee: content.askee,
				status: questionStatus
			}));
			
		}
		content.question = ''; content.askee = ''; 
		questionStatus = null;
		this.setState({
			content,
			questionStatus,
		})
		this.props.onChangeNumEntries(localStorage.length - 1);
	}

	render() {
		return (
			<div className="question-box">
				<InputItem 
					id="question"
					name="Question: "
					placeholder="What did you ask?"
					onChange={this.handleValueChange}
					value={this.state.content.question}
				/>
				<InputItem 
					id="askee"
					name="Askee: "
					placeholder="Who did you ask?"
					onChange={this.handleValueChange}
					value={this.state.content.askee}
				/>
				<StatusBox 
					checked={this.state.questionStatus}
					onClick={this.handleQuestionStatus} 
				/>
				<div className="submit">
					<button 
						className='btn' 
						onClick={this.handleSave}> Save </button>
				</div>
			</div>
		);
	}
}