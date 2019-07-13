'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })

Factory.blueprint('App/Models/User', async (faker, i, data) => {
    return {
        name: ['0','aden', 'ariandy', 'ibrahim', 'januar', 'rahadian'][i],
        email: ['0', 'aden@x.com', 'ariandy@x.com', 'ibrahim@x.com', 'januar@x.com', 'rahadian@x.com'][i],
        phonenumber: ['0','1','2','3','4','5'][i]
    }
})

// Factory.blueprint('App/Models/Question', async (faker, i, data) => {
//     return {
//         number: [1,2,3][i],
//         description: ['Bapak Fisika Quantum ?', 'Badass Renaissance Engineer ?', 'Dibakar karena dianggap melenceng dari iman ?', 'ibrahim@x.com', 'januar@x.com', 'rahadian@x.com'][i],
//         answer: ['Planck','Leonardo','Bruno']
//         timer: 1
//     }
// })