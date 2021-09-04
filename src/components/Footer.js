import React from 'react';

function Footer() {
	const date = new Date()
	const currentYear = date.getFullYear()
	return (
		<footer className="flex flex-col justify-center items-center p-8">
			<span>{currentYear}</span>
			<a
				href="https://cuongnc.com"
				target="_blank"
				rel="noreferrer nofollow"
				className="font-bold opacity-60 hover:opacity-100 transition-opacity duration-1000 px-1"
			>
				Nguyễn Công Cương
			</a>
		</footer>
	)
}
export default Footer
