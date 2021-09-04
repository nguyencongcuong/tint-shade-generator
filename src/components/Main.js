import React from 'react';
import TintShade from "./TintShade";
import Picker from "./Picker";

function Main() {

	return (
		<main className="grid grid-cols-12">
			<div className="col-span-12">
				<Picker />
			</div>
			<div className="col-span-12 grid grid-cols-3 md:grid-cols-9">
				<TintShade />
			</div>
		</main>
	)
}

export default Main
