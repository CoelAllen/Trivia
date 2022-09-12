import { appState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";
import { questionsService } from "../Services/QuestionsService.js"


function drawQuestions(){
let template = ''
appState.questions.forEach(q=> template += q.QuestionTemplate)
setHTML('api-questions', template)

}
export class QuestionsController {
  constructor(){
    appState.on('questions', drawQuestions)
    this.getQuestions()
    console.log('hello from q-troller');
  }

  async getQuestions(){
    try {
      await questionsService.getQuestions()
      console.log("hello from asyn in q-troller");
    } catch (error) {
      console.error('[getQuestions]',error)
      Pop.error(error)
    }
  }


}