const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
	    choice1: "1.Really an important institution even now.",
	    choice2: "2.Just a paper",
	    choice3: "3.Old tradition and it should be removed",
    },
	{
	    choice1: "1.No it shouldn't, it's just the parents' duty to teach their kids about it.",
	    choice2: "2.It creates sexual awareness among the children at a young age from different point of views, parents and society",
	    choice3: "3.I just follow new trends",
    },
	{
	    choice1: "1.It is not ok.",
	    choice2: "2.Anyways it's a lucrative business and it shoub be kept legal to avoid violence",
	    choice3: "3.I just follow new trends",
    },
	{
	    choice1: "1.It is not ok. Just in cases where the health of the mum gets compromised or the baby havimg problems.",
	    choice2: "2.Yes, because woman's rights and they can do whatever they want to their bodies.",
	    choice3: "3.I just follow new trends",
    },
	{
	    choice1: "1.No I don't.",
	    choice2: "2.Love is love no matter what sex you fall in. everyone is free to express themselfs",
	    choice3: "3.I just follow new trends",
    },
	{
	    choice1: "1.No I don't.",
	    choice2: "2.Because we live in a society where tolerance and respect form the base",
	    choice3: "3.I just follow new trends",
    }
	
];

let cluster = document.querySelectorAll('.progressText');

let store = [];


for(let i=0;i<6;i++) {
	cluster[i].addEventListener("click", function() {
		document.getElementById('choice-text1').innerHTML = questions[i].choice1;
		document.getElementById('choice-text2').innerHTML = questions[i].choice2;
		document.getElementById('choice-text3').innerHTML = questions[i].choice3;
	});
}

document.getElementById('choice-text1').addEventListener('click', function() {
	store.push(1);
});
document.getElementById('choice-text2').addEventListener('click', function() {
	store.push(2);
});
document.getElementById('choice-text3').addEventListener('click', function() {
	store.push(3);
});

let slug = 'default strings';
document.getElementById('myBtn').addEventListener('click', function() {
		let barbeque = [...store];
		const counts = {1:0, 2:0, 3:0};
		barbeque.forEach((x) => {
		counts[x] = (counts[x] || 0) + 1;
		});
		console.log(counts)
		let total = counts['1'] + counts['2'] + counts['3'];
		console.log(total);
		if(counts['1']/total*100 >= 50) {
			slug = 'Based on your elections you have the old thoughts!';
		}
		if(counts['2']/total*100 >= 50) {
			slug = 'Based on your elections you have updated thought!';
		}
		if(counts['3']/total*100 >= 50) {
			slug = 'Based on your elections you are really quite not interested in modern topics!';
		}
		let modal = document.getElementById("myModal");
		
		// Get the button that opens the modal
		let btn = document.getElementById("myBtn");
		
		// Get the <span> element that closes the modal
		let span = document.getElementsByClassName("close")[0];
		
		// When the user clicks the button, open the modal 
		btn.onclick = function() {
		  modal.style.display = "block";
		}
		
		console.log(slug);
		document.getElementById('slug').innerHTML = slug;
		
		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
		  modal.style.display = "none";
		}
		window.onclick = function(event) {
		  if (event.target == modal) {
			modal.style.display = "none";
		  }
		}
});

// Get the modal

// When the user clicks anywhere outside of the modal, close it
const MAX_QUESTIONS = 6

startQuestionnaire = () => {
	questionCounter = 0
	availableQuestions = [...questions]
	getNewQuestion()
}

getNewQuestion = () => {
	if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS)
		
	return window.location.assign('end.html')
	
	questionCounter++
	progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
	progressBarFull.style.width = '${(questionCounter/MAX_QUESTIONS) * 100}%'
}

	


