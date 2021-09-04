import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getColor } from "../redux/actions"
import { randomHex } from "../functions"
import Option from "./Option"
import {MdColorLens, MdColorize, MdFormatColorText} from "react-icons/md"
import {GiClick} from "react-icons/gi"

function Randomizer(props) {
	const color = useSelector(state => state.color)
	const dispatch = useDispatch()
	return (
		<div
			className="bg-min-9 w-full h-full flex justify-center items-center text-white text-4xl cursor-pointer"
			onClick={() => dispatch(getColor(randomHex()))}
		>
			<span className="animate-pulse"><GiClick /></span>
		</div>
	)
}

function Picker(props) {
	const color = useSelector(state => state.color)
	const dispatch = useDispatch()
	return (
		<input
			name="picker"
			type="color"
			value={color}
			onChange={(e) => dispatch(getColor(e.target.value))}
			style={{ background: `${color}` }}
			className={`w-full h-full`}
		/>
	)
}

function HexInput(props) {
	const color = useSelector(state => state.color)
	const dispatch = useDispatch()
	return (
		<input
			name="color-picker-2"
			type="text"
			value={color}
			onChange={(e) => dispatch(getColor(e.target.value))}
			className="border-2 border-gray-300 text-gray-600 uppercase focus:outline-none px-4"
		/>
	)
}

function ColorInput() {

	return (
		<React.Fragment>
			<section className="grid grid-cols-1 lg:grid-cols-3">

				<Option
					icon={<MdColorLens />}
					name="Random"
					node={<Randomizer />}
				/>

				<Option
					icon={<MdColorize />}
					name="Picker"
					node={<Picker />}
				/>

				<Option
					icon={<MdFormatColorText />}
					name="Hex"
					node={<HexInput />}
				/>

			</section>
		</React.Fragment>
	)
}

export default ColorInput
