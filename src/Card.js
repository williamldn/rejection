import React from 'react'

export default function Card(props) {
	
	
	const heading = function () {
		let element = '';
		if (props.heading) {
			if (props.heading.title) {
				element.push(
					<div className="card__thumbnail">
						<img src={props.heading.thumb} alt=""/>
					</div>
				);
			}

			if (props.heading.title) {
				element.push(
					<p className="card__title">
						{props.heading.title}
					</p>
				);
			}

			if (props.heading.subtitle) {
				element.push(
					<p className="card__subtitle">
						{props.heading.subtitle}
					</p>
				);
			}

		}

		return element; 
	}

	const media = function () {
		let element = '';
		if (props.media) {
			element = (
				<div className="card__media">
					<img src={props.media.src} alt={props.media.alt}/>
				</div>
			);
		}

		return element; 
	}

	const content = function () {
		let element = [];
		if (props.content) {
			if (props.content.thumb) {
				element.push(
					<div className="card__thumbnail">
						<img src={props.content.thumb} alt=""/>
					</div>
				);
			}

			if (props.content.title) {
				element.push(
					<p className="card__title">
						{props.content.title}
					</p>
				);
			}

			if (props.content.subtitle) {
				element.push(
					<p className="card__subtitle">
						{props.content.subtitle}
						
						{}
					</p>
				);
			}

			if (props.content.supporting) {
				element.push(
					<p className="card__supporting">
						{props.content.supporting}
					</p>
				);
			}

			if (props.content.buttons) {
				props.content.buttons.forEach(({value, handle, classNames}) => {
					element.push(
						<button
							key={Date.now() / 2} 
							className={classNames}
							onClick={handle}
						>
							{value}
						</button>
					);
				});
			}
			if (props.content.icons) {
				props.content.icons.forEach(({value, handle, classNames}) => {
					element.push(<button
						key={Date.now()} 
						className={classNames}
						onClick={handle}
					>
						{value}
					</button>
					)
				});
			}

		}
		
		
		
		return element; 
	}
	
	return (
		<div className="card">
			<div className="card__content">
				{content()}
			</div>
			
		</div>
	)
}