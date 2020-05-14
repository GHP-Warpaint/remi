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
    }),
    FoodItem.create({
      name: 'orange',
      imageUrl:
        'https://cdn2.iconfinder.com/data/icons/food-98/64/Food_orange-512.png'
    }),
    FoodItem.create({
      name: 'blueberry',
      imageUrl: 'https://cdn0.iconfinder.com/data/icons/berries-1/50/42-128.png'
    }),
    FoodItem.create({
      name: 'raspberry',
      imageUrl:
        'https://cdn2.iconfinder.com/data/icons/fruit-and-vegetables-3/200/308-128.png'
    }),
    FoodItem.create({
      name: 'lemon',
      imageUrl:
        'https://cdn3.iconfinder.com/data/icons/food-drink-fruit-meat-nut/200/Food_fruit_lemon-128.png'
    }),
    FoodItem.create({
      name: 'strawberry',
      imageUrl: 'https://cdn2.iconfinder.com/data/icons/fruit-i/83/05-128.png'
    }),
    FoodItem.create({
      name: 'lime',
      imageUrl:
        'https://cdn4.iconfinder.com/data/icons/fruit-4/842/lime-128.png'
    }),
    FoodItem.create({
      name: 'onion',
      imageUrl:
        'https://cdn2.iconfinder.com/data/icons/food-icons-6/200/food_onion-128.png'
    }),
    FoodItem.create({
      name: 'scallion',
      imageUrl:
        'https://cdn3.iconfinder.com/data/icons/vegetable-26/128/Scallion-green-herb-leek-culinary-128.png'
    }),
    FoodItem.create({
      name: 'garlic',
      imageUrl:
        'https://cdn2.iconfinder.com/data/icons/fruit-and-vegetables-4/200/358-128.png'
    }),
    FoodItem.create({
      name: 'lettuce',
      imageUrl:
        'https://cdn2.iconfinder.com/data/icons/vegetables-20/500/Lechuga-128.png'
    }),
    FoodItem.create({
      name: 'raddish',
      imageUrl:
        'https://cdn3.iconfinder.com/data/icons/vegetables-flat-1/169/flat_vegetable_raddish2-128.png'
    }),
    FoodItem.create({
      name: 'broccoli',
      imageUrl:
        'https://cdn0.iconfinder.com/data/icons/vegetables-for-food/512/broccoli-food-vegetable-128.png'
    }),
    FoodItem.create({
      name: 'kale',
      imageUrl:
        'https://cdn1.iconfinder.com/data/icons/vegetable-flat-1/48/Plants_Vegetables_Artboard_41-128.png'
    }),
    FoodItem.create({
      name: 'spinach',
      imageUrl:
        'https://cdn1.iconfinder.com/data/icons/food-2-23/50/122-128.png'
    }),
    FoodItem.create({
      name: 'banana',
      imageUrl:
        'https://cdn1.iconfinder.com/data/icons/food-111/512/banana-128.png'
    }),
    FoodItem.create({
      name: 'eggs',
      imageUrl:
        'https://cdn2.iconfinder.com/data/icons/food-98/64/Food_eggs-128.png'
    }),
    FoodItem.create({
      name: 'tomato',
      imageUrl:
        'https://cdn1.iconfinder.com/data/icons/food-111/512/tomato-128.png'
    }),
    FoodItem.create({
      name: 'red pepper',
      imageUrl:
        'https://cdn1.iconfinder.com/data/icons/colorix-vegetables/128/Colorix_bell_pepper-128.png'
    }),
    FoodItem.create({
      name: 'jalapeno pepper',
      imageUrl:
        'https://cdn4.iconfinder.com/data/icons/food-line-filled/614/369_-_Pepper-128.png'
    }),
    FoodItem.create({
      name: 'chili pepper',
      imageUrl:
        'https://cdn0.iconfinder.com/data/icons/food-beverages-1/24/Chilli-128.png'
    }),
    FoodItem.create({
      name: 'green pepper',
      imageUrl:
        'https://cdn3.iconfinder.com/data/icons/food-emoji/50/GreenPepper-128.png'
    }),
    FoodItem.create({
      name: 'yellow pepper',
      imageUrl:
        'https://cdn0.iconfinder.com/data/icons/garden-25/100/Yellow_Bell_Pepper-128.png'
    }),
    FoodItem.create({
      name: 'orange pepper',
      imageUrl:
        'https://cdn0.iconfinder.com/data/icons/produce/60/VEGGIES_orange_pepper-128.png'
    }),
    FoodItem.create({
      name: 'asparagus',
      imageUrl:
        'https://cdn1.iconfinder.com/data/icons/colorix-vegetables/128/Colorix_asparagus-128.png'
    }),
    FoodItem.create({
      name: 'bacon',
      imageUrl:
        'https://cdn0.iconfinder.com/data/icons/food-volume-ii/128/bacon-128.png'
    }),
    FoodItem.create({
      name: 'sugar',
      imageUrl:
        'https://cdn3.iconfinder.com/data/icons/sugar-blue-line/64/174_sugar-bag-wholesale-16-128.png'
    }),
    FoodItem.create({
      name: 'flour',
      imageUrl:
        'https://cdn1.iconfinder.com/data/icons/food-flat-sticker-vol-3/150/flour__bag__wheat__grain-128.png'
    }),
    FoodItem.create({
      name: 'butter',
      imageUrl:
        'https://cdn2.iconfinder.com/data/icons/food-drink-60/50/1F9C8-butter-128.png'
    }),
    FoodItem.create({
      name: 'potato',
      imageUrl:
        'https://cdn4.iconfinder.com/data/icons/food-volume-ii/128/potato-128.png'
    }),
    FoodItem.create({
      name: 'trout',
      imageUrl:
        'https://cdn3.iconfinder.com/data/icons/healthy-food-9/64/Trout-protein-omega-healthy-128.png'
    }),
    FoodItem.create({
      name: 'salmon',
      imageUrl:
        'https://cdn0.iconfinder.com/data/icons/food-flat-8/64/salmon-food-meat-meal-128.png'
    }),
    FoodItem.create({
      name: 'pollock',
      imageUrl:
        'https://cdn4.iconfinder.com/data/icons/fish-13/100/fish-1px-go-09-128.png'
    }),
    FoodItem.create({
      name: 'tuna',
      imageUrl:
        'https://cdn0.iconfinder.com/data/icons/sushi-bold/256/sushi-18-128.png'
    }),
    FoodItem.create({
      name: 'crab',
      imageUrl:
        'https://cdn0.iconfinder.com/data/icons/food-icons-4/110/Crab-128.png'
    }),
    FoodItem.create({
      name: 'lobster',
      imageUrl:
        'https://cdn4.iconfinder.com/data/icons/food-drinks-caramel-vol-1/512/LOBSTER-128.png'
    }),
    FoodItem.create({
      name: 'shrimp',
      imageUrl:
        'https://cdn3.iconfinder.com/data/icons/food-ingredient/512/24-prawn-seafood-shrimp-128.png'
    }),
    FoodItem.create({
      name: 'pepper',
      imageUrl:
        'https://cdn3.iconfinder.com/data/icons/seasoning-in-kitchen/128/yumminky-spice-32-128.png'
    }),
    FoodItem.create({
      name: 'oregano',
      imageUrl:
        'https://cdn3.iconfinder.com/data/icons/seasoning-in-kitchen/128/yumminky-spice-37-128.png'
    }),
    FoodItem.create({
      name: 'ketchup',
      imageUrl:
        'https://cdn1.iconfinder.com/data/icons/fast-food-106/567/ketchup-128.png'
    }),
    FoodItem.create({
      name: 'pasta',
      imageUrl:
        'https://cdn3.iconfinder.com/data/icons/food-ingredient/512/49-pasta-farfalle-food-128.png'
    }),
    FoodItem.create({
      name: 'chocolate',
      imageUrl:
        'https://cdn2.iconfinder.com/data/icons/food-98/64/Food_chocolate-128.png'
    }),
    FoodItem.create({
      name: 'syrup',
      imageUrl:
        'https://cdn3.iconfinder.com/data/icons/food-from-around-the-world/512/maple_syrup-128.png'
    }),
    FoodItem.create({
      name: 'mozzarella',
      imageUrl:
        'https://cdn3.iconfinder.com/data/icons/food-ingredients-1/50/16-128.png'
    }),
    FoodItem.create({
      name: 'cheese',
      imageUrl:
        'https://cdn0.iconfinder.com/data/icons/shift-food-drinks/32/Piece_of_cheese-128.png'
    }),
    FoodItem.create({
      name: 'beef',
      imageUrl:
        'https://cdn4.iconfinder.com/data/icons/food-ingredient/512/z5-meat-steak-beef-food-128.png'
    }),
    FoodItem.create({
      name: 'peas',
      imageUrl:
        'https://cdn1.iconfinder.com/data/icons/vegetables-57/200/Peas_Vegetables_food-128.png'
    }),
    FoodItem.create({
      name: 'beans',
      imageUrl:
        'https://cdn0.iconfinder.com/data/icons/vegetable-spice/512/20-vegetable-beans-bean-128.png'
    }),
    FoodItem.create({
      name: 'coffee beans',
      imageUrl:
        'https://cdn4.iconfinder.com/data/icons/coffee-cafe-brewery-caramel-vol-1/512/COFFEE_SCOOP-128.png'
    }),
    FoodItem.create({
      name: 'turkey',
      imageUrl:
        'https://cdn2.iconfinder.com/data/icons/unigrid-phantom-food-vol-1/60/006_005_chicken_turkey_grill_food_kfc-128.png'
    }),
    FoodItem.create({
      name: 'rice',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5ttG_ekK03m9LlI_1yIs9aXljyNxmzj93Ne9mon-8lWMsCADl&usqp=CAU'
    }),
    FoodItem.create({
      name: 'coconut',
      imageUrl:
        'https://cdn2.iconfinder.com/data/icons/food-98/64/Food_coconut-128.png'
    }),
    FoodItem.create({
      name: 'tofu',
      imageUrl:
        'https://cdn0.iconfinder.com/data/icons/veggie-food-colored/96/Tofu_Cubes-128.png'
    }),
    FoodItem.create({
      name: 'cilantro',
      imageUrl:
        'https://cdn3.iconfinder.com/data/icons/herbs-and-spices-flat/48/Plants_Spices_Artboard_36-128.png'
    }),
    FoodItem.create({
      name: 'parsley',
      imageUrl:
        'https://cdn1.iconfinder.com/data/icons/fruits-n-vegetables-colored-gradient/128/parsley-128.png'
    }),
    FoodItem.create({
      name: 'rosemary',
      imageUrl:
        'https://cdn3.iconfinder.com/data/icons/herbs-and-spices-flat/48/Plants_Spices_Artboard_13-128.png'
    }),
    FoodItem.create({
      name: 'white wine',
      imageUrl:
        'https://cdn4.iconfinder.com/data/icons/alcoholic-drinks-1/1200/SingleCartoonAlcoholYulia1003-128.png'
    }),
    FoodItem.create({
      name: 'red wine',
      imageUrl:
        'https://cdn0.iconfinder.com/data/icons/australia-basic-lineal-color/512/18_Wine-128.png'
    }),
    FoodItem.create({
      name: 'tarragon',
      imageUrl:
        'https://cdn3.iconfinder.com/data/icons/herb-flat/64/tarragon-food-vegetable-herb-128.png'
    }),
    FoodItem.create({
      name: 'chickpeas',
      imageUrl:
        'https://cdn0.iconfinder.com/data/icons/different-types-of-legumes/32/chickpeas-128.png'
    }),
    FoodItem.create({
      name: 'vanilla',
      imageUrl:
        'https://cdn3.iconfinder.com/data/icons/herb-flat/64/vanilla-food-vegetable-herb-128.png'
    }),
    FoodItem.create({
      name: 'hazelnuts',
      imageUrl:
        'https://cdn2.iconfinder.com/data/icons/food-98/64/Food_nuts-128.png'
    }),
    FoodItem.create({
      name: 'mustard',
      imageUrl:
        'https://cdn3.iconfinder.com/data/icons/food-ingredient/512/59-mustard-sauce-food-128.png'
    }),
    FoodItem.create({
      name: 'mayonnaise',
      imageUrl:
        'https://cdn0.iconfinder.com/data/icons/food-volume-ii/128/mayonnaise-jar-128.png'
    }),
    FoodItem.create({
      name: 'avocado',
      imageUrl:
        'https://cdn3.iconfinder.com/data/icons/fruits-8/512/avocado-128.png'
    }),
    FoodItem.create({
      name: 'vinegar',
      imageUrl:
        'https://cdn3.iconfinder.com/data/icons/food-ingredient/512/57-bottle-vinegar-food-128.png'
    }),
    FoodItem.create({
      name: 'sausage',
      imageUrl:
        'https://cdn3.iconfinder.com/data/icons/food-ingredient/512/05-frankfurter-sausage-food-128.png'
    }),
    FoodItem.create({
      name: 'salami',
      imageUrl:
        'https://cdn4.iconfinder.com/data/icons/flat-food-3/512/salami-128.png'
    }),
    FoodItem.create({
      name: 'tortilla',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQggXb8XnV8k6DUXG6bu-LACRI03ncKLjX7yNcrJLvSHW5L9CXz&usqp=CAU'
    }),
    FoodItem.create({
      name: 'croissant',
      imageUrl:
        'https://cdn2.iconfinder.com/data/icons/food-drink-60/50/1F950-croissant-128.png'
    }),
    FoodItem.create({
      name: 'olive oil',
      imageUrl:
        'https://cdn4.iconfinder.com/data/icons/food-drink-smooth-vol-2/256/MEDITERRANEAN-128.png'
    }),
    FoodItem.create({
      name: 'olive',
      imageUrl:
        'https://cdn0.iconfinder.com/data/icons/set-01-food-colors-doodle/91/Food_42-128.png'
    }),
    FoodItem.create({
      name: 'artichoke',
      imageUrl:
        'https://cdn0.iconfinder.com/data/icons/vegetable-spice/512/02-vegetable-food-artichoke-128.png'
    }),
    FoodItem.create({
      name: 'pomegranate',
      imageUrl:
        'https://cdn2.iconfinder.com/data/icons/fruit-and-vegetables-4/200/374-128.png'
    }),
    FoodItem.create({
      name: 'cumin',
      imageUrl:
        'https://cdn3.iconfinder.com/data/icons/seasoning-in-kitchen/128/yumminky-spice-43-128.png'
    }),
    FoodItem.create({
      name: 'turmeric',
      imageUrl:
        'https://cdn0.iconfinder.com/data/icons/herbs-spices-color/290/22-128.png'
    }),
    FoodItem.create({
      name: 'ginger',
      imageUrl:
        'https://cdn3.iconfinder.com/data/icons/food-and-cooking-1/110/ginger__vegetable__food__kitchen_-128.png'
    }),
    FoodItem.create({
      name: 'sweet potato',
      imageUrl:
        'https://cdn3.iconfinder.com/data/icons/vegetable-26/128/Sweet-potato-yam-root-crop-128.png'
    }),
    FoodItem.create({
      name: 'squash',
      imageUrl:
        'https://cdn1.iconfinder.com/data/icons/flat-vegetables-yummy/512/iconfinder_butternut_squash_flat_vegetable-128.png'
    }),
    FoodItem.create({
      name: 'pumpkin',
      imageUrl:
        'https://cdn3.iconfinder.com/data/icons/food-round/64/Food_pumpkin-128.png'
    }),
    FoodItem.create({
      name: 'basil',
      imageUrl:
        'https://cdn3.iconfinder.com/data/icons/seasoning-in-kitchen/128/yumminky-spice-38-2-128.png'
    }),
    FoodItem.create({
      name: 'soy sauce',
      imageUrl:
        'https://cdn0.iconfinder.com/data/icons/sushi-12/1200/SingleCartoonSushiYulia1011-128.png'
    }),
    FoodItem.create({
      name: 'cucumber',
      imageUrl:
        'https://cdn1.iconfinder.com/data/icons/summer-1-3/512/SUMMER_ICON_1_FINAL-25-128.png'
    }),
    FoodItem.create({
      name: 'pickles',
      imageUrl:
        'https://cdn4.iconfinder.com/data/icons/smashicons-gastronomy-2-retro-vol-2/61/48_-Pickles-_gastronomy_food_cooking-128.png'
    }),
    FoodItem.create({
      name: 'bread crumbs',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtLvo7qxWzcXycTg9UQJwE0NioaTZGLecXGN6mYcnLwjMXcGGx&usqp=CAU'
    }),
    FoodItem.create({
      name: 'caramel',
      imageUrl:
        'https://cdn4.iconfinder.com/data/icons/ice-cream-68/512/caramel-syrup-ice-cream-128.png'
    }),
    FoodItem.create({
      name: 'mushroom',
      imageUrl:
        'https://cdn0.iconfinder.com/data/icons/food-volume-2-3/256/45-128.png'
    }),
    FoodItem.create({
      name: 'zucchini',
      imageUrl:
        'https://cdn3.iconfinder.com/data/icons/fruit-and-vegetables/512/zucchini-128.png'
    }),
    FoodItem.create({
      name: 'eggplant',
      imageUrl:
        'https://cdn4.iconfinder.com/data/icons/vegetables-60/48/Vegetable_eggplant_food_vegetable-128.png'
    }),
    FoodItem.create({
      name: 'rum',
      imageUrl:
        'https://cdn0.iconfinder.com/data/icons/drink-50/512/rum-whisky-alcohol-drink-128.png'
    }),
    FoodItem.create({
      name: 'whiskey',
      imageUrl:
        'https://cdn4.iconfinder.com/data/icons/drink-and-cocktails/206/Whiskey_3-128.png'
    }),
    FoodItem.create({
      name: 'vodka',
      imageUrl:
        'https://cdn4.iconfinder.com/data/icons/drink-and-cocktails/206/Vodka_4-128.png'
    }),
    FoodItem.create({
      name: 'tamarind',
      imageUrl:
        'https://cdn0.iconfinder.com/data/icons/fruit-84/128/Tamarind-fruit-food-healthy-diet-128.png'
    }),
    FoodItem.create({
      name: 'mango',
      imageUrl:
        'https://cdn0.iconfinder.com/data/icons/fruits-114/145/fruits-22-128.png'
    }),
    FoodItem.create({
      name: 'almonds',
      imageUrl:
        'https://cdn0.iconfinder.com/data/icons/spices-seeds-and-nuts-ingredients/200/almonds_nuts-01-128.png'
    }),
    FoodItem.create({
      name: 'peanuts',
      imageUrl:
        'https://cdn2.iconfinder.com/data/icons/food-drink-60/50/1F95C-peanuts-128.png'
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
