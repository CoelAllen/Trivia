

export class Question{
  constructor(data){
    this.id = data.id
    this.category = data.category
    this.type = data.type
    this.difficulty = data.difficulty
    this.question = data.question
    this.correct_answer = data.correct_answer
    this.incorrect_answers = data.incorrect_answers
   
  }
  
  get QuestionTemplate() {
    return /*html*/`
    <div class="col-12">
    <div class="col-md-6">
    <div class="card">
    <h4>${this.question}</h4>
    </div>
    </div>
    </div>
    
    
    
    `
  }
}























// https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=boolean