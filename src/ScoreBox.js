import React from 'react'

export default class ScoreBox extends React.Component {
	render () {
		return (
			<div className="score-box">
				<p className="score__title">
					{this.props.name}
				</p>
				<hr className='score__hr' />
				<p className="score__content">
					{this.props.value}
				</p>
			</div>
		);
	}
}