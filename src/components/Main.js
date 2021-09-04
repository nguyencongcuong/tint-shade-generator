import React from 'react';
import TintShade from "./TintShade";
import Picker from "./Picker";
import Color from "./Color";

import {useSelector} from "react-redux"

function Main() {

	const originColor = useSelector(state => state.color)

	return (
		<main className="grid grid-cols-12">
			<div className="col-span-12"><Picker /></div>


			<div className="col-span-12 grid grid-cols-9">

				<TintShade />

			</div>

		</main>
	)
}

export default Main
