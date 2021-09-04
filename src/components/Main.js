import React from 'react';
import TintShade from "./TintShade";
import Picker from "./Picker";
import Color from "./Color";

import {useSelector} from "react-redux"

function Main() {

	const originColor = useSelector(state => state.color)

	return (
		<main className="grid grid-cols-10">

			<div className="col-span-10 flex justify-center items-center mb-8">
				<Picker />
			</div>

			<div className="grid grid-cols-5 lg:grid-cols-10 col-span-10">

				<TintShade />

			</div>

		</main>
	)
}

export default Main
