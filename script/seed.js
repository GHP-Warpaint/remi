'use strict'

const db = require('../server/db')
const {User, FoodItem} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      firstName: 'Cody',
      lastName: 'Pug',
      email: 'cody@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Gordon',
      lastName: 'Ramsey',
      email: 'gordon@remy.com',
      password: 'masterchef'
    }),
    User.create({
      firstName: 'Anthony',
      lastName: 'Bourdain',
      email: 'anthony@remy.com',
      password: 'noreservations'
    }),
    User.create({
      firstName: 'Guy',
      lastName: 'Fieri',
      email: 'guy@remy.com',
      password: 'flavortown'
    }),
    User.create({
      firstName: 'Julia',
      lastName: 'Childs',
      email: 'julia@remy.com',
      password: 'classic'
    }),
    User.create({
      firstName: 'Ina',
      lastName: 'Garten',
      email: 'ina@remy.com',
      password: 'barefootcontessa'
    }),
    User.create({
      firstName: 'Bobby',
      lastName: 'Flay',
      email: 'bobby@remy.com',
      password: 'throwdown'
    }),
    User.create({
      firstName: 'Rachel',
      lastName: 'Ray',
      email: 'rachel@remy.com',
      password: 'kitchen'
    })
  ])

  const foodItems = await Promise.all([
    FoodItem.create({
      name: 'bread',
      imageUrl:
        'https://cdn.iconscout.com/icon/free/png-256/bread-food-diet-bake-nutrition-bakery-31126.png'
    }),
    FoodItem.create({
      name: 'apple',
      imageUrl:
        'https://cdn.iconscout.com/icon/free/png-512/red-apple-fruit-emoj-symbol-food-30677.png'
    }),
    FoodItem.create({
      name: 'carrot',
      imageUrl:
        'https://cdn1.iconfinder.com/data/icons/food-2-11/128/carrot-food-vegetable-vegetables-512.png'
    }),
    FoodItem.create({
      name: 'chicken',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSR1qWRVfUCoZJRKhDFuVchQc8XQPh30LHbReowZSkRndPXH1j&usqp=CAU'
    }),
    FoodItem.create({
      name: 'pineapple',
      imageUrl:
        'https://cdn4.iconfinder.com/data/icons/fruits-and-vegetables-filled-color/300/1474586Untitled-3-512.png'
    }),
    FoodItem.create({
      name: 'milk',
      imageUrl:
        'https://cdn4.iconfinder.com/data/icons/coffee-house-hand-drawn-icons/64/Coffee-House_36-512.png'
    })
  ])

  const cody = await User.findOne({
    where: {
      email: 'cody@email.com'
    }
  })

  const guy = await User.findOne({
    where: {
      email: 'guy@remy.com'
    }
  })

  const ina = await User.findOne({
    where: {
      email: 'ina@remy.com'
    }
  })

  const milk = await FoodItem.findOne({
    where: {
      name: 'milk'
    }
  })

  const pineapple = await FoodItem.findOne({
    where: {
      name: 'pineapple'
    }
  })

  const bread = await FoodItem.findOne({
    where: {
      name: 'bread'
    }
  })

  const apple = await FoodItem.findOne({
    where: {
      name: 'apple'
    }
  })

  await milk.addUser(cody)
  await milk.addUser(guy)
  await milk.addUser(ina)

  await apple.addUser(ina)
  await apple.addUser(guy)

  await pineapple.addUser(cody)
  await pineapple.addUser(guy)
  await pineapple.addUser(ina)

  await bread.addUser(cody)
  await bread.addUser(ina)

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${foodItems.length}.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
