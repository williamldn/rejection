import React from 'react'

export default class StatusBox extends React.Component {
	setChecked = (event) => {
		this.props.onClick(event.target.name)
	}

	render() {
		return (
			<div className="score-box">
				<p className="label">Status</p>
				<div className="checkbox">
					<button 
						className="btn acepted" 
						onClick={this.setChecked}
						name="acepted"
						data-checked={
							this.props.checked === "acepted" ?
							true : false
						}
					>
						Acepted
					</button>
					<button 
						className="btn rejected" 
						onClick={this.setChecked}
						name="rejected"
						data-checked={
							this.props.checked === "rejected" ?
							true : false
						}
					>Rejected</button>
				</div>
			</div>
		);
	}
}