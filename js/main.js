
const button = document.querySelector('.submit-button');
const badWords = ['anal',
'anus',
'arse',
'ass',
'ballsack',
'balls',
'bastard',
'bitch',
'biatch',
'bloody',
'blowjob',
'blow job',
'bollock',
'bollok',
'boner',
'boob',
'bugger',
'bum',
'butt',
'buttplug',
'clitoris',
'cock',
'coon',
'crap',
'cunt',
'damn',
'dick',
'dildo',
'dyke',
'fag',
'feck',
'fellate',
'fellatio',
'felching',
'fuck',
'f u c k',
'fudgepacker',
'fudge packer',
'flange',
'Goddamn',
'God damn',
'hell',
'homo',
'jerk',
'jizz',
'knobend',
'knob end',
'labia',
'lmao',
'lmfao',
'muff',
'nigger',
'nigga',
'omg',
'penis',
'piss',
'poop',
'prick',
'pube',
'pussy',
'queer',
'scrotum',
'sex',
'shit',
's hit',
'sh1t',
'slut',
'smegma',
'spunk',
'tit',
'tosser',
'turd',
'twat',
'vagina',
'wank',
'whore',
'wtf',
'asshole'
'douche'];
const content = document.querySelector('.text-result');
const form = document.querySelector('#form-refresh');

function handleClick(){
	let userInput = document.querySelector('textarea');
	userInput = userInput.value.split(' ');
	let niceWritting = userInput.filter((word)=>{
		if(badWords.includes(word) === false){
			return word;
		}
	});	
	
	let badWritting = userInput.filter((badWord)=>{
		if(badWords.includes(badWord) === true){
			return badWord;
		}
	});	

	let reWrite = userInput.forEach((word)=>{
		for(let i = 0; i <badWritting.length; i++ ){
		return badWritting;
	}
	});

	content.innerHTML = "<h2>Your message:</h2>" +  "<br>" + niceWritting.join(' ') + "<br>" + "<strong>You have said bad words: </strong>" +badWritting.length+ " times" +"<h2>The money you have to pay for swear box is: </h2>" + badWritting.length * 10 + " USD";

}


//scroll down when click button


let seemore = document.querySelector('.a a');
function scrollDown(e){
	e.preventDefault();
	window.scrollTo(0, 750);
}


seemore.addEventListener('click', scrollDown);





