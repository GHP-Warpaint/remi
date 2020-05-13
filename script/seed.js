'use strict'

const db = require('../server/db')
const {User, FoodItem, DailyRecipe} = require('../server/db/models')

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

  const dailyRecipes = await Promise.all([
    DailyRecipe.create({
      title: 'Instant Pot Mini Frittatas',
      imageUrl:
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/10/22/0/FNK_INSTANT-POT-MINI-FRITTATAS-H-s4x3.jpg.rend.hgtvcom.966.725.suffix/1540214001872.jpeg',
      url:
        'https://www.foodnetwork.com/recipes/food-network-kitchen/instant-pot-mini-frittatas-5451507'
    }),
    DailyRecipe.create({
      title: 'Scrambled Eggs with Herbs',
      imageUrl:
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/12/13/0/FN_Scrambled-Eggs-with-Herbs_s4x3.jpg.rend.hgtvcom.966.725.suffix/1387411745857.jpeg',
      url:
        'https://www.foodnetwork.com/recipes/food-network-kitchen/scrambled-eggs-with-herbs-recipe-2011670'
    }),
    DailyRecipe.create({
      title: 'Blueberry Scones with Lemon Glaze',
      imageUrl:
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/8/4/0/FO1D54_blueberry-scones-with-lemon-glaze_s4x3.jpg.rend.hgtvcom.966.725.suffix/1393126553271.jpeg',
      url:
        'https://www.foodnetwork.com/recipes/tyler-florence/blueberry-scones-with-lemon-glaze-recipe-1914780'
    }),
    DailyRecipe.create({
      title: 'Mini Kale Shakshuka',
      imageUrl:
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/12/19/MW207_Mini-Kale-Shakshuka_s4x3.jpg.rend.hgtvcom.966.725.suffix/1545245389206.jpeg',
      url: 'https://www.foodnetwork.com/recipes/mini-kale-shakshuka-5526037'
    }),
    DailyRecipe.create({
      title: 'Red Velvet Cake Mix Cinnamon Rolls',
      imageUrl:
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/1/30/0/FNK_RED-VELVET-CINNAMON-ROLLS-H_s4x3.jpg.rend.hgtvcom.966.725.suffix/1548878028985.jpeg',
      url:
        'https://www.foodnetwork.com/recipes/food-network-kitchen/red-velvet-cake-mix-cinnamon-rolls-5527718'
    }),
    DailyRecipe.create({
      title: 'French Toast',
      imageUrl:
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/3/26/0/IE0309_French-Toast.jpg.rend.hgtvcom.966.725.suffix/1431730431340.jpeg',
      url:
        'https://www.foodnetwork.com/recipes/robert-irvine/french-toast-recipe-1951408'
    }),
    DailyRecipe.create({
      title: 'Chocolate-Hazelnut Babka French Toast with Caramelized Bananas',
      imageUrl:
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/10/5/1/AS0708H_Chocolate-Hazelnut-Babka-French-Toast-with-Caramelized-Bananas_s4x3.jpg.rend.hgtvcom.966.725.suffix/1547062357227.jpeg',
      url:
        'https://www.foodnetwork.com/recipes/bobby-flay/chocolate-hazelnut-babka-french-toast-with-caramelized-bananas-3513253'
    }),
    DailyRecipe.create({
      title: 'Waffles with Blueberry Compote and Lemon Ricotta Cream',
      imageUrl:
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/12/27/1/FNM_010118-Waffles-with-Blueberry-Compote_s4x3.jpg.rend.hgtvcom.966.725.suffix/1514485377254.jpeg',
      url:
        'https://www.foodnetwork.com/recipes/bobby-flay/waffles-withblueberry-compoteand-lemon-ricotta-cream-4622249'
    }),
    DailyRecipe.create({
      title: 'Acai Breakfast Bowl',
      imageUrl:
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/12/12/0/cc_acai-breakfast-bowl-recipe_s4x3.jpg.rend.hgtvcom.966.725.suffix/1418418212045.jpeg',
      url:
        'https://www.foodnetwork.com/recipes/food-network-kitchen/acai-breakfast-bowl-3363448'
    }),
    DailyRecipe.create({
      title: 'Chocolate Lava Cake',
      imageUrl:
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/2/19/1/WU0701H_Molten-Chocolate-Cakes_s4x3.jpg.rend.hgtvcom.966.725.suffix/1485880987811.jpeg',
      url: 'https://www.foodnetwork.com/recipes/chocolate-lava-cakes-2312421'
    }),
    DailyRecipe.create({
      title: 'Pot Roast',
      imageUrl:
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/1/25/0/WU0105H_Pot-Roast_s4x3.jpg.rend.hgtvcom.966.725.suffix/1387299383780.jpeg',
      url:
        'https://www.foodnetwork.com/recipes/ree-drummond/perfect-pot-roast-recipe-2118771'
    }),
    DailyRecipe.create({
      title: 'Oven-Baked Salmon',
      imageUrl:
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/7/26/1/CN1B01_oven-baked-salmon_s4x3.jpg.rend.hgtvcom.966.725.suffix/1382545141944.jpeg',
      url:
        'https://www.foodnetwork.com/recipes/oven-baked-salmon-recipe-1911951'
    }),
    DailyRecipe.create({
      title: 'Spring Vegetable Fettuccine Alfredo',
      imageUrl:
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/1/9/6/FNK_Spring-Vegetable-Alfredo_s4x3.jpg.rend.hgtvcom.966.725.suffix/1484859771784.jpeg',
      url:
        'https://www.foodnetwork.com/recipes/food-network-kitchen/spring-vegetable-fettuccine-alfredo-3577686'
    }),
    DailyRecipe.create({
      title: 'Sausage Pizza With Spinach Salad',
      imageUrl:
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/3/8/0/FNM_040118-Sausage-Pizza-with-Spinach-Salad_s4x3.jpg.rend.hgtvcom.966.725.suffix/1520543569719.jpeg',
      url:
        'https://www.foodnetwork.com/recipes/food-network-kitchen/sausage-pizza-with-spinach-salad-5126657'
    }),
    DailyRecipe.create({
      title: 'Tacos de Carne Asada',
      imageUrl:
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/4/22/0/CCMP1C20_Beef-Tacos_s4x3.jpg.rend.hgtvcom.966.725.suffix/1371597614473.jpeg',
      url:
        'https://www.foodnetwork.com/recipes/beef-tacos-tacos-de-carne-asada-recipe-1939460'
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
  console.log(`seeded ${foodItems.length} food items`)
  console.log(`seeded ${dailyRecipes.length} daily recipes`)
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
