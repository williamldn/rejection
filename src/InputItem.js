import React from 'react'

export default function InputItem(props) {
    return (
        <div className="input-item">
			<label 
				htmlFor={props.id} 
				className="input-item__label"
			>
				{props.name} 
			</label>
			<input 
				type={props.type} 
				id={props.id} 
				placeholder={props.placeholder} 
				className="input-item__type"
				name={props.id}
				onChange={props.onChange}
				value={props.value}
			/>
		</div>
    )
}