const questions = [ 
    {
    question:"In 1768, Captain James Cook set out to explore which ocean?",
    answers : [ "Pacific Ocean", "Atlantic Ocean." ,"Indian Ocean"],
    correct: 1,
    
},
{
    question:"What is actually electricity?",
    answers : [ "A flow of air", "A flow of electrons" ,"A flow of atoms"],
    correct: 2,
    
},
{
    question:"Which of the following is not an international organisation",
    answers : [ "FBI", "NATO" ,"FIFA" ],
    correct: 1,
    
},
{
    question:"Which of the following disorders is the fear of being alone?",
    answers : [ "Acrophobia", "Aerophobia" ,"Agoraphobia"],
    correct: 3,
    
},
{
    question:"What is the speed of sound?",
    answers : [ "700 km/h", "400 km/h" ,"1,200 km/h"],
    correct: 3,
    }
];
//start(/)
const headerContainer = document.querySelector('#header');

const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');


let score = 0 ;
let questionIndex = 0;

clearPage();
showQuestion();
submitBtn.onclick = checkAnswer;

function clearPage(){
    headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
}

function showQuestion (){
    console.log('showQuestion');
   //questions
    
   
const headerTemplate = `<h2 class="title" > %title%</h2>`;

const title =  headerTemplate.replace('%title%',questions[questionIndex]['question'] )

headerContainer.innerHTML = title;
//options of answers
listContainer.innerHTML = ""
   for(answerText of questions[questionIndex]['answers']){
    

    const questionTemplate = 
    `<li>
        <label>
             <input type="radio" class="answer" name="answer"/>
            <span>%answer%</span>
         </label>
    </li>`
     const answerHTML = questionTemplate.replace('%answer%',answerText)
listContainer.innerHTML += answerHTML;


   }


}
 function checkAnswer(){
    console.log('checkAnswer started!');
    
 //chosen button//
const checkedRadio = listContainer.getElementsByClassName('answer');
 
for (let i = 0; i < 3; i++) {
    if (checkedRadio[i].checked == true && i + 1 == questions[questionIndex].correct){
        score++;
    }	
}
console.log("score = " + score); 

 questionIndex++;
  showQuestion()

}  
   


 if (checkedRadio)
 {

 } else {
    submitBtn.blur;

 }
