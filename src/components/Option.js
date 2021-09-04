import React from 'react';

function Option(props) {
	return (
		<div className="grid grid-cols-12 justify-center items-stretch bg-white rounded m-2">
			<div className="col-span-2 py-4 flex justify-center items-center bg-min-1 h-full">{props.icon}</div>
			<div className="col-span-4 py-4 flex justify-center items-center bg-min-0 h-full">{props.name}</div>
			<div className="col-span-6 bg-min-5 aspect-w-4 lg:aspect-w-3 aspect-h-1 flex justify-center items-center">{props.node}</div>
		</div>
	)
}

export default Option
