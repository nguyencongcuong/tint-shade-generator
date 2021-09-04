import React from 'react'

function Header() {
	return (
		<header className="font-bold uppercase text-2xl w-screen">
			<div className="flex flex-wrap justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-min-0 text-4xl text-center p-8">
				<span className="bg-min-0 text-min-9 rounded px-3 py-1 mx-4 my-3">Tint</span>&
				<span className="bg-min-9 text-min-0 rounded px-3 py-1 mx-4 my-2">Shade</span>Generator
			</div>
		</header>
	)
}

export default Header
