import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { questionServer } from "./AxiosService.js";


class QuestionsService {

  async getQuestions(){

    const res = await questionServer.get('/api.php', {
      params: {
        amount: 20,
        category: 9,
        difficulty: 'medium',
        type: 'boolean',
      }
    })
    appState.questions = res.data.results.map(rawData => new Question(rawData))
  }
}


export const questionsService = new QuestionsService()