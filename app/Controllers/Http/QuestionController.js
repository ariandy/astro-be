'use strict'
const Question = use('App/Models/Question');
class QuestionController {
  async index ({ request, response, view }) {
    let questions = await Question.all()
    return response.json(questions)
  }

  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {
  }

  async show ({ params, request, response, view }) {
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = QuestionController
