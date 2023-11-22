import './style.scss'

import myImage from './img/code.png'

const start = () => {
	function component() {
		const myIcon = new Image(100, 100)
		myIcon.src = myImage
		return myIcon
	}
	console.log('hi')
	document.body.append(component())
}

document.addEventListener('DOMContentLoaded', start)
