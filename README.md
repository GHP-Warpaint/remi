# CHEF REMY

_Good things come in THREES_

And so does Chef Remy! Find us online, in the Alexa skills store, or download our progressive web app to your mobile device.

Upload an image of your grocery receipt to our site to add the groceries to your fridge. Then choose a recipe and follow along with Remy on your Amazon Alexa device as he talks you through each step of your recipe, patiently waiting for your next vocal command.

**Developers**:[Allison Sasso](https://github.com/AlliQS) | [Michelle Broomes](https://github.com/mbroomes22) | [Nora Lashner](https://github.com/nlashner) | [Shannon Crowley](https://github.com/scrowley016)

**Technologies**: Javascript, AWS Lambda, Spoonacular API, Speech Synthesis API, Edamam API, Node, Tesseract, Express, React, Redux, Redis, Git, Github, Sequelize, PSQL, HTML, and CSS

**Technology Implementation**:

* AWS Lambda - Necessary for programming Alexa and for connecting Alexa to our website's API.
* Spoonacular API - Provided the recipes and each recipe's individual ingredients, images, and cooking instructions.
* Speech Synthesis API - Enables browser based speech and voice recognition on the website.
* Edamam API - Gave unlimited options of foods for users to access and put into their fridge.
* Node - A Javascript runtime environment that allows Javascript to be executed severside (on the backend).
* Tesseract - A Javascript library that can translate words in images into browser readable English words using optical character recognition (OCR). Essential for Chef Remy's receipt scanner.
* Express - A framework for Node.js that helps with building web applications and APIs in an organized and readable fashion. We used this to make requests to our database for specific information.
* React - A frontend Javascript framework which builds user interfaces. React helps to ensure that state and the DOM (document object model) are working cohesively.
* Redux - Responsible for managing state and keeping it in an easily accessible location.
* PostgreSQL - A relational database where all of our web application's data is stored within various tables.
* Sequelize - A Javascript library that helps with managing the PSQL database.
* HTML/CSS - HTML provides the template structure for the DOM and all of the statically typed words seen on the DOM; CSS is responsible for styling all of the elements on the DOM.
  <!-- * Redis - A key-value database that stores all of its data in RAM, providing incredible data access speeds. Redis allows us to cache the info that the browser requires to render certain information so that on the user's visit they can quickly access the information they need.-->

## Setup

To get started on the website you can signup as a new user online or use your Amazon login to make an account with us. You can still use the website with all its functionality even without an Alexa skill, but to get the most out of our app (and to reduce the stress and mess in the kitchen) we recommend using Alexa from one of her enabled devices.

# Visit: https://chef-remy.herokuapp.com/ to get started.

## The Chef Remy website allows you to:

* Manually add items to your "fridge" as a user of Chef Remy
* Use the recipe scanner to populate your "fridge" with ingredients
* Speak with the browser Chef Remy to navigate site pages or seek help
* Find a recipe from our Daily Recipes listing
* Choose from a small selection of custom recipes tailored to your fridge items
* Save missing ingredients to a shopping list you can use while you're out stocking up on groceries

## For information on how to use our Alexa Skill, visit: https://chef-remy.herokuapp.com/about-alexa
