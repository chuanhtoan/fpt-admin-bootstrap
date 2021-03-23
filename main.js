function headerHam(x) {
	if (x.classList.contains('change')) {
		document.querySelector('.ham-container').classList.remove('change')
		document.querySelector('.main-nav').classList.remove('hidden')
		document.querySelector('.main-header').classList.remove('ms-0')
		document.querySelector('.main-header').classList.remove('w-100')
		document.querySelector('.main-content').classList.remove('ms-0')
		document.querySelector('.main-content').classList.remove('w-100')
		document.querySelector('.main-footer').classList.remove('ms-0')
	} else {
		document.querySelector('.ham-container').classList.add('change')
		document.querySelector('.main-nav').classList.add('hidden')
		document.querySelector('.main-header').classList.add('ms-0')
		document.querySelector('.main-header').classList.add('w-100')
		document.querySelector('.main-content').classList.add('ms-0')
		document.querySelector('.main-content').classList.add('w-100')
		document.querySelector('.main-footer').classList.add('ms-0')
	}
}

document.querySelector('#bg-change').addEventListener('change', (e) => {
	const lightColor = '#ccc'
	if (e.currentTarget.checked) {
		document.querySelector('.main-nav').style.background = lightColor
		document.querySelector('.main-header').style.background = lightColor
		document.querySelectorAll('.section').forEach((item) => {
			item.style.background = lightColor
		})
	} else {
		document.querySelector('.main-nav').style.background = '#282D4D'
		document.querySelector('.main-header').style.background = '#282D4D'
		document.querySelectorAll('.section').forEach((item) => {
			item.style.background = '#282D4D'
		})
	}
})
