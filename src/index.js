import logo from './img/logo.png'
var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
	return new bootstrap.Toast(toastEl, {delay: 1500})
});
var notEmplErr = toastList[0];

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	return new bootstrap.Popover(popoverTriggerEl)
})

var currentModal = 0;
var modalText = ["Красная лиса (Vulpes vulpes) - наиболее распространенный вид лис, который обитает в Евразии, Северной Америке, Африке и Австралии. Она имеет красно-рыжий мех, белый живот и хвост с чёрным кончиком." +
`  <a href='#' data-bs-toggle="popover" title="Popover title" data-bs-content="Здесь должен быть контент">Подсказка</a>`
	,
	"Арктическая лисица (Vulpes lagopus) - обитает в Арктике и северных регионах Евразии и Северной Америки. Её мех изменяет свой цвет в зависимости от сезона - зимой он белый, а летом коричневый или серо-коричневый." +
	` <a href='#' data-bs-toggle="popover" title="Popover title" data-bs-content="Здесь должен быть контент">Подсказка</a>`
	,
	"Пустынная лисица (Vulpes zerda) - обитает в пустынях Северной Африки. Это самый маленький вид лис, у неё короткие уши и мех цвета песка." +
	`<a href='#' data-bs-toggle="popover" title="Popover title" data-bs-content="Здесь должен быть контент">Подсказка</a>`
	,
	"Серая лиса (Urocyon cinereoargenteus) - обитает в Северной и Центральной Америке. Её мех серый с серебристым оттенком, а на хвосте и ногах - чёрные полосы." +
	`<a href='#' data-bs-toggle="popover" title="Popover title" data-bs-content="Здесь должен быть контент">Подсказка</a>`
	,
	"Черная лиса (Pseudalopex fulvipes) - обитает только на острове Лос-Рокес в Чили. У неё густой черный мех и белый живот." +
	`<a href='#' data-bs-toggle="popover" title="Popover title" data-bs-content="Здесь должен быть контент">Подсказка</a>`
	,
	"Китайская лисица (Vulpes ferrilata) - обитает в Гималаях и на Тибете. У неё длинный мех, который может быть серо-коричневым или желтовато-коричневым, а на брюхе она белая." +
	`<a href='#' data-bs-toggle="popover" title="Popover title" data-bs-content="Здесь должен быть контент">Подсказка</a>`
]
var modalCount = modalText.length;
var exampleModal = document.getElementById('exampleModal')
function showInfo(i) {
	if(i >= 0) i = i % modalCount;
	else i = modalCount - 1;
	var modalParagraph = exampleModal.querySelector('.modal-body');
	let text = modalText[i];
	modalParagraph.innerHTML = text
	var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
	var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
		return new bootstrap.Popover(popoverTriggerEl)
	})
	currentModal = i;
}
exampleModal.addEventListener('show.bs.modal', function (event) {
	let button = event.relatedTarget
	let num = button.getAttribute('data-bs-num')
	showInfo(num);
});

exampleModal.addEventListener("keydown", event => {
	if (event.code === "ArrowLeft") {
		showInfo(currentModal - 1);
	} else if (event.code === "ArrowRight") {
		showInfo(currentModal + 1);
	} else if (event.key === "Escape") {
		event.preventDefault()
		
	}
});

document.querySelector('.logo').setAttribute('src', logo)
