'use strict'

/*
|--------------------------------------------------------------------------
| QuestionSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class QuestionSeeder {
  async run () {
  //   const users = await Factory
  //  .model('App/Models/Question')
  //  .createMany(3)
  }
}

module.exports = QuestionSeeder
