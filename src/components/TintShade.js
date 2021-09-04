import React from 'react';
import Color from "./Color";
import {useEffect} from "react"
import { useSelector, useDispatch } from "react-redux";
import { setTintsAndShades } from "../redux/actions"
import { generateTintShade } from "../functions"

function TintShade() {

	const color = useSelector(state => state.color)
	const palette = useSelector(state => state.palette)
	const dispatch = useDispatch()
	const shades_tints = generateTintShade(color).map(e => "#" + e)

	useEffect(() => {
		dispatch(setTintsAndShades(shades_tints))
	}, [color])

	const shadeTint = () => shades_tints.map( (e, i) =>
		<Color
			key={i}
			id={`${e}-${i}`}
			color={e}
			code={`${e.slice(1)}`}
		/>
	)

	const colorCodeList = () => palette.map((a,b) => <li key={b} className="uppercase font-mono">{a}</li>)

	return (
		<React.Fragment>
			{shadeTint()}
			<section className="w-screen text-center bg-white p-4">
				<h2 className="font-bold uppercase p-4">Generated Hex List From Tints to Shades</h2>
				<ul>
					{colorCodeList()}
				</ul>
			</section>
		</React.Fragment>
	)
}

export default TintShade
