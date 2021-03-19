function headerHam(x) {
	if (x.classList.contains('change')) {
		document.querySelector('.ham-container').classList.remove('change')
		document.querySelector('.main-nav').classList.remove('hidden')
		document.querySelector('.main-header').classList.remove('ms-0')
		document.querySelector('.main-header').classList.remove('w-100')
		document.querySelector('.main-content').classList.remove('ms-0')
		document.querySelector('.main-content').classList.remove('w-100')
	} else {
		document.querySelector('.ham-container').classList.add('change')
		document.querySelector('.main-nav').classList.add('hidden')
		document.querySelector('.main-header').classList.add('ms-0')
		document.querySelector('.main-header').classList.add('w-100')
		document.querySelector('.main-content').classList.add('ms-0')
		document.querySelector('.main-content').classList.add('w-100')
	}
}
