let $ = document
let locationKey = $.querySelector('.location')
let starter = $.querySelector('.starter')
let ascii = $.querySelector('.ascii')
let infos = $.querySelector('.infos')
let key = $.querySelector('.key')
let which = $.querySelector('.which')
let code = $.querySelector('.code')
let keyCodePress = $.querySelector('.keyCode')

document.body.addEventListener('keydown', function (event) {
	
	starter.style.display = 'none'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'


	keyCodePress.innerHTML = event.keyCode
	key.innerHTML = event.key
	locationKey.innerHTML = event.location
	which.innerHTML = event.which
	code.innerHTML = event.code
})