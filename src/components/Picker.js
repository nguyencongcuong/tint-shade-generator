import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getColor } from "../redux/actions"
import { randomHex } from "../functions"

function Button(props) {
	return (
		<button
			className="bg-white text-gray-600 border-4 border-gray-600 px-4 py-2 m-1 hover:bg-gray-600 hover:text-gray-50 transition-all duration-1000"
			onClick={props.action}
		>
			{props.children}
		</button>
	)
}

function ColorInput() {

	const color = useSelector(state => state.color)
	const dispatch = useDispatch()

	return (
		<React.Fragment>
			<section className="p-8">

				<div className="grid grid-cols-1 lg:grid-cols-3">

					<Button action={() => dispatch(getColor(randomHex()))}>
						Random
					</Button>

					<Button name="Pick">
						<label className="flex flex-col justify-center items-center">
							Pick:
							<input
								name="color-picker-1"
								type="color"
								value={color}
								onChange={(e) => dispatch(getColor(e.target.value))}
								className={`bg-transparent w-12 h-12 mt-2`}
							/>
						</label>
					</Button>

					<Button>
						<label className="flex flex-col justify-start items-center">
							Enter hex:
							<input
								name="color-picker-2"
								type="text"
								value={color}
								onChange={(e) => dispatch(getColor(e.target.value))}
								className="border-2 border-gray-300 text-gray-600 uppercase mt-2"
							/>
						</label>
					</Button>

				</div>
			</section>
		</React.Fragment>
	)
}

export default ColorInput
