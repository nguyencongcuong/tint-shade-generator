import React from 'react';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import DoneIcon from '@material-ui/icons/Done';

function Color(props) {

	const handleClick = () => {
		let copyText = document.getElementById(props.id).innerHTML
		let copyIcon = document.getElementById(`${props.id}-copy`)
		let checkIcon = document.getElementById(`${props.id}-check`)
		copyIcon.classList.toggle("hidden")
		checkIcon.classList.toggle("hidden")
		setTimeout(() => {
			copyIcon.classList.toggle("hidden")
			checkIcon.classList.toggle("hidden")
		}, 1000)
		navigator.clipboard.writeText(`#${copyText}`)
	}

	return (
		<React.Fragment>
			<div>
				<div className="aspect-w-1 aspect-h-1" style={{ background: props.color }}>

					<button
						className="opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer text-white"
						onClick={() => handleClick()}>
						<span id={`${props.id}-copy`} className=""><FileCopyOutlinedIcon /></span>
						<span id={`${props.id}-check`} className="hidden"><DoneIcon /></span>
					</button>

				</div>

				<div
					id={props.id}
					className="text-xs text-center uppercase py-2 ">
					{props.code}
				</div>

			</div>
		</React.Fragment>
	)
}

export default Color
