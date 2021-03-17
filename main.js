function headerHam(x) {
	if (x.classList.contains('change')) {
		document.querySelector('.ham-container').classList.remove('change')
		// document.querySelector('.accounts__list').classList.add("hidden")
	} else {
		document.querySelector('.ham-container').classList.add('change')
		// document.querySelector('.accounts__list').classList.remove("hidden")
	}
}
