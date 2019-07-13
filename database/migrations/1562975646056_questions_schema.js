'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionsSchema extends Schema {
  up () {
    this.create('questions', (table) => {
      table.increments()
      table.integer('number').notNullable()
      table.text('description').notNullable()
      table.enu('types',['multiple choice', 'multi-select', 'text', 'video record']).notNullable()
      table.string('options')
      table.string('answer').notNullable()
      table.integer('timer').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('questions')
  }
}

module.exports = QuestionsSchema
